# Work Nest Frontend

Work Nest is a polished, responsive marketing website for a modern team workspace platform. It presents WorkNest as an all-in-one product for project management, collaboration, workflow tracking, AI-powered automation, analytics, resources, pricing, and company information.

The frontend is built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Features

- Responsive multi-page React application
- Modern landing page with animated hero and product mockups
- Product-focused sections for:
  - Smart workspaces
  - AI automation
  - Team collaboration
  - Data management
  - Workflow tracking
  - Real-time analytics
- Pricing, testimonials, FAQ, and call-to-action sections
- Dedicated pages for:
  - Home
  - Resources
  - About
  - Contact
- Smooth UI animations powered by Framer Motion
- Icon system using Lucide React
- Custom Tailwind theme with navy, gold, cream, and muted brand colors
- Reusable layout and section components
- Vite-based development and production build setup

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **React Router DOM**
- **Lucide React**
- **ESLint**
- **PostCSS**
- **Autoprefixer**

## Project Structure

work-nest-fe/
├── public/
│   └── Work_Nest_Logo.png
├── src/
│   ├── components/
│   │   ├── CTASection.tsx
│   │   ├── FAQ.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LogoCloud.tsx
│   │   ├── Navbar.tsx
│   │   ├── PageHero.tsx
│   │   ├── Pricing.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── ScrollToHash.tsx
│   │   ├── Solutions.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyWorkNest.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Resources.tsx
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

Recommended:
bash node --version npm --version


## Installation

Install project dependencies:
bash npm install


## Development

Start the local development server:
bash npm run dev

The app will be served by Vite, usually at:
http://localhost:5173


## Build

Create a production-ready build:
bash npm run build


The output will be generated in the `dist/` directory.

## Preview Production Build

Preview the production build locally:
bash npm run preview


## Linting

Run ESLint across JavaScript, JSX, TypeScript, and TSX files:
bash npm run lint


## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |

## Routing

The app uses `react-router-dom` and currently includes the following routes:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/resources` | Resources |
| `/about` | About |
| `/contact` | Contact |

## Styling

Styling is handled with Tailwind CSS and custom global CSS.

The project includes a custom brand theme with:

- Navy color palette
- Gold accent palette
- Cream background colors
- Custom shadows
- Custom gradients
- Display and sans-serif font configuration
- Animation utilities for floating elements, shimmer effects, and marquee motion

Global styles are defined in: src/index.css

Tailwind configuration is defined in: tailwind.config.js

## Main Pages

### Home

The main landing page includes sections for:

- Hero
- Logo cloud
- Features
- Product showcase
- Why WorkNest
- Solutions
- Testimonials
- Pricing
- FAQ
- Call to action

### Resources

The resources page presents guides, tutorials, templates, help center content, API/docs references, featured articles, and latest blog posts.

### About

The about page includes company statistics, mission content, values, timeline, leadership, investors, and a final call to action.

### Contact

The contact page includes sales/support/partnership channels, a contact form, demo CTA, office locations, and quick FAQ items.

## Assets

Static assets are stored in the `public/` directory.

Current public asset: public/Work_Nest_Logo.png


## Notes

This project is currently a frontend-only marketing site. Form submissions and CTA links are UI-level placeholders and can be connected to a backend, CRM, calendar booking system, or email service as needed.

## License

This project is private.
