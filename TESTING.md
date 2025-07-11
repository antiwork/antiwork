# Bounties Page Testing Guide

This guide helps you test and reproduce the blank screen issue that occurs every 4 days.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Run a quick test:**
   ```bash
   npm run test:quick
   ```

## Testing Scripts

### 1. Quick Test
Tests the bounties page once to check if it's working:
```bash
npm run test:quick
```

### 2. Comprehensive Test Suite
Runs multiple test scenarios including rate limiting, timeouts, and malformed responses:
```bash
npm run test:bounties
```

### 3. Stress Testing
Rapidly tests the page multiple times to reproduce issues:
```bash
# Quick stress test (20 iterations)
npm run stress:quick

# Full stress test (100 iterations, 5 concurrent)
npm run stress:full

# Custom stress test
node stress-test.js 50 3  # 50 iterations, 3 concurrent
```

### 4. Continuous Monitoring
Monitors the page continuously to catch the 4-day pattern:
```bash
npm run monitor:bounties
```

## Understanding the Issue

The blank screen issue likely occurs due to:

1. **GitHub API Rate Limiting**: Without a token, you're limited to 60 requests/hour
2. **Network Timeouts**: API calls timing out
3. **Empty Responses**: GitHub returning no data
4. **Memory Leaks**: Over time, the page accumulates memory issues
5. **Cache Issues**: Stale cached data causing problems

## Test Scenarios

### Rate Limit Simulation
The stress test randomly simulates GitHub API rate limiting (429 errors) to test error handling.

### Network Timeout Simulation
Simulates network timeouts to test how the page handles failed requests.

### Empty Response Simulation
Tests how the page handles when GitHub returns no bounties.

### Malformed JSON Simulation
Tests error handling when the API returns invalid JSON.

## Monitoring Output

### Log Files
- `bounties-monitor-{timestamp}.log`: Continuous monitoring logs
- `bounties-test-report-{timestamp}.json`: Test suite results

### Screenshots
- `screenshots-{timestamp}/`: Screenshots taken during monitoring
- `check-{number}-{timestamp}.png`: Normal check screenshots
- `error-{number}-{timestamp}.png`: Error state screenshots

### State Files
- `state-{number}-{timestamp}.json`: Detailed page state when issues are detected

## Reproducing the 4-Day Issue

### Method 1: Continuous Monitoring
```bash
# Start monitoring (runs indefinitely)
npm run monitor:bounties

# Let it run for several days to catch the pattern
```

### Method 2: Stress Testing
```bash
# Run stress tests repeatedly
for i in {1..10}; do
  echo "Stress test run $i"
  npm run stress:full
  sleep 300  # Wait 5 minutes between runs
done
```

### Method 3: Manual Testing
1. Open the bounties page
2. Refresh repeatedly (Ctrl+R or Cmd+R)
3. Check browser console for errors
4. Monitor network tab for failed requests

## Debugging Tips

### Check Browser Console
Open Developer Tools (F12) and look for:
- JavaScript errors
- Network request failures
- Memory warnings

### Check Network Tab
Look for:
- Failed API calls to `/api/bounties`
- 429 (rate limit) errors
- Timeout errors
- Empty responses

### Check Server Logs
Monitor the terminal running `npm run dev` for:
- API errors
- Rate limit warnings
- Cache issues

### Environment Variables
Add a GitHub token to increase rate limits:
```bash
# Create .env.local
flexile_devin_github_pat=your_github_token_here
```

## Expected Results

### Normal Operation
- Page loads with bounty cards
- Loading spinner appears briefly
- No errors in console
- API calls return 200 status

### Issue Detection
- Blank page with no content
- Error messages displayed
- Loading spinner stuck
- Network errors in console
