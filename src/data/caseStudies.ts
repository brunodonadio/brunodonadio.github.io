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
  problem: string;
  solution: string;
  impact: string;
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
    problem:
      'Don Lucas SRL relied on Excel spreadsheets and printed documents for orders, production planning, delivery, and accounting—with no centralized customer data or end-to-end order traceability.',
    solution:
      'Built a centralized internal platform with a unified API and web app covering authentication, orders, preparation orders, delivery orders, customers, products, checking accounts, and users—with event-driven flows and generated documents.',
    impact:
      'Eliminated spreadsheet-based workflows, centralized data, reduced manual coordination, and established a scalable foundation for future automation.',
    stack: [
      'TypeScript',
      'NestJS',
      'Prisma',
      'MySQL',
      'Nuxt',
      'TailwindCSS',
      'Redis',
      'Cloudflare',
      'Nginx',
      'PM2',
      'Ubuntu',
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
    slug: 'game-server-hosting-platform',
    title: 'Game Server Hosting Platform',
    subtitle: 'Built a hosting platform with automation and a custom control panel.',
    timeframe: '2021 – 2022',
    role: 'Senior Backend Engineer',
    tags: ['Platform', 'DevOps', 'Automation'],
    problem:
      'Game studios needed reliable, scalable server hosting with a simple control panel and predictable billing. Existing solutions were either too rigid or required heavy custom work.',
    solution:
      'Built a hosting platform with automated provisioning, a REST API and web control panel for lifecycle management, and usage-based billing integration.',
    impact:
      'Reduced time-to-launch for new game titles, improved resource utilization, and provided a single pane of glass for ops and developers.',
    stack: ['Go', 'Kubernetes', 'Terraform', 'PostgreSQL', 'Redis'],
    highlights: [
      'Automated provisioning and teardown with configurable templates',
      'Control panel and API for start/stop/scale and logs',
      'Usage metering and billing pipeline integration',
    ],
    sections: [
      {
        heading: 'Context',
        nodes: [
          {
            type: 'p',
            text: 'We offered dedicated and cloud game server hosting. Customers needed to spin up environments quickly, scale for launches, and manage costs without deep DevOps expertise.',
          },
        ],
      },
      {
        heading: 'Constraints',
        nodes: [
          {
            type: 'p',
            text: 'Hardware and region diversity; need to support both long-lived dedicated servers and short-lived cloud fleets. Billing had to align with actual usage and existing contracts.',
          },
        ],
      },
      {
        heading: 'Solution',
        nodes: [
          {
            type: 'p',
            text: 'A backend platform that abstracted provisioning (Terraform + K8s operators), exposed a unified API and control panel for lifecycle actions, and fed a metering pipeline for billing. All state and audit logs were stored in our own services.',
          },
        ],
      },
      {
        heading: 'Key Decisions',
        nodes: [
          {
            type: 'p',
            text: 'Separated “control plane” (API, auth, state) from “data plane” (actual game servers) so we could evolve and scale them independently. Chose idempotent operations and clear state machine for server status.',
          },
        ],
      },
      {
        heading: 'Impact',
        nodes: [
          {
            type: 'p',
            text: 'Faster onboarding of new studios, fewer support tickets for “how do I scale,” and a repeatable pattern for adding new regions and game engines.',
          },
        ],
      },
      {
        heading: 'Learnings',
        nodes: [
          {
            type: 'p',
            text: 'Game studios care about latency and predictability. Building a clear mental model (server states, regions, billing units) into the API and UI reduced confusion and support load.',
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
    problem:
      'A large product org struggled with release confidence: flaky tests, long feedback loops, and unclear ownership of quality. Deployments were stressful and sometimes rolled back.',
    solution:
      'Introduced a shared quality platform with standardized CI pipelines, test categorization, and release gates. Backend services exposed health and contract APIs used by automation.',
    impact:
      'Fewer production incidents, faster and more predictable releases, and clearer ownership of quality across frontend and backend.',
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
