#!/bin/bash

# Simple curl test for bounties API
echo "🧪 Testing bounties API with curl..."

# Test the API
response=$(curl -s -w "\n%{http_code}\n%{time_total}" http://localhost:3000/api/bounties)

# Extract the response parts
http_code=$(echo "$response" | tail -2 | head -1)
time_total=$(echo "$response" | tail -1)
json_data=$(echo "$response" | head -n -2)

echo "📊 API Test Results:"
echo "   Status: $http_code"
echo "   Time: ${time_total}s"
echo "   Response size: ${#json_data} bytes"

# Check if we got a successful response
if [ "$http_code" = "200" ]; then
    echo "   ✅ API responded successfully"
    
    # Count issues using jq if available, otherwise use grep
    if command -v jq &> /dev/null; then
        issue_count=$(echo "$json_data" | jq '.issues | length')
        echo "   Issues found: $issue_count"
        
        if [ "$issue_count" -gt 0 ]; then
            echo "   ✅ Bounties available"
        else
            echo "   🚨 BLANK PAGE RISK: No bounties returned!"
        fi
    else
        # Simple check without jq
        if echo "$json_data" | grep -q '"issues"' && echo "$json_data" | grep -q '"title"'; then
            echo "   ✅ Bounties available (detected via grep)"
        else
            echo "   🚨 BLANK PAGE RISK: No bounties detected!"
        fi
    fi
else
    echo "   ❌ API failed with status $http_code"
fi

echo "" 