// Use built-in fetch (Node.js 18+)

async function testBountiesAPI() {
  console.log('🧪 Testing bounties API directly...');
  
  try {
    const startTime = Date.now();
    
    // Test the API endpoint directly
    const response = await fetch('http://localhost:3000/api/bounties');
    const data = await response.json();
    
    const loadTime = Date.now() - startTime;
    
    console.log('\n📊 API Test Results:');
    console.log(`   Status: ${response.status}`);
    console.log(`   Load time: ${loadTime}ms`);
    console.log(`   Response size: ${JSON.stringify(data).length} bytes`);
    
    if (data.issues) {
      console.log(`   Issues found: ${data.issues.length}`);
      console.log(`   Total bounties: ${data.total || data.issues.length}`);
      
      if (data.issues.length > 0) {
        console.log('\n📋 Sample bounties:');
        data.issues.slice(0, 3).forEach((issue, i) => {
          console.log(`   ${i + 1}. ${issue.title} (${issue.repository})`);
        });
      }
    }
    
    if (data.errors) {
      console.log('\n❌ API Errors:');
      data.errors.forEach(error => console.log(`   - ${error}`));
    }
    
    if (data.error) {
      console.log(`\n❌ API Error: ${data.error}`);
    }
    
    // Check if this would cause a blank page
    const wouldBeBlank = !data.issues || data.issues.length === 0;
    
    if (wouldBeBlank) {
      console.log('\n🚨 BLANK PAGE RISK: API returned no bounties!');
    } else {
      console.log('\n✅ API is working correctly');
    }
    
    return {
      success: response.ok && !wouldBeBlank,
      status: response.status,
      loadTime,
      issueCount: data.issues?.length || 0,
      hasErrors: !!(data.errors || data.error),
      wouldBeBlank
    };
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

// Run multiple tests to simulate the issue
async function runMultipleTests(count = 10) {
  console.log(`🚀 Running ${count} API tests...\n`);
  
  const results = [];
  
  for (let i = 1; i <= count; i++) {
    console.log(`Test ${i}/${count}:`);
    const result = await testBountiesAPI();
    results.push(result);
    
    if (i < count) {
      console.log('---');
      // Wait a bit between tests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Analyze results
  const successful = results.filter(r => r.success).length;
  const blankPages = results.filter(r => r.wouldBeBlank).length;
  const errors = results.filter(r => r.hasErrors).length;
  
  console.log('\n📈 Test Summary:');
  console.log(`   Total tests: ${count}`);
  console.log(`   Successful: ${successful}`);
  console.log(`   Would cause blank page: ${blankPages}`);
  console.log(`   Had errors: ${errors}`);
  console.log(`   Success rate: ${((successful / count) * 100).toFixed(1)}%`);
  
  if (blankPages > 0) {
    console.log('\n🚨 ISSUE CONFIRMED: Some API calls would cause blank pages!');
  }
  
  return results;
}

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args[0] === 'multiple') {
    const count = parseInt(args[1]) || 10;
    runMultipleTests(count);
  } else {
    testBountiesAPI();
  }
}

module.exports = { testBountiesAPI, runMultipleTests }; 