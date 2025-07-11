const puppeteer = require('puppeteer');

async function simpleTest() {
  const browser = await puppeteer.launch({
    headless: false, // Show the browser so we can see what's happening
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();
  
  try {
    console.log('🧪 Loading bounties page...');
    
    // Navigate to the page
    await page.goto('http://localhost:3000/bounties', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Check what's on the page
    const pageInfo = await page.evaluate(() => {
      const body = document.body;
      const cards = document.querySelectorAll('[class*="bg-card"], [class*="rounded-xl"]');
      const loading = document.querySelector('[class*="animate-spin"]');
      const errorElements = document.querySelectorAll('p, div, h1, h2, h3');
      
      // Get all text content
      const allText = Array.from(errorElements)
        .map(el => el.textContent)
        .filter(text => text && text.trim().length > 0)
        .join(' ');
      
      return {
        title: document.title,
        url: window.location.href,
        hasCards: cards.length > 0,
        cardCount: cards.length,
        isLoading: !!loading,
        bodyText: body.innerText.substring(0, 1000),
        allText: allText.substring(0, 1000),
        bodyLength: body.innerText.length,
        htmlLength: body.innerHTML.length
      };
    });
    
    console.log('\n📊 Page Analysis:');
    console.log(`   Title: ${pageInfo.title}`);
    console.log(`   URL: ${pageInfo.url}`);
    console.log(`   Has cards: ${pageInfo.hasCards}`);
    console.log(`   Card count: ${pageInfo.cardCount}`);
    console.log(`   Is loading: ${pageInfo.isLoading}`);
    console.log(`   Body length: ${pageInfo.bodyLength}`);
    console.log(`   HTML length: ${pageInfo.htmlLength}`);
    
    console.log('\n📝 Page content:');
    console.log(pageInfo.bodyText);
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'simple-test-screenshot.png', 
      fullPage: true 
    });
    console.log('\n📸 Screenshot saved: simple-test-screenshot.png');
    
    // Check network requests
    const requests = await page.evaluate(() => {
      return performance.getEntriesByType('resource')
        .filter(r => r.name.includes('/api/'))
        .map(r => ({
          name: r.name,
          duration: r.duration,
          transferSize: r.transferSize
        }));
    });
    
    console.log('\n🌐 API Requests:');
    requests.forEach(req => {
      console.log(`   ${req.name} - ${req.duration}ms - ${req.transferSize} bytes`);
    });
    
    if (pageInfo.cardCount === 0) {
      console.log('\n❌ ISSUE DETECTED: No bounty cards found!');
      console.log('This confirms the blank screen issue.');
    } else {
      console.log('\n✅ SUCCESS: Bounty cards found!');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the test
if (require.main === module) {
  simpleTest();
}

module.exports = simpleTest; 