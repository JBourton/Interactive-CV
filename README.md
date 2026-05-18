# Interactive CV

An interactive representation of my professional journey, designed as an alternative to my static CV. Built with vanilla HTML, CSS, and JavaScript using Tailwind CSS for styling.

## How to Run

### Option A: Open Directly
Simply open `home.html` in your web browser. The site is fully client-side with no build process required.

### Option B: Run a Local Server
For the best experience (especially on some systems), run a local HTTP server:

**Using Python 3:**
```bash
python -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then open your browser and navigate to `http://localhost:8000` (or the port indicated by your server).

> A local server is recommended to avoid potential CORS issues with some browsers.

## Project Structure

```
.
├── home.html              # Main page (entry point)
├── script.js              # Interactive features (timeline, modals, skill board)
├── styles.css             # Custom CSS (extends Tailwind)
├── package.json           # Project metadata
├── Docs/
│   ├── Joshua Bourton CV.pdf
│   └── Media/             # Images and company logos
├── favicon.ico            # Browser tab icon
└── site.webmanifest       # PWA metadata
```

## Features

- **Interactive Timeline:** Expandable experience cards with detailed role descriptions
- **Skill Board:** Clickable skill categories with detailed experience descriptions for each skill
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Hobby Flip Cards:** Interactive cards that reveal personal interests on hover/click
- **Collapsible Education:** Expandable previous education section
- **Mobile Navigation:** Hamburger menu for responsive navigation
- **Dark Mode Support:** Native CSS media queries for system preferences
- **Google Analytics Integration:** Built-in tracking for visitor analytics

## Tech Stack

- **Frontend:** HTML5, CSS3, vanilla JavaScript
- **Styling:** Tailwind CSS v4 (via CDN), custom CSS
- **Charts & Interactivity:** Chart.js (for future use)
- **Fonts:** Google Fonts (Inter family)
- **Deployment:** Static site (no build required)

## Customization

All skill data is centralized in `script.js` under the `skillsData` object. To modify skills:

1. Open `script.js`
2. Locate the `skillsData` object (around line 37)
3. Edit categories, descriptions, or add new skills
4. Changes are reflected immediately upon page refresh

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

This is a static portfolio site with no server-side backend. All interactivity is handled client-side. The site is self-contained and can be deployed to any static hosting service (GitHub Pages, Vercel, Netlify, etc.) by simply pushing the repository.
