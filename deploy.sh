#!/bin/bash

# AI Ethics Test - Deployment Script
# Deploys to Netlify

set -e

echo "🚀 AI Ethics Position Test - Deployment"
echo "========================================"
echo ""

# Check if netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "❌ Netlify CLI not found"
    echo "Install with: npm install -g netlify-cli"
    exit 1
fi

echo "✅ Netlify CLI found"
echo ""

# Check if logged in
if ! netlify status &> /dev/null; then
    echo "🔐 Logging in to Netlify..."
    netlify login
fi

echo "✅ Authenticated with Netlify"
echo ""

# Deploy
echo "📦 Deploying to Netlify..."
echo ""

netlify deploy --prod

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 Your AI Ethics Test is live!"
echo ""