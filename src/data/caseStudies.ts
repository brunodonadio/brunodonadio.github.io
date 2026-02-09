export type SectionNode =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export interface CaseStudySection {
  heading: string;
  nodes: SectionNode[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  metaDescription?: string;
  timeframe: string;
  role: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'don-lucas-internal-operations-platform',
    title: 'Internal Operations Platform — Don Lucas SRL',
    subtitle:
      'Built a centralized, auditable internal operations platform providing end-to-end visibility across orders, production, delivery, and accounting.',
    metaDescription:
      'Case study describing the design and implementation of an internal operations platform for a food manufacturing and distribution company.',
    timeframe: '2025 – 2026',
    role: 'Product designer, backend & frontend engineer, platform owner',
    tags: ['Internal Platform', 'Full-stack', 'Operations'],
    stack: [
      'TypeScript',
      'NestJS',
      'Prisma',
      'MySQL',
      'Nuxt',
      'TailwindCSS',
      'Redis',
      'Docker',
      'Cloudflare',
      'Nginx',
      'PM2',
      'Meta Cloud API',
    ],
    highlights: [
      'End-to-end product and platform ownership (design, backend, frontend, infrastructure)',
      'API-first internal platform modeling real business workflows',
      'Modular NestJS backend with clear domain boundaries',
      'Relational data model reflecting operational states (orders, preparation, delivery, accounting)',
      'Event-driven processing for long-running operational flows',
      'Nuxt SPA consuming backend APIs with role-based access',
      'Automated document generation (delivery notes, load control reports, receipts)',
      'Meta Cloud API integration for WhatsApp transactional notifications',
      'Multi-environment setup (test, UAT, production) with automated deployments',
      'Scalable foundation for future automation and integrations',
    ],
    sections: [
      {
        heading: 'Context',
        nodes: [
          {
            type: 'p',
            text: 'Don Lucas SRL is a food manufacturing and distribution company producing fresh pasta for wholesale customers. Before this project, core operations relied heavily on Excel spreadsheets and printed documents:',
          },
          {
            type: 'ul',
            items: [
              'Orders were manually entered in spreadsheets',
              'Production batches were planned offline',
              'Delivery planning and load control were handled manually',
              'No centralized customer database existed',
              'No reliable way to trace orders end-to-end',
            ],
          },
          {
            type: 'p',
            text: 'This limited visibility, introduced frequent manual errors, and made scaling operations increasingly difficult.',
          },
          {
            type: 'p',
            text: 'The company needed a system to manage the full operational lifecycle:',
          },
          {
            type: 'p',
            text: 'Orders → Production → Delivery → Accounting → Customer accounts.',
          },
        ],
      },
      {
        heading: 'Role & Responsibilities',
        nodes: [
          { type: 'p', text: 'I owned the project end-to-end:' },
          {
            type: 'ul',
            items: [
              'Client discovery, proposal, and scoping',
              'System design and architecture',
              'Backend and frontend implementation',
              'Infrastructure setup and deployments',
              'Ongoing support and iteration',
            ],
          },
          {
            type: 'p',
            text: 'I acted as product designer, backend engineer, frontend engineer, and platform owner.',
          },
        ],
      },
      {
        heading: 'Constraints',
        nodes: [
          {
            type: 'ul',
            items: [
              'No "big bang" migration: existing workflows had to continue during transition',
              'Incremental adoption by users with minimal disruption',
              'Preserve auditability and historical data',
              'Low latency for daily operational usage',
              'Small internal team (~10–25 users)',
            ],
          },
        ],
      },
      {
        heading: 'Solution',
        nodes: [
          {
            type: 'p',
            text: "Built a centralized internal platform that models the company's operational domains and exposes them through a unified API and web application.",
          },
          {
            type: 'p',
            text: "Core modules:",
          },
          {
            type: 'ul',
            items: [
              'Authentication & Roles',
              'Orders',
              'Preparation Orders (production batches)',
              'Delivery Orders (delivery planning & load control)',
              'Customers',
              'Products & Price Lists',
              'Checking Accounts & Transactions',
              'Users & My Account',
            ],
          },
          {
            type: 'p',
            text: 'Key characteristics:',
          },
          {
            type: 'ul',
            items: [
              'API-first backend with clear domain boundaries',
              'Relational data model reflecting real business workflows',
              'Event-driven processing for long-running flows',
              'Generated documents (delivery notes, load control reports, receipts)',
              'Automated transactional notifications via WhatsApp and email',
            ],
          },
        ],
      },
      {
        heading: 'Key Decisions',
        nodes: [
          {
            type: 'ul',
            items: [
              'Use NestJS + Prisma for a strongly-typed, maintainable backend',
              'Relational database (MySQL) with explicit modeling of business entities',
              'Separate operational states for orders, preparation, and delivery',
              'Pre-design all screens, workflows, ERD, and API contracts before coding',
              'Multi-environment setup (test, UAT, production) with automated deployments',
              'Build frontend and backend as separate applications with a strict contract',
            ],
          },
        ],
      },
      {
        heading: 'Impact',
        nodes: [
          {
            type: 'ul',
            items: [
              'Eliminated spreadsheet-based operational workflows',
              'Centralized customer, order, and financial data',
              'Reduced manual coordination between factory, logistics, and administration',
              'Enabled gradual onboarding of customers and users into a single system',
              'Established a scalable foundation for future automation and integrations',
            ],
          },
        ],
      },
      {
        heading: 'Learnings',
        nodes: [
          {
            type: 'ul',
            items: [
              'Heavy upfront design drastically reduces rework during implementation',
              'Clear domain boundaries simplify long-term evolution',
              'Internal platforms benefit from treating APIs as products',
              'Incremental adoption strategies are critical in non-technical organizations',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'gamingsonico-game-server-hosting-platform',
    title: 'GamingSonico — Self-Service Game Server Hosting Platform',
    subtitle:
      'Built a self-service hosting platform with automated provisioning and remote management for multiplayer game servers.',
    metaDescription:
      'Case study describing the design and implementation of a self-service game server hosting platform with automated provisioning, remote management, and subscription-based services.',
    timeframe: '2011 – 2013',
    role: 'Product designer, backend & frontend engineer, infrastructure owner',
    tags: ['SaaS', 'Full-stack', 'Platform', 'Hosting'],
    stack: [
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'jQuery',
      'Linux',
      'SSH',
    ],
    highlights: [
      'End-to-end product and infrastructure ownership',
      'Automated server provisioning and lifecycle management',
      'Self-service control panel designed for non-technical users',
      'Remote command execution via SSH from the web panel',
      'Subscription-based service management',
      'Addon marketplace with one-click installs',
      'Multi-department ticketing system',
    ],
    sections: [
      {
        heading: 'Context',
        nodes: [
          {
            type: 'p',
            text: 'Built and launched at age 14 as a fully self-taught developer, before the widespread availability of modern frameworks, cloud platforms, or learning resources.',
          },
          {
            type: 'p',
            text: 'I previously operated a large Spanish-speaking gaming community forum, which allowed me to bootstrap distribution and validate demand for a specialized game hosting service.',
          },
          {
            type: 'p',
            text: 'The opportunity was to offer affordable, SA:MP-focused hosting with a purpose-built control panel.',
          },
        ],
      },
      {
        heading: 'Role & Responsibilities',
        nodes: [
          { type: 'p', text: 'I owned the project end-to-end:' },
          {
            type: 'ul',
            items: [
              'Product design and UX',
              'Backend and frontend development',
              'Infrastructure setup and operations',
              'Automation and provisioning scripts',
              'Customer support and operations',
            ],
          },
        ],
      },
      {
        heading: 'Constraints',
        nodes: [
          {
            type: 'ul',
            items: [
              'Built as a solo developer at age 14',
              'Self-taught, without formal training or mentors',
              'Limited ecosystem and tooling compared to modern standards',
              'Had to design and operate both software and infrastructure',
              'High reliability requirements despite operating on a limited budget',
            ],
          },
        ],
      },      
      {
        heading: 'Solution',
        nodes: [
          {
            type: 'p',
            text: 'Built a web-based hosting platform providing:',
          },
          {
            type: 'ul',
            items: [
              'Automated service activation and suspension',
              'Live RCON console',
              'Server configuration editor',
              'Web-based file manager',
              'Server version updater',
              'Addon and gamemode marketplace',
              'Multi-department ticketing system',
            ],
          },
        ],
      },
      {
        heading: 'Key Decisions',
        nodes: [
          {
            type: 'ul',
            items: [
              'Use PHP + MySQL for rapid iteration',
              'Execute server operations remotely via SSH',
              'Single application with different user types (customers, operators, admin)',
              'Automate as many operational workflows as possible',
            ],
          },
        ],
      },
      {
        heading: 'Impact',
        nodes: [
          {
            type: 'ul',
            items: [
              'Reached ~40 concurrent clients at peak with recurring subscription revenue',
              'Reduced manual server administration through automated provisioning and tooling',
              'Enabled non-technical users to independently manage production game servers',
              'Validated feasibility of a fully automated hosting platform at small-to-medium scale',
            ],
          },
        ],
      },      
      {
        heading: 'Learnings',
        nodes: [
          {
            type: 'ul',
            items: [
              'Automation multiplies operational capacity',
              'Self-service tooling dramatically reduces support load',
              'Owning infrastructure shapes how you design software',
            ],
          },
        ],
      },
    ],
  },  
  {
    slug: 'quality-at-scale',
    title: 'Quality at Scale',
    subtitle: 'Improved release confidence across large product teams.',
    timeframe: '2020 – 2021',
    role: 'Senior Backend Engineer',
    tags: ['CI/CD', 'Quality', 'Automation'],
    stack: ['TypeScript', 'GitHub Actions', 'Docker', 'Prometheus', 'OpenAPI'],
    highlights: [
      'Unified CI templates with required gates (lint, test, contract)',
      'Contract and health endpoints for every service',
      'Release dashboard and automated rollback triggers',
    ],
    sections: [
      {
        heading: 'Context',
        nodes: [
          {
            type: 'p',
            text: 'Multiple product teams shipped features on a common platform. Coordination was ad-hoc; some teams had strong tests and others had almost none. Release process was manual and error-prone.',
          },
        ],
      },
      {
        heading: 'Constraints',
        nodes: [
          {
            type: 'p',
            text: 'Could not force a single language or framework. Had to work with existing GitHub and deployment tooling. Needed buy-in from team leads without adding too much process.',
          },
        ],
      },
      {
        heading: 'Solution',
        nodes: [
          {
            type: 'p',
            text: 'We built a “quality platform” that provided standard CI jobs (lint, unit, integration, contract tests), required health and OpenAPI endpoints for every backend service, and a small set of release gates. Dashboards showed pipeline and deployment status per team.',
          },
        ],
      },
      {
        heading: 'Key Decisions',
        nodes: [
          {
            type: 'p',
            text: 'Treat quality as a platform capability, not a checklist. Automate the boring parts (running tests, publishing contracts) and make results visible. Keep gates minimal but non-negotiable.',
          },
        ],
      },
      {
        heading: 'Impact',
        nodes: [
          {
            type: 'p',
            text: 'Release frequency increased while incident rate dropped. Teams could see exactly what was blocking a release. New services were onboarded with the same standards from day one.',
          },
        ],
      },
      {
        heading: 'Learnings',
        nodes: [
          {
            type: 'p',
            text: 'Standardization works when it reduces cognitive load and removes ambiguity. Investing in contract tests and health checks paid off for both humans and automation.',
          },
        ],
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
