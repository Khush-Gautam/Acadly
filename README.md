# Acadly

Acadly is a frontend-first academic management and smart attendance platform built with **React**, **Vite**, **React Router**, and **Tailwind CSS**. It features three fully functional role-based portals — College, Teacher, and Student — all working from a single shared codebase.

The app is designed as both a **product prototype** and a **React learning resource**. Every file in the codebase is annotated with `TOPIC:` comments that map directly to core React concepts.

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Three-Portal Architecture

### 1. College Portal (`/college`)
- Edit institution profile
- Create courses and sections
- Assign teachers to timetable slots
- View assignment overview

### 2. Teacher Portal (`/teacher`)
- View assigned classes and schedule
- Start/end live attendance sessions with QR codes
- Post announcements
- Monitor student attendance

### 3. Student Portal (`/student`)
- Link to a course and section
- Scan QR to mark attendance (simulated)
- View timetable and announcements
- Track attendance progress
- Productivity tools with API-fetched quotes

## Demo Credentials

| Role | Identifier | Password |
|------|-----------|----------|
| College | admin@nst.ac.in | college123 |
| Teacher | rahul.kumar@nst.ac.in | teacher123 |
| Student | NST-CSAI-C01 | student123 |

## React Concepts — File Reference

Every file in the `src/` directory has `TOPIC:` comments that label which React concept is being demonstrated. Here's a complete index:

| React Topic | Where to Find It |
|------------|-------------------|
| **React, JSX** | Every `.jsx` file — all components use JSX syntax |
| **Variables in JSX** | `HomePage.jsx` (features/workflow arrays), `academicsData.js` |
| **JavaScript Expressions in JSX** | `AttendanceChart.jsx` (percentage calc), `AnnouncementCard.jsx` |
| **React Components** | Every file — all are function components |
| **Dynamic Rendering** | `PortalShell.jsx` (accent map), `StatCard.jsx` (color map) |
| **Conditional Rendering** | `LoginPage.jsx` (session check), `Modal.jsx` (early return), `Navbar.jsx` (menu) |
| **List Rendering** | `HomePage.jsx` (.map with keys), `CollegePortalPage.jsx`, `TeacherPortalPage.jsx` |
| **React State / useState** | `App.jsx` (portalState, session), every page (tabs, forms) |
| **React Events** | `LoginPage.jsx` (form submit), `Navbar.jsx` (menu toggle) |
| **Events + State Update** | `App.jsx` (all handler functions), `CollegePortalPage.jsx` (forms) |
| **JavaScript Import/Export** | `academicsData.js` (named exports), `App.jsx` (default export) |
| **React Props** | Every component — see destructured function parameters |
| **Lifting State Up** | `App.jsx` → all portal pages (state lives in App, passed as props) |
| **Component Lifecycle** | `App.jsx` comments explain mounting, updating |
| **useEffect Hook** | `App.jsx` (localStorage sync), `StudentPortalPage.jsx` |
| **Component Mounting** | `App.jsx` — useEffect runs on first render |
| **Component Updating** | `App.jsx` — useEffect dependency arrays trigger on changes |
| **Component Unmounting** | `App.jsx` — session cleanup on logout |
| **React API Integration** | `StudentPortalPage.jsx` — loadQuotesIfNeeded() |
| **JavaScript fetch API** | `StudentPortalPage.jsx` — fetch('https://dummyjson.com/quotes') |
| **API Data Managing** | `StudentPortalPage.jsx` — quotes stored in state |
| **API Loading State** | `StudentPortalPage.jsx` — quotesLoading boolean |
| **API Error Handling** | `StudentPortalPage.jsx` — .catch() with fallback data |
| **React CSS Styling** | `index.css` — custom CSS classes alongside Tailwind |
| **Tailwind CSS** | Every `.jsx` file — className with utility classes |
| **React Router** | `main.jsx` (BrowserRouter), `App.jsx` (Routes), `Navbar.jsx` (Link) |
| **Deploying React Apps** | See deployment section below |

## Project Structure

```
src/
├── main.jsx                    # Entry point — React, Router setup
├── App.jsx                     # Root component — state, routing, handlers
├── index.css                   # Global styles — Tailwind + custom CSS
├── data/
│   └── academicsData.js        # All app data and helper functions
├── components/
│   ├── Navbar.jsx              # Navigation bar
│   ├── PortalShell.jsx         # Shared portal layout
│   ├── StatCard.jsx            # Stat display card
│   ├── FeatureCard.jsx         # Feature highlight card
│   ├── RoleCard.jsx            # Role selection card
│   ├── SectionCard.jsx         # Content section wrapper
│   ├── AnnouncementCard.jsx    # Announcement display
│   ├── AttendanceChart.jsx     # Progress bar chart
│   ├── QRCode.jsx              # QR code display
│   ├── Modal.jsx               # Overlay dialog
│   ├── EmptyState.jsx          # Empty state placeholder
│   └── Footer.jsx              # Page footer
└── pages/
    ├── HomePage.jsx            # Landing page
    ├── LoginPage.jsx           # Authentication page
    ├── RoleSelectionPage.jsx   # Role comparison
    ├── CollegePortalPage.jsx   # College admin dashboard
    ├── TeacherPortalPage.jsx   # Teacher dashboard
    └── StudentPortalPage.jsx   # Student dashboard + API demo
```

## Deploying React Apps

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"** → select your repository
4. Vercel auto-detects Vite — no configuration needed
5. Click **Deploy** — your app goes live in ~30 seconds

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repo and configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Add a `public/_redirects` file with: `/* /index.html 200`
   (This ensures React Router works on page refresh)
6. Click **Deploy**

### Deploy Manually (Any Static Host)

```bash
# Build the production bundle
npm run build

# The output is in the dist/ folder
# Upload dist/ contents to any static file host
```

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool and dev server
- **React Router 7** — Client-side routing
- **Tailwind CSS 4** — Utility-first CSS framework
- **localStorage** — Data persistence (no backend needed)

## Summary

Acadly demonstrates how React can power a complete multi-role academic platform. Every file is annotated with educational comments that map to core React topics, making it useful as both a working app and a learning resource.
