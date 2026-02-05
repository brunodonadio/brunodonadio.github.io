export interface CaseStudySection {
  heading: string;
  content: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
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
    slug: 'internal-operations-platform',
    title: 'Internal Operations Platform',
    subtitle: 'Replaced spreadsheet workflows with auditable internal systems.',
    timeframe: '2022 – 2023',
    role: 'Senior Backend Engineer',
    tags: ['Backend', 'Platform', 'Internal Tools'],
    problem:
      'Internal teams relied on scattered tools and manual processes, leading to duplication, delays, and poor visibility across operations.',
    solution:
      'Designed and delivered a central operations platform with unified APIs, event-driven workflows, and a single source of truth for core business data.',
    impact:
      'Reduced manual handoffs by ~60%, improved data consistency, and enabled self-service for common operations.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Event-driven'],
    highlights: [
      'API-first design for internal and future external consumers',
      'Event sourcing for critical workflows',
      'Structured logging and observability from day one',
    ],
    sections: [
      {
        heading: 'Context',
        content:
          'The company had grown quickly with multiple internal systems (CRM, billing, support) that did not integrate well. Operations depended on spreadsheets and ad-hoc scripts.',
      },
      {
        heading: 'Constraints',
        content:
          'No big-bang migration: we had to integrate incrementally with existing systems, preserve audit trails, and keep latency low for user-facing features.',
      },
      {
        heading: 'Solution',
        content:
          'We built a backend platform that exposed normalized domains via REST and internal events. Services owned their data and published changes; the platform orchestrated workflows and provided a single API layer for internal UIs and automation.',
      },
      {
        heading: 'Key Decisions',
        content:
          'Chose event-driven over request-response for long-running flows; standardized on a small set of primitives (commands, events, queries) to keep the system understandable and testable.',
      },
      {
        heading: 'Impact',
        content:
          'Faster onboarding for new operations staff, fewer manual errors, and a clear path to expose selected capabilities to partners later.',
      },
      {
        heading: 'Learnings',
        content:
          'Investing in clear boundaries and documentation for internal platforms pays off when multiple teams start consuming them. Start with a narrow vertical slice and expand.',
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
        content:
          'We offered dedicated and cloud game server hosting. Customers needed to spin up environments quickly, scale for launches, and manage costs without deep DevOps expertise.',
      },
      {
        heading: 'Constraints',
        content:
          'Hardware and region diversity; need to support both long-lived dedicated servers and short-lived cloud fleets. Billing had to align with actual usage and existing contracts.',
      },
      {
        heading: 'Solution',
        content:
          'A backend platform that abstracted provisioning (Terraform + K8s operators), exposed a unified API and control panel for lifecycle actions, and fed a metering pipeline for billing. All state and audit logs were stored in our own services.',
      },
      {
        heading: 'Key Decisions',
        content:
          'Separated “control plane” (API, auth, state) from “data plane” (actual game servers) so we could evolve and scale them independently. Chose idempotent operations and clear state machine for server status.',
      },
      {
        heading: 'Impact',
        content:
          'Faster onboarding of new studios, fewer support tickets for “how do I scale,” and a repeatable pattern for adding new regions and game engines.',
      },
      {
        heading: 'Learnings',
        content:
          'Game studios care about latency and predictability. Building a clear mental model (server states, regions, billing units) into the API and UI reduced confusion and support load.',
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
        content:
          'Multiple product teams shipped features on a common platform. Coordination was ad-hoc; some teams had strong tests and others had almost none. Release process was manual and error-prone.',
      },
      {
        heading: 'Constraints',
        content:
          'Could not force a single language or framework. Had to work with existing GitHub and deployment tooling. Needed buy-in from team leads without adding too much process.',
      },
      {
        heading: 'Solution',
        content:
          'We built a “quality platform” that provided standard CI jobs (lint, unit, integration, contract tests), required health and OpenAPI endpoints for every backend service, and a small set of release gates. Dashboards showed pipeline and deployment status per team.',
      },
      {
        heading: 'Key Decisions',
        content:
          'Treat quality as a platform capability, not a checklist. Automate the boring parts (running tests, publishing contracts) and make results visible. Keep gates minimal but non-negotiable.',
      },
      {
        heading: 'Impact',
        content:
          'Release frequency increased while incident rate dropped. Teams could see exactly what was blocking a release. New services were onboarded with the same standards from day one.',
      },
      {
        heading: 'Learnings',
        content:
          'Standardization works when it reduces cognitive load and removes ambiguity. Investing in contract tests and health checks paid off for both humans and automation.',
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
