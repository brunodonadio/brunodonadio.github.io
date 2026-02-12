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
    slug: 'quality-at-scale-release-confidence-platform',
    title: 'Quality at Scale — Release Confidence as a Platform Capability',
    subtitle:
      'Built repeatable quality and release systems across multi-squad products using automation, typed contracts, and operational workflows.',
    metaDescription:
      'Case study describing how quality was treated as a platform capability to enable reliable releases across complex, multi-team products.',
    timeframe: '2019 – 2023',
    role: 'Senior QA Engineer / SDET (platform-minded)',
    tags: ['Platform', 'Quality Engineering', 'Automation', 'Internal Systems'],
    stack: [
      'TypeScript',
      'Cypress',
      'Cypress Cloud',
      'CI Pipelines',
      'Shared Typed Schemas',
      'REST APIs',
      'Slack Integrations',
    ],
    highlights: [
      'Owned release readiness across QA → Staging → Production using clear gates and structured test plans',
      'Scaled E2E automation as a production-safety mechanism, not just regression coverage',
      'Integrated Cypress Cloud and Slack to create fast feedback loops on test health',
      'Leveraged shared typed contracts across repos to prevent schema drift',
      'Implemented visual regression workflows with design approval',
      'Modeled end-to-end scenarios around real operational workflows',
      'Practiced shift-left quality through parallel scenario and contract definition',
      'Built automation suites with architecture-level discipline',
      'Treated quality as a platform capability rather than a checklist',
    ],
    sections: [
      {
        heading: 'Context',
        nodes: [
          {
            type: 'p',
            text: 'Worked across multiple product organizations building financial and operational platforms with real production impact.',
          },
          {
            type: 'p',
            text: 'Products were developed by multiple squads and released frequently, making release confidence a first-class concern.',
          },
          {
            type: 'p',
            text: 'The challenge was not only validating features, but building systems that allow teams to ship safely and predictably.',
          },
        ],
      },
      {
        heading: 'Role & Responsibilities',
        nodes: [
          { type: 'p', text: 'I owned quality as a cross-cutting capability:' },
          {
            type: 'ul',
            items: [
              'Define release test plans and readiness criteria',
              'Design and maintain E2E automation suites',
              'Partner with developers on API and UI contracts',
              'Document actors, states, and workflows',
              'Facilitate cross-functional bug hunts',
              'Mentor and onboard QA engineers',
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
              'Multiple teams and repositories',
              'Mixed stacks and legacy areas',
              'High release frequency',
              'Production incidents costly and highly visible',
            ],
          },
        ],
      },
      {
        heading: 'Solution',
        nodes: [
          {
            type: 'p',
            text: 'Built a quality platform composed of automation, contracts, and release mechanics:',
          },
          {
            type: 'ul',
            items: [
              'E2E automation with Cypress',
              'Daily suite monitoring via Cypress Cloud',
              'Slack notifications for failures and trends',
              'Shared typed schemas as cross-repo contracts',
              'Visual regression testing with design approval',
              'Structured incident reporting templates',
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
              'Treat automation as infrastructure, not test scripts',
              'Shift-left by defining scenarios in parallel with feature design',
              'Prefer contracts and schemas over mocks',
              'Put friction at release time, not during development',
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
              'Reduced release risk through structured gates and automated coverage',
              'Improved alignment between product, design, QA, and engineering',
              'Faster triage via consistent incident reports',
              'Increased confidence in UI and API changes',
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
              'Quality is a system, not a phase',
              'Contracts are more powerful than mocks',
              'Automation is leverage, not just coverage',
              'Release confidence is a platform problem',
            ],
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
