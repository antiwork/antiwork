# Antiwork

A Next.js application for displaying open source bounties from various repositories.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, set up environment variables:

```bash
# Option 1: Use Vercel environment variables
vercel env pull

# Option 2: Create .env.local file manually
echo "GITHUB_TOKEN=your_github_token_here" > .env.local
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

### GITHUB_TOKEN (Required)
A GitHub Personal Access Token is required to prevent API rate limiting issues.

**Without a token:** Limited to 60 requests per hour (may cause blank screen issues)
**With a token:** 5,000 requests per hour

#### How to create a GitHub token:
1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Antiwork Bounties")
4. Select scopes: `public_repo` (for public repositories)
5. Click "Generate token"
6. Copy the token and add it to your `.env.local` file

#### Example .env.local:
```bash
GITHUB_TOKEN=ghp_your_token_here
```

**Important:** After updating your `.env.local` file, restart your development server for the changes to take effect:
```bash
# Stop the current server (Ctrl+C)
# Then restart it
npm run dev
```

## Troubleshooting

### Blank Screen Issue
If the bounties page goes blank:
1. Check that `GITHUB_TOKEN` is set in your `.env.local` file
2. Verify your token has the correct permissions
3. **Restart your development server** after making changes to `.env.local`
4. Wait a few minutes if you've hit rate limits
5. Check the browser console for error messages
