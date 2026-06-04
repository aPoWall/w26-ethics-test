# Deployment Checklist

## Pre-Deployment

- [ ] **Test locally** - Open `index.html` in browser
- [ ] **Fill out test** - Complete all 8 questions
- [ ] **Check dashboard** - Verify results display correctly
- [ ] **Test retake** - Click "Take Test Again" button
- [ ] **Add another participant** - Test with different name/answers
- [ ] **Check spectrum** - Verify dots appear on visualization
- [ ] **Test hover** - Confirm tooltips work on participant dots
- [ ] **Mobile test** - Open on phone/tablet

## Deployment Steps

### Option A: Netlify CLI (Recommended)

```bash
# 1. Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# 2. Navigate to project
cd w26-ethics-test

# 3. Run deployment script
./deploy.sh

# 4. Follow prompts
```

### Option B: Netlify Drag & Drop

- [ ] Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- [ ] Drag `w26-ethics-test-live` folder
- [ ] Wait for deployment
- [ ] Copy URL

### Option C: GitHub + Netlify

```bash
# 1. Create GitHub repo
cd w26-ethics-test
git init
git add .
git commit -m "Initial commit: AI Ethics Position Test"
gh repo create w26-ethics-test-live --public --source=. --push

# 2. Connect to Netlify
netlify init
```

## Post-Deployment

- [ ] **Test live URL** - Visit deployed site
- [ ] **Verify functionality:**
  - [ ] Test form works
  - [ ] Results display correctly
  - [ ] Dashboard updates
  - [ ] Mobile responsive
- [ ] **Update meta tags:**
  - [ ] Replace `YOUR-DOMAIN` in `index.html` with actual URL
  - [ ] Commit and redeploy
- [ ] **Create OG image:**
  - [ ] Take screenshot of hero section
  - [ ] Resize to 1200x630px
  - [ ] Save as `assets/web-cover.png`
  - [ ] Upload to Netlify
- [ ] **Test social sharing:**
  - [ ] Share URL on Telegram/Slack
  - [ ] Verify preview card appears
  - [ ] Check image displays
- [ ] **Clear social cache (if needed):**
  - [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Distribution

- [ ] **Share URL with participants:**
  - [ ] Workshop attendees
  - [ ] AI Mindset community
  - [ ] Social media
- [ ] **Embed in materials:**
  - [ ] Workshop deck
  - [ ] Email newsletter
  - [ ] Notion page
- [ ] **Monitor participation:**
  - [ ] Check dashboard periodically
  - [ ] Note interesting trends
  - [ ] Screenshot results

## Optional Enhancements

- [ ] **Custom domain:**
  ```bash
  netlify domains:add your-domain.com
  ```
- [ ] **Analytics:**
  - [ ] Add Google Analytics
  - [ ] Add Plausible
  - [ ] Add Fathom
- [ ] **Supabase backend:**
  - [ ] Create Supabase project
  - [ ] Set up database
  - [ ] Update JavaScript
  - [ ] Test real-time sync

## Troubleshooting

### Issue: Changes not showing
**Solution:** Hard refresh (Cmd+Shift+R / Ctrl+F5)

### Issue: Meta tags not updating
**Solution:** Clear social media cache with debugging tools

### Issue: Data not persisting
**Solution:** Check browser localStorage is enabled

### Issue: Mobile layout broken
**Solution:** Test viewport meta tag is present

### Issue: Deployment fails
**Solution:** Check Netlify logs for errors

## Rollback Plan

If deployment fails:
```bash
# Revert to previous version
netlify rollback
```

## Production URLs

**Primary:** ________________________________

**Backup:** _________________________________

**Custom domain:** ___________________________

## Notes

- Remember to clear localStorage during testing
- Data persists per-browser (not cross-device)
- Consider Supabase for production use with many users
- Keep backup of participant data if needed

## Success Criteria

- [ ] Site loads in <2 seconds
- [ ] All questions display correctly
- [ ] Form validation works
- [ ] Dashboard shows all participants
- [ ] Mobile experience is smooth
- [ ] Social preview looks good
- [ ] No console errors

## Launch Date

**Target:** _________________________________

**Actual:** _________________________________

## Contact

**Developer:** Alex (Claude Code)
**Date Created:** 2026-02-02
**Project:** W26 Workshop 03 - AI Ethics