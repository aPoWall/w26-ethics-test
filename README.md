# AI Ethics Position Test - 2D Map | W26 Lab

**Interactive web application** for mapping AI ethics positions on a 2D graph with real-time community dashboard.

## Features

- **8 Scenario Questions** - W26 Lab themed (Mind Engineering, Joyful AI, Dogfooding)
- **2D Coordinate System** - Two axes:
  - **X-axis:** ДИСТОПИЯ ← → УТОПИЯ (Dystopia vs Utopia)
  - **Y-axis:** ПРИТОРМОЗИТЬ ↓ → ПОЕХАЛИ ↑ (Slow Down vs Can't Stop)
- **Real-time 2D Graph** - Gradient background with participant dots
- **Quadrant Analysis** - Four positions tracked with percentages
- **AI Mindset Aesthetic** - IBM Plex Mono, bold borders, Swiss design
- **No Backend Required** - Uses localStorage for persistence
- **Mobile Responsive** - Works on all devices

## Color Palette (AI Mindset Brand)

- **Red Accent:** `#DC2626`
- **Yellow:** `#F4E04D`
- **Green:** `#4D9F73`
- **Cyan:** `#0E7490`
- **Black:** `#171717`
- **Gray:** `#737373`

## Quick Start

### Option 1: Local Testing
```bash
# Open in browser
open index.html
```

### Option 2: Simple HTTP Server
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 3: Deploy to Netlify

1. **Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

2. **Via Drag & Drop:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the entire `w26-ethics-test-live` folder
   - Get instant URL

### Option 4: Deploy to GitHub Pages

```bash
# Create repo and push
git init
git add index.html README.md
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repo settings
# Source: main branch / root
```

## Database Schema

The app currently uses **localStorage** with this structure:

```javascript
{
  "ethicsTest2DParticipants": [
    {
      "id": "1707842400000",
      "name": "Alex",
      "x": 5,    // Dystopia (-16) to Utopia (+16)
      "y": 3,    // Slow Down (-16) to Can't Stop (+16)
      "timestamp": "2026-02-02T12:00:00Z",
      "answers": {
        "1": { x: 2, y: 1 },
        "2": { x: 1, y: 2 },
        // ... 8 questions total
      }
    }
  ]
}
```

## Upgrading to Supabase (Optional)

To add real-time sync across users:

1. **Create Supabase Project:**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Create table: `participants`

2. **Table Schema:**
```sql
CREATE TABLE participants (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  score INTEGER NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  answers JSONB
);

-- Enable Row Level Security
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert
CREATE POLICY "Allow public insert" ON participants
  FOR INSERT WITH CHECK (true);

-- Allow anyone to read
CREATE POLICY "Allow public read" ON participants
  FOR SELECT USING (true);
```

3. **Update JavaScript:**
   - Add Supabase client library
   - Replace localStorage calls with Supabase queries
   - Enable real-time subscriptions

## Questions (W26 Lab Themed)

1. Как вы видите будущее с AI?
2. Как быстро нужно развивать AI?
3. AI для личной продуктивности
4. Кто должен контролировать развитие AI?
5. AI Safety vs Joyful AI
6. Ваш подход к AI инструментам (Dogfooding)
7. Обучение работе с AI (Mind Engineering)
8. Прогресс AI - ответственность

## Scoring System (2D)

Each question affects BOTH axes:

- **X-axis (Dystopia ← → Utopia):** Total range -16 to +16
- **Y-axis (Slow Down ↓ → Can't Stop ↑):** Total range -16 to +16

### Quadrants:

1. **Top-Left** (x<0, y>0): Притормозить Дистопию
2. **Top-Right** (x>0, y>0): Поехали к Утопии
3. **Bottom-Left** (x<0, y<0): Не спешить, Опасно
4. **Bottom-Right** (x>0, y<0): Осторожный Оптимизм

## File Structure

```
w26-ethics-test-live/
├── index.html          # Complete standalone app
└── README.md          # This file
```

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Notes

- Data persists in browser localStorage
- Clearing browser data will reset participants
- Share URL with participants to collect responses
- For production use, consider adding Supabase backend
- No build step required - just deploy the HTML file

## Customization

To modify questions or scoring:
1. Edit the `questions` array in `<script>` section
2. Adjust `getPositionLabel()` function for custom labels
3. Update color scheme in CSS `:root` variables

## License

Open source - feel free to adapt and use.