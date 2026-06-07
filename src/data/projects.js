export const projects = [
  {
    title: "Trolley",
    slug: "trolley",
    category: "Home Apps",
    status: "Live / Active",
    type: "Private household app",
    description:
      "A meal-driven grocery planning app that turns weekly meals into a structured shopping list, with review mode, shopping mode, extras and phone-friendly PWA install.",
    tech: ["React", "Supabase", "Vercel", "PWA"],
    highlight: true,
    theme: "trolley",
    links: {
      live: "https://shopping-list-kappa-five.vercel.app/",
      caseStudy: "/projects/trolley",
    },
  },
  {
    title: "Range",
    slug: "range",
    category: "Home Apps",
    status: "Live / Active",
    type: "Personal health logging app",
    description:
      "A personal glucose and event logging dashboard designed for pattern spotting, with live readings, event markers, CSV export and AI prompt support.",
    tech: ["React", "Supabase", "MacroDroid", "Edge Functions"],
    highlight: true,
    theme: "range",
    links: {
      live: "https://glucose-logger.vercel.app/",
      caseStudy: "/projects/range",
    },
  },
  {
    title: "Glorious Hearts",
    slug: "glorious-hearts",
    category: "Websites",
    status: "Live",
    type: "Football archive website",
    description:
      "A Hearts season archive built with Astro, including match pages, player profiles, image galleries, memories and structured football data.",
    tech: ["Astro", "Static Data", "Vercel"],
    highlight: true,
    theme: "hearts",
    links: {
      live: "https://glorious-hearts.vercel.app/",
      caseStudy: "/projects/glorious-hearts",
    },
  },
  {
    title: "Slanj Website Extras",
    slug: "slanj-website-extras",
    category: "Embedded Website Tools",
    status: "Live / In Use",
    type: "Squarespace enhancements",
    description:
      "Embedded tools for an existing retail website, including a tartan directory and guided appointment wizard to improve the customer journey.",
    tech: ["Squarespace", "JavaScript", "Customer Journey Tools"],
    highlight: true,
    theme: "slanj",
    links: {
      live: [
        {
          label: "Appointment Wizard",
          url: "https://slanjkilts.com/appointment-wizard",
        },
        {
          label: "Tartan Search",
          url: "https://slanjkilts.com/tartansearch",
        },
      ],
      caseStudy: "/projects/slanj-extras",
    },
  },
  {
    title: "Church Database",
    slug: "church-database",
    category: "Prototype",
    status: "Planned",
    type: "Community admin system",
    description:
      "A privacy-first prototype for church administration, covering people, households, groups, notes, reminders and pastoral care workflows.",
    tech: ["React", "Supabase", "Role-Based Access"],
    highlight: false,
    theme: "church",
    links: {},
  },
  {
    title: "Roy McGregor Portfolio",
    slug: "roy-mcgregor",
    category: "Websites",
    status: "On Hold",
    type: "Performer portfolio",
    description:
      "A stylish actor/director/writer/producer portfolio site, currently awaiting final biography, images, credits and content updates.",
    tech: ["Astro", "Portfolio Design", "Static Site"],
    highlight: false,
    theme: "roy",
    links: {},
  },
];
