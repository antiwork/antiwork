const puppeteer = require('puppeteer');

class StressTester {
  constructor() {
    this.browser = null;
    this.results = [];
    this.failures = [];
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async createPage() {
    const page = await this.browser.newPage();
    
    // Set up request interception to simulate various failures
    await page.setRequestInterception(true);
    
    page.on('request', async (request) => {
      if (request.url().includes('/api/bounties')) {
        // Randomly choose different failure scenarios
        const scenario = Math.random();
        
        if (scenario < 0.1) {
          // 10% chance: Rate limit error
          await request.respond({
            status: 429,
            contentType: 'application/json',
            body: JSON.stringify({ error: 'Rate limit exceeded' })
          });
        } else if (scenario < 0.2) {
          // 10% chance: Network timeout
          setTimeout(() => request.abort(), 100);
        } else if (scenario < 0.3) {
          // 10% chance: Empty response
          await request.respond({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ issues: [], total: 0 })
          });
        } else if (scenario < 0.4) {
          // 10% chance: Malformed JSON
          await request.respond({
            status: 200,
            contentType: 'application/json',
            body: '{"invalid": "json"'
          });
        } else {
          // 60% chance: Let it through normally
          request.continue();
        }
      } else {
        request.continue();
      }
    });
    
    return page;
  }

  async testPage(page, testNumber) {
    const startTime = Date.now();
    
    try {
      await page.goto('http://localhost:3000/bounties', {
        waitUntil: 'networkidle2',
        timeout: 15000
      });
      
      // Wait for content to settle
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Check page state
      const state = await page.evaluate(() => {
        const cards = document.querySelectorAll('[class*="bg-card"], [class*="rounded-xl"]');
        const loading = document.querySelector('[class*="animate-spin"]');
        const errorText = document.body.innerText.toLowerCase();
        const hasError = errorText.includes('error') || errorText.includes('failed');
        
        return {
          hasCards: cards.length > 0,
          cardCount: cards.length,
          isLoading: !!loading,
          hasError,
          bodyLength: document.body.innerText.length,
          htmlLength: document.body.innerHTML.length
        };
      });
      
      const loadTime = Date.now() - startTime;
      const isBlank = state.bodyLength < 100 || state.htmlLength < 500;
      const success = state.hasCards && !state.hasError && !isBlank;
      
      const result = {
        testNumber,
        timestamp: new Date().toISOString(),
        success,
        loadTime,
        state,
        isBlank
      };
      
      if (!success) {
        this.failures.push(result);
        console.log(`❌ Test ${testNumber} FAILED - Blank: ${isBlank}, Cards: ${state.cardCount}, Error: ${state.hasError}`);
      } else {
        console.log(`✅ Test ${testNumber} PASSED - ${loadTime}ms, ${state.cardCount} cards`);
      }
      
      this.results.push(result);
      return result;
      
    } catch (error) {
      const result = {
        testNumber,
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      };
      
      this.failures.push(result);
      console.log(`💥 Test ${testNumber} CRASHED - ${error.message}`);
      this.results.push(result);
      return result;
    }
  }

  async runStressTest(iterations = 100, concurrency = 5) {
    console.log(`🚀 Starting stress test: ${iterations} iterations, ${concurrency} concurrent`);
    
    await this.init();
    
    const startTime = Date.now();
    
    // Run tests in batches
    for (let i = 0; i < iterations; i += concurrency) {
      const batch = [];
      
      for (let j = 0; j < concurrency && i + j < iterations; j++) {
        const page = await this.createPage();
        batch.push(this.testPage(page, i + j + 1));
      }
      
      await Promise.all(batch);
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    const totalTime = Date.now() - startTime;
    const successCount = this.results.filter(r => r.success).length;
    const failureCount = this.failures.length;
    
    console.log('\n📊 Stress Test Results:');
    console.log(`   Total tests: ${iterations}`);
    console.log(`   Successful: ${successCount}`);
    console.log(`   Failed: ${failureCount}`);
    console.log(`   Success rate: ${((successCount / iterations) * 100).toFixed(1)}%`);
    console.log(`   Total time: ${totalTime}ms`);
    console.log(`   Average time per test: ${(totalTime / iterations).toFixed(0)}ms`);
    
    if (this.failures.length > 0) {
      console.log('\n❌ Failures detected:');
      this.failures.slice(0, 10).forEach(failure => {
        console.log(`   Test ${failure.testNumber}: ${failure.error || 'Blank page'}`);
      });
      
      if (this.failures.length > 10) {
        console.log(`   ... and ${this.failures.length - 10} more failures`);
      }
    }
    
    await this.close();
    
    return {
      total: iterations,
      successful: successCount,
      failed: failureCount,
      successRate: (successCount / iterations) * 100,
      totalTime,
      failures: this.failures
    };
  }

  // Quick stress test
  async quickStressTest() {
    console.log('🧪 Running quick stress test (20 iterations)...');
    return this.runStressTest(20, 3);
  }
}

// Command line interface
if (require.main === module) {
  const tester = new StressTester();
  
  const args = process.argv.slice(2);
  const iterations = parseInt(args[0]) || 100;
  const concurrency = parseInt(args[1]) || 5;
  
  if (args[0] === 'quick') {
    tester.quickStressTest()
      .then(results => {
        console.log('\n✅ Quick stress test completed');
        process.exit(results.failed > 0 ? 1 : 0);
      })
      .catch(error => {
        console.error('❌ Quick stress test failed:', error);
        process.exit(1);
      });
  } else {
    tester.runStressTest(iterations, concurrency)
      .then(results => {
        console.log('\n✅ Stress test completed');
        process.exit(results.failed > 0 ? 1 : 0);
      })
      .catch(error => {
        console.error('❌ Stress test failed:', error);
        process.exit(1);
      });
  }
}

module.exports = StressTester; 