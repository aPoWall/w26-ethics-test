# Assets Folder

## Web Cover Image (OG Image)

Create `web-cover.png` (1200x630px) for social media previews.

### Quick Guide

1. **Take Screenshot**
   - Open `index.html` in browser
   - Zoom to 100%
   - Screenshot hero section (header + spectrum indicator)
   - Save as `screenshot.png`

2. **Resize to 1200x630px**
   - Use ImageMagick, Photoshop, or [squoosh.app](https://squoosh.app)
   - Maintain aspect ratio
   - Add padding if needed

3. **Save & Deploy**
   - Save as `web-cover.png` in this folder
   - Commit and redeploy to Netlify
   - Test with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

### Using ImageMagick

```bash
# Resize and crop to exact dimensions
convert screenshot.png -resize 1200x630^ -gravity center -extent 1200x630 web-cover.png

# Add white padding (alternative)
convert screenshot.png -resize 1200x630 -gravity center -background white -extent 1200x630 web-cover.png
```

### Using macOS Preview

1. Open screenshot in Preview
2. Tools → Adjust Size
3. Set width to 1200px, height to 630px
4. Scale proportionally
5. Export as PNG

### Using Browser DevTools

```javascript
// Take full-page screenshot with exact dimensions
// In Chrome DevTools Console:
const width = 1200;
const height = 630;
document.body.style.width = width + 'px';
document.body.style.height = height + 'px';
// Then: Cmd+Shift+P → "Capture screenshot"
```

### Design Recommendations

**Good OG images include:**
- Clear, readable text (even at small sizes)
- High contrast
- Brand colors (Doomer Red, Accelerationist Cyan)
- Centered composition
- 🛑 ⚖️ 🚀 emojis visible

**Avoid:**
- Too much text
- Small fonts (<24px)
- Busy backgrounds
- Low contrast

### Testing OG Image

After uploading, test with:
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### OG Image Specifications

- **Recommended size:** 1200x630px
- **Minimum size:** 600x315px
- **Maximum size:** 8MB
- **Aspect ratio:** 1.91:1
- **Format:** PNG or JPG

### Alternative: Use Figma

1. Create 1200x630px frame
2. Add gradient background (Doomer → Accelerationist)
3. Add title text: "AI Ethics Position Test"
4. Add emojis: 🛑 ⚖️ 🚀
5. Export as PNG

### Example Layout

```
┌─────────────────────────────────────┐
│                                     │
│   AI ETHICS POSITION TEST           │
│                                     │
│   🛑  DOOMER  ⚖️  NEUTRAL  🚀  e/acc │
│                                     │
│   Where do you stand?               │
│                                     │
└─────────────────────────────────────┘
```

## Other Assets (Optional)

- `favicon.ico` - Browser tab icon
- `logo.png` - App logo
- `screenshot-mobile.png` - Mobile preview
- `screenshot-desktop.png` - Desktop preview

## File Naming Convention

- `web-cover.png` - OG image for social sharing
- `favicon.ico` - 16x16 or 32x32 favicon
- `logo.png` - Square logo (500x500 recommended)
- `screenshot-*.png` - App screenshots for documentation