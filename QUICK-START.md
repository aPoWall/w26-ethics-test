# Quick Start Guide

## Test Locally (Right Now)

```bash
cd w26-ethics-test
open index.html
```

The app will open in your browser and work immediately with localStorage.

## Deploy to Netlify (5 minutes)

### Method 1: Drag & Drop (Easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `w26-ethics-test-live` folder
3. Get instant URL
4. Update meta tags with your URL

### Method 2: CLI (Recommended)
```bash
# Install Netlify CLI (one time)
npm install -g netlify-cli

# Deploy
cd w26-ethics-test
./deploy.sh
```

### Method 3: Git + Netlify
```bash
cd w26-ethics-test

# Initialize repo
git init
git add .
git commit -m "Initial commit: AI Ethics Position Test"

# Push to GitHub
gh repo create w26-ethics-test-live --public --source=. --push

# Connect to Netlify
netlify init
```

## After Deployment

1. **Update Meta Tags:**
   - Replace `YOUR-DOMAIN` in `index.html` with actual URL
   - Example: `https://ai-ethics-test.netlify.app`

2. **Create OG Image:**
   - Take screenshot of the app
   - Resize to 1200x630px
   - Save as `assets/web-cover.png`
   - Redeploy

3. **Share URL:**
   - Send to participants
   - Share on social media
   - Embed in presentations

## Features

- ✅ **No database** - works with localStorage
- ✅ **No build step** - pure HTML/CSS/JS
- ✅ **Mobile responsive** - works on all devices
- ✅ **Real-time updates** - see results instantly
- ✅ **Swiss design** - clean and minimal

## Next Steps

### Optional: Add Supabase (for cross-browser sync)
See README.md for Supabase integration instructions.

### Optional: Custom Domain
```bash
netlify domains:add yourdomain.com
```

### Optional: Analytics
Add Google Analytics or Plausible script to `<head>`.

## Troubleshooting

**Issue:** Changes not showing after deployment
- **Solution:** Hard refresh browser (Cmd+Shift+R / Ctrl+F5)

**Issue:** Meta tags not updating on social media
- **Solution:** Use [Facebook Debugger](https://developers.facebook.com/tools/debug/) to clear cache

**Issue:** Data not persisting
- **Solution:** Check browser localStorage is enabled (Privacy settings)