You are building a modern, minimal, fast personal landing + portfolio for a Senior Backend Engineer.

STACK
- Astro (latest)
- Tailwind CSS
- TypeScript
- Static site
- Target deployment: GitHub Pages

GOAL
Create a clean, minimal, premium-feel personal website focused on:
- Who I am
- What kind of problems I solve
- My CV
- 2–3 high-quality case studies

No CMS.
No external UI kits.
No heavy animation libraries.
Use Tailwind only.
Keep everything simple, readable, and fast.

DESIGN DIRECTION
- Modern, minimal, premium (Linear / Vercel style)
- Large headings, strong typography hierarchy
- Plenty of whitespace
- Subtle hover and focus transitions
- Mobile-first
- Light + Dark mode with toggle
- Persist theme in localStorage
- Accessible: semantic HTML, contrast, keyboard navigation

SITE PAGES / ROUTES
- /
- /case-studies
- /case-studies/[slug]
- /cv
- /404 (simple)

GLOBAL LAYOUT
- Sticky top navigation with subtle blur on scroll
- Name on left: Bruno Donadío
- Links on right: CV, Case Studies, LinkedIn
- Max-width centered container
- Footer with name, year, and links

HOME PAGE SECTIONS
1) Hero
   - Large headline: "Senior Backend Engineer"
   - Short subheading describing platform-minded backend work
   - Two CTA buttons:
     - Download CV (PDF)
     - View Case Studies

2) About
   - Short paragraph + 3–5 bullet points describing:
     - Backend engineering
     - Platform-minded systems
     - Reliability
     - Integrations
     - Delivery ownership

3) Core Strengths
   - Grid of 6 cards:
     - Backend Engineering
     - System Design
     - Integrations
     - Reliability
     - Delivery & Ownership
     - CI/CD & Environments

4) Featured Case Studies
   - Show 3 case study cards pulled from local data

5) Contact
   - Short call to action
   - Email link: bruno.donadio@icloud.com
   - LinkedIn link (use the profile URL provided in the CV)

CASE STUDIES DATA MODEL
Create a local TypeScript data file:

src/data/caseStudies.ts

Each case study should include:

- slug
- title
- subtitle
- timeframe
- role
- tags (array)
- problem
- solution
- impact
- stack (array)
- highlights (array)
- sections (array of { heading, content })

Create 3 placeholder case studies:

1) Internal Operations Platform
   - Focused on internal business systems

2) Game Server Hosting Platform
   - Hosting + control panel + automation

3) Quality at Scale
   - Large product teams, automation, release confidence

CASE STUDIES LIST PAGE
- Page title and short intro
- Grid of case study cards
- Optional simple tag filter

CASE STUDY DETAIL PAGE
- Header with title, subtitle, role, timeframe, stack tags
- Sections rendered from data:
  - Context
  - Constraints
  - Solution
  - Key Decisions
  - Impact
  - Learnings
- Back link to case studies list

CV PAGE
- Minimal page
- Button:
  "Download CV (PDF)"
  linking to /assets/Bruno-Donadio-Resume.pdf
- Text link to LinkedIn
- Short note:
  "Detailed case studies are available on this website."

ASSETS
- Create public/assets/Bruno-Donadio-Resume.pdf (placeholder file)
- Favicon placeholder
- Basic SEO meta tags (title, description, og tags)

TECHNICAL REQUIREMENTS
- Astro with Tailwind configured
- Dark mode using class strategy
- Simple utility for theme toggle
- Responsive across breakpoints
- No runtime errors

OUTPUT REQUIREMENTS
- Provide full file tree
- Provide contents of all files
- Site must run with:
  npm install
  npm run dev

README
Include a README.md with:
- Project overview
- Local dev instructions
- GitHub Pages deploy notes (Astro static adapter)

IMPORTANT
Focus first on structure, layout, and components.
Content can be simple placeholder text.
Do not overengineer.
