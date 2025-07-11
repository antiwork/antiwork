const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

class BountiesMonitor {
  constructor() {
    this.logFile = `bounties-monitor-${Date.now()}.log`;
    this.screenshotDir = `screenshots-${Date.now()}`;
    this.checkInterval = 5 * 60 * 1000; // Check every 5 minutes
    this.browser = null;
    this.page = null;
    this.isRunning = false;
    this.checkCount = 0;
    
    // Create screenshot directory
    if (!fs.existsSync(this.screenshotDir)) {
      fs.mkdirSync(this.screenshotDir);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async init() {
    try {
      this.browser = await puppeteer.launch({
        headless: true, // Run headless for monitoring
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      this.page = await this.browser.newPage();
      
      // Set viewport
      await this.page.setViewport({ width: 1920, height: 1080 });
      
      this.log('✅ Monitor initialized');
    } catch (error) {
      this.log(`❌ Failed to initialize: ${error.message}`);
      throw error;
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.log('🔒 Monitor closed');
    }
  }

  async checkBountiesPage() {
    this.checkCount++;
    const startTime = Date.now();
    
    try {
      this.log(`🔍 Check #${this.checkCount}: Loading bounties page...`);
      
      // Navigate to the page
      await this.page.goto('http://localhost:3000/bounties', {
        waitUntil: 'networkidle2',
        timeout: 30000
      });
      
      // Wait a bit for any dynamic content
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Check page state
      const pageState = await this.page.evaluate(() => {
        const body = document.body;
        const cards = document.querySelectorAll('[class*="bg-card"], [class*="rounded-xl"]');
        const loading = document.querySelector('[class*="animate-spin"]');
        const errorElements = document.querySelectorAll('p, div');
        const errorText = Array.from(errorElements)
          .map(el => el.textContent)
          .join(' ')
          .toLowerCase();
        
        const hasError = errorText.includes('error') || errorText.includes('failed');
        const hasLoading = !!loading;
        const hasCards = cards.length > 0;
        const bodyText = body.innerText.substring(0, 500);
        const bodyHTML = body.innerHTML.substring(0, 1000);
        
        return {
          hasCards,
          hasLoading,
          hasError,
          bodyText,
          bodyHTML,
          cardCount: cards.length,
          bodyLength: bodyText.length,
          htmlLength: bodyHTML.length
        };
      });
      
      const loadTime = Date.now() - startTime;
      
      // Determine if page is blank or has issues
      const isBlank = pageState.bodyLength < 100 || pageState.htmlLength < 500;
      const hasContent = pageState.hasCards && pageState.cardCount > 0;
      const hasIssues = pageState.hasError || isBlank;
      
      // Take screenshot for debugging
      const screenshotPath = path.join(this.screenshotDir, `check-${this.checkCount}-${Date.now()}.png`);
      await this.page.screenshot({ 
        path: screenshotPath, 
        fullPage: true 
      });
      
      // Log results
      const status = hasIssues ? '❌ ISSUE DETECTED' : '✅ OK';
      this.log(`${status} - Load time: ${loadTime}ms, Cards: ${pageState.cardCount}, Body length: ${pageState.bodyLength}`);
      
      if (hasIssues) {
        this.log(`🚨 ISSUE DETAILS:`);
        this.log(`   - Has cards: ${pageState.hasCards}`);
        this.log(`   - Has loading: ${pageState.hasLoading}`);
        this.log(`   - Has error: ${pageState.hasError}`);
        this.log(`   - Is blank: ${isBlank}`);
        this.log(`   - Screenshot: ${screenshotPath}`);
        this.log(`   - Body text: ${pageState.bodyText.substring(0, 200)}...`);
        
        // Save detailed state
        const stateFile = path.join(this.screenshotDir, `state-${this.checkCount}-${Date.now()}.json`);
        fs.writeFileSync(stateFile, JSON.stringify({
          timestamp: new Date().toISOString(),
          checkNumber: this.checkCount,
          pageState,
          loadTime,
          hasIssues
        }, null, 2));
        
        this.log(`   - State saved: ${stateFile}`);
      }
      
      return {
        checkNumber: this.checkCount,
        timestamp: new Date().toISOString(),
        loadTime,
        hasIssues,
        pageState,
        screenshotPath
      };
      
    } catch (error) {
      this.log(`❌ Check #${this.checkCount} failed: ${error.message}`);
      
      // Take screenshot even on error
      try {
        const screenshotPath = path.join(this.screenshotDir, `error-${this.checkCount}-${Date.now()}.png`);
        await this.page.screenshot({ path: screenshotPath });
        this.log(`   - Error screenshot: ${screenshotPath}`);
      } catch (screenshotError) {
        this.log(`   - Failed to take error screenshot: ${screenshotError.message}`);
      }
      
      return {
        checkNumber: this.checkCount,
        timestamp: new Date().toISOString(),
        error: error.message,
        hasIssues: true
      };
    }
  }

  async startMonitoring() {
    try {
      await this.init();
      this.isRunning = true;
      
      this.log('🚀 Starting continuous monitoring...');
      this.log(`📁 Log file: ${this.logFile}`);
      this.log(`📁 Screenshots: ${this.screenshotDir}`);
      this.log(`⏰ Check interval: ${this.checkInterval / 1000} seconds`);
      
      // Initial check
      await this.checkBountiesPage();
      
      // Set up continuous monitoring
      const monitorInterval = setInterval(async () => {
        if (!this.isRunning) {
          clearInterval(monitorInterval);
          return;
        }
        
        await this.checkBountiesPage();
      }, this.checkInterval);
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        this.log('🛑 Received SIGINT, shutting down...');
        this.isRunning = false;
        clearInterval(monitorInterval);
        await this.close();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        this.log('🛑 Received SIGTERM, shutting down...');
        this.isRunning = false;
        clearInterval(monitorInterval);
        await this.close();
        process.exit(0);
      });
      
    } catch (error) {
      this.log(`❌ Monitoring failed to start: ${error.message}`);
      await this.close();
      process.exit(1);
    }
  }

  // Quick test function
  async quickTest() {
    try {
      await this.init();
      this.log('🧪 Running quick test...');
      
      const result = await this.checkBountiesPage();
      
      this.log('📊 Quick test results:');
      this.log(`   - Success: ${!result.hasIssues}`);
      this.log(`   - Load time: ${result.loadTime}ms`);
      this.log(`   - Cards found: ${result.pageState?.cardCount || 0}`);
      
      await this.close();
      return result;
      
    } catch (error) {
      this.log(`❌ Quick test failed: ${error.message}`);
      await this.close();
      throw error;
    }
  }
}

// Command line interface
if (require.main === module) {
  const monitor = new BountiesMonitor();
  
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'monitor':
      monitor.startMonitoring();
      break;
      
    case 'test':
      monitor.quickTest()
        .then(() => process.exit(0))
        .catch(() => process.exit(1));
      break;
      
    default:
      console.log('Usage:');
      console.log('  node monitor-bounties.js monitor  # Start continuous monitoring');
      console.log('  node monitor-bounties.js test     # Run a quick test');
      process.exit(1);
  }
}

module.exports = BountiesMonitor; 