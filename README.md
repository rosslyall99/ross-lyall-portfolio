# Ross Lyall Portfolio

A personal portfolio site for practical web apps, websites and small tools built around real-world problems.

Built with Astro, plain CSS, GitHub and Vercel.

## About the site

This portfolio collects projects I have built to solve genuine day-to-day problems, including:

- private household apps
- personal logging tools
- football archive websites
- embedded tools for existing business websites
- future prototype ideas

The aim is to show practical thinking, clear design, useful workflows and working projects rather than imaginary demo apps.

## Featured projects

### Trolley

A meal-driven grocery planning app that turns weekly meals into a structured shopping list, with review mode, shopping mode, extras and phone-friendly PWA install.

### Range

A personal glucose and event logging dashboard for pattern spotting, combining live readings, manual event recording, charts, CSV export and AI prompt support.

### Glorious Hearts

A structured football season archive built with Astro, including fixtures, match pages, player profiles, galleries and supporter storytelling.

### Slanj Website Extras

Embedded tools for improving customer journeys on an existing retail website, including a tartan directory and appointment wizard.

### Church Database Prototype

A planned community admin prototype for people, households, groups, reminders and pastoral notes.

## Tech stack

- Astro
- Plain CSS
- Vercel
- GitHub
- Prettier
- prettier-plugin-astro

Some featured projects also use React, Supabase, Edge Functions and PWA support.

## Project structure

```txt
src/
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   └── ProjectGrid.astro
├── data/
│   └── projects.js
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   └── projects/
│       ├── trolley.astro
│       ├── range.astro
│       ├── glorious-hearts.astro
│       └── slanj-extras.astro
└── styles/
    └── global.css

## Design direction

The site uses a bold, project-led visual style with:

- pale grid background
- black outlines
- hard shadows
- colourful project cards
- large confident typography
- simple case study pages

Mock visual panels are currently used until real screenshots are added.

## Local development

Install dependencies:

npm install

## Run locally

npm run dev

## Format files

npx prettier . --write

## Deployment

The site is deployed through Vercel from the main GitHub branch.

## Notes

This portfolio is an active work in progress. Some projects are live, some are private, and some are planned prototypes.
```
