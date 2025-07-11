const puppeteer = require('puppeteer');
const fs = require('fs');

class BountiesPageTester {
  constructor() {
    this.results = [];
    this.browser = null;
    this.page = null;
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: false, // Set to true for production testing
      defaultViewport: { width: 1920, height: 1080 }
    });
    this.page = await this.browser.newPage();
    
    // Enable request interception to simulate failures
    await this.page.setRequestInterception(true);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  // Test 1: Normal loading
  async testNormalLoad() {
    console.log('🧪 Test 1: Normal loading');
    const startTime = Date.now();
    
    try {
      await this.page.goto('http://localhost:3000/bounties', { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });
      
      // Wait for content to load
      await this.page.waitForSelector('[data-testid="bounties-container"]', { timeout: 10000 })
        .catch(() => console.log('No bounties container found'));
      
      const hasContent = await this.page.evaluate(() => {
        const cards = document.querySelectorAll('[class*="bg-card"], [class*="rounded-xl"]');
        const loading = document.querySelector('[class*="animate-spin"]');
        const error = document.querySelector('p:contains("Error")');
        
        return {
          hasCards: cards.length > 0,
          isLoading: !!loading,
          hasError: !!error,
          bodyText: document.body.innerText.substring(0, 200)
        };
      });
      
      const loadTime = Date.now() - startTime;
      this.results.push({
        test: 'Normal Load',
        success: hasContent.hasCards || !hasContent.hasError,
        loadTime,
        hasContent: hasContent.hasCards,
        hasError: hasContent.hasError,
        isLoading: hasContent.isLoading,
        bodyText: hasContent.bodyText
      });
      
      console.log(`✅ Normal load completed in ${loadTime}ms`);
      return hasContent;
    } catch (error) {
      console.error('❌ Normal load failed:', error.message);
      this.results.push({
        test: 'Normal Load',
        success: false,
        error: error.message
      });
      return null;
    }
  }

  // Test 2: Simulate GitHub API rate limiting
  async testRateLimitSimulation() {
    console.log('🧪 Test 2: Rate limit simulation');
    
    // Intercept API calls and return rate limit error
    this.page.on('request', async (request) => {
      if (request.url().includes('/api/bounties')) {
        await request.respond({
          status: 429,
          contentType: 'application/json',
          body: JSON.stringify({
            error: 'GitHub API rate limit exceeded',
            message: 'API rate limit exceeded for this IP'
          })
        });
      } else {
        request.continue();
      }
    });
    
    const result = await this.testNormalLoad();
    this.results.push({
      test: 'Rate Limit Simulation',
      success: result && !result.hasError,
      hasError: result?.hasError,
      errorMessage: result?.bodyText
    });
    
    // Reset interception
    this.page.off('request');
  }

  // Test 3: Simulate network timeout
  async testNetworkTimeout() {
    console.log('🧪 Test 3: Network timeout simulation');
    
    this.page.on('request', async (request) => {
      if (request.url().includes('/api/bounties')) {
        // Don't respond, simulating timeout
        setTimeout(() => {
          request.abort();
        }, 100);
      } else {
        request.continue();
      }
    });
    
    const result = await this.testNormalLoad();
    this.results.push({
      test: 'Network Timeout',
      success: result && !result.hasError,
      hasError: result?.hasError,
      timeout: true
    });
    
    this.page.off('request');
  }

  // Test 4: Simulate empty response
  async testEmptyResponse() {
    console.log('🧪 Test 4: Empty response simulation');
    
    this.page.on('request', async (request) => {
      if (request.url().includes('/api/bounties')) {
        await request.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            issues: [],
            total: 0
          })
        });
      } else {
        request.continue();
      }
    });
    
    const result = await this.testNormalLoad();
    this.results.push({
      test: 'Empty Response',
      success: result && !result.hasError,
      hasContent: result?.hasContent,
      isEmpty: !result?.hasContent
    });
    
    this.page.off('request');
  }

  // Test 5: Simulate malformed response
  async testMalformedResponse() {
    console.log('🧪 Test 5: Malformed response simulation');
    
    this.page.on('request', async (request) => {
      if (request.url().includes('/api/bounties')) {
        await request.respond({
          status: 200,
          contentType: 'application/json',
          body: '{"invalid": "json"'
        });
      } else {
        request.continue();
      }
    });
    
    const result = await this.testNormalLoad();
    this.results.push({
      test: 'Malformed Response',
      success: result && !result.hasError,
      hasError: result?.hasError
    });
    
    this.page.off('request');
  }

  // Test 6: Long-running test to simulate 4-day pattern
  async testLongRunning() {
    console.log('🧪 Test 6: Long-running test (simulating 4-day pattern)');
    
    const iterations = 10; // Simulate multiple days
    const results = [];
    
    for (let i = 0; i < iterations; i++) {
      console.log(`\n--- Iteration ${i + 1}/${iterations} ---`);
      
      // Randomly choose a failure scenario
      const scenarios = [
        () => this.testNormalLoad(),
        () => this.testRateLimitSimulation(),
        () => this.testNetworkTimeout(),
        () => this.testEmptyResponse(),
        () => this.testMalformedResponse()
      ];
      
      const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      const result = await randomScenario();
      
      results.push({
        iteration: i + 1,
        timestamp: new Date().toISOString(),
        result
      });
      
      // Wait between iterations
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    this.results.push({
      test: 'Long Running Test',
      iterations: results.length,
      results
    });
  }

  // Test 7: Memory leak detection
  async testMemoryLeak() {
    console.log('🧪 Test 7: Memory leak detection');
    
    const memorySnapshots = [];
    
          for (let i = 0; i < 20; i++) {
        await this.page.goto('http://localhost:3000/bounties');
        await new Promise(resolve => setTimeout(resolve, 1000));
      
      const memoryInfo = await this.page.evaluate(() => {
        if (performance.memory) {
          return {
            usedJSHeapSize: performance.memory.usedJSHeapSize,
            totalJSHeapSize: performance.memory.totalJSHeapSize,
            jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
          };
        }
        return null;
      });
      
      memorySnapshots.push({
        iteration: i,
        memory: memoryInfo,
        timestamp: new Date().toISOString()
      });
      
      console.log(`Memory snapshot ${i + 1}:`, memoryInfo);
    }
    
    this.results.push({
      test: 'Memory Leak Detection',
      snapshots: memorySnapshots
    });
  }

  // Generate test report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests: this.results.length,
        successfulTests: this.results.filter(r => r.success !== false).length,
        failedTests: this.results.filter(r => r.success === false).length
      },
      results: this.results
    };
    
    // Save report to file
    const filename = `bounties-test-report-${Date.now()}.json`;
    fs.writeFileSync(filename, JSON.stringify(report, null, 2));
    
    console.log(`\n📊 Test Report saved to: ${filename}`);
    console.log(`📈 Summary: ${report.summary.successfulTests}/${report.summary.totalTests} tests passed`);
    
    return report;
  }

  // Run all tests
  async runAllTests() {
    try {
      await this.init();
      
      console.log('🚀 Starting Bounties Page Tests...\n');
      
      await this.testNormalLoad();
      await this.testRateLimitSimulation();
      await this.testNetworkTimeout();
      await this.testEmptyResponse();
      await this.testMalformedResponse();
      await this.testLongRunning();
      await this.testMemoryLeak();
      
      const report = this.generateReport();
      
      // Check for potential issues
      const issues = this.analyzeResults(report);
      if (issues.length > 0) {
        console.log('\n⚠️  Potential Issues Found:');
        issues.forEach(issue => console.log(`- ${issue}`));
      }
      
    } catch (error) {
      console.error('❌ Test suite failed:', error);
    } finally {
      await this.close();
    }
  }

  // Analyze results for potential issues
  analyzeResults(report) {
    const issues = [];
    
    // Check for consistent failures
    const failures = report.results.filter(r => r.success === false);
    if (failures.length > 0) {
      issues.push(`${failures.length} tests failed`);
    }
    
    // Check for memory leaks
    const memoryTest = report.results.find(r => r.test === 'Memory Leak Detection');
    if (memoryTest && memoryTest.snapshots) {
      const snapshots = memoryTest.snapshots;
      const firstMemory = snapshots[0]?.memory?.usedJSHeapSize;
      const lastMemory = snapshots[snapshots.length - 1]?.memory?.usedJSHeapSize;
      
      if (firstMemory && lastMemory && lastMemory > firstMemory * 1.5) {
        issues.push('Potential memory leak detected');
      }
    }
    
    // Check for long-running test issues
    const longRunningTest = report.results.find(r => r.test === 'Long Running Test');
    if (longRunningTest && longRunningTest.results) {
      const failures = longRunningTest.results.filter(r => !r.result?.hasContent);
      if (failures.length > 0) {
        issues.push(`${failures.length} iterations in long-running test failed`);
      }
    }
    
    return issues;
  }
}

// Run the tests
if (require.main === module) {
  const tester = new BountiesPageTester();
  tester.runAllTests();
}

module.exports = BountiesPageTester; 