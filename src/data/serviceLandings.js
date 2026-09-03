/**
 * serviceLandings.js — content for the /services/:slug landing pages.
 *
 * Why these exist: /services carries eleven distinct commercial themes on one
 * URL, so no single page targets any one of them. A search engine has nothing
 * to rank for "IT consulting New Jersey" because no page is *about* that.
 * Each entry below becomes its own indexable URL with its own <h1>, its own
 * meta, its own Service + FAQPage schema, and enough unique prose to compete.
 *
 * Keep the prose specific and factual. Thin, near-duplicate pages across slugs
 * would recreate the duplicate-content problem the ITIL module pages already have.
 */

export const SERVICE_LANDINGS = [
  {
    slug: 'it-consulting-new-jersey',
    icon: 'business_center',
    eyebrow: 'IT Consulting',
    h1: 'IT Consulting in New Jersey',
    title: 'IT Consulting in New Jersey | Peer Consulting Resources',
    description:
      'IT consulting for New Jersey businesses and government agencies. A women-owned Princeton, NJ firm delivering technology strategy, modernization, and delivery.',
    intro:
      'Peer Consulting Resources is an IT consulting firm headquartered at 20 Jefferson Plaza in Princeton, New Jersey. For more than fifteen years we have helped New Jersey state and municipal agencies, along with private-sector organizations in finance, pharmaceutical, healthcare, retail, and technology, translate business goals into working systems. We are a minority- and women-owned business, and our sixty-plus consultants work on-site across the state and remotely throughout the tri-state area.',
    sections: [
      {
        h2: 'What IT consulting looks like when it works',
        body: [
          'Most organizations do not need another technology opinion. They need someone who will stay through implementation. Our engagements typically begin with an assessment of what is actually deployed — the systems, the integrations, the manual workarounds people have built around them — and end with a delivered, tested, supported solution rather than a slide deck.',
          'That means the same firm that recommends an architecture is accountable for building it. Our teams combine solution architects, business analysts, software engineers, and quality analysts, so a recommendation never has to be handed across an organizational boundary before anyone can act on it.',
        ],
      },
      {
        h2: 'Where we do the most work in New Jersey',
        body: [
          'A large share of our practice is public sector. New Jersey agencies operate under procurement rules, accessibility standards, and records-retention requirements that a general-purpose consultancy usually meets late and expensively. We plan for them from the first sprint.',
          'On the commercial side, our New Jersey clients concentrate in the pharmaceutical and life-sciences corridor along Route 1, in financial services, and in healthcare — sectors where validated systems and audit trails are not optional. Being based in Princeton means our consultants can be in a client office in Trenton, New Brunswick, Newark, or Jersey City the same morning a problem surfaces.',
        ],
      },
      {
        h2: 'Our engagement model',
        body: [
          'We scope engagements three ways. A fixed-scope advisory engagement suits organizations that need an architecture, a modernization roadmap, or a vendor-selection decision defensible to a board. A project-delivery engagement puts an accountable Peer team on a defined outcome with a fixed timeline. A staff-augmentation engagement embeds our consultants in your existing team under your management.',
          'Whichever model fits, engagements run through the same five-stage lifecycle: strategy, architecture, development, quality assurance, and deployment with go-live support. The stages are visible to the client throughout — there is no phase where work disappears into a black box and reappears as an invoice.',
        ],
      },
      {
        h2: 'Why organizations choose Peer',
        body: [
          'Our certifications are not decorative. Our trainers hold ITIL® credentials and teach the accredited curriculum, which means our service-management recommendations come from people who instruct the framework rather than from people who read about it. Our project managers work in both traditional and Agile delivery because most New Jersey enterprises are genuinely running both.',
          'We are also a small enough firm that the people who scope your engagement are the people who deliver it. Clients are not sold a senior team and staffed with a junior one.',
        ],
      },
      {
        h2: 'Working with a New Jersey consulting firm',
        body: [
          'Proximity still matters more than most procurement processes assume. A consultant who can be in the room during a difficult week resolves problems that a remote-only team escalates into a change request. Our Princeton location puts us within an hour of most of the state, and within two of Manhattan and Philadelphia.',
          "It also affects how we hire. Our consultants live here, they have worked inside New Jersey agencies and enterprises before, and they arrive already knowing how the state's procurement and budget cycles constrain a project timeline. That context is difficult to acquire from a national firm's bench.",
          'If you are evaluating IT consulting firms in New Jersey, the useful question is not who has the largest capability matrix. It is who will still be accountable in month nine. We are happy to put you in touch with clients who can answer that about us.',
        ],
      },
    ],
    capabilities: [
      'Technology strategy and IT roadmap development',
      'Legacy system assessment and modernization planning',
      'Enterprise architecture and systems integration',
      'Vendor selection and procurement support for public agencies',
      'IT service management and ITIL® process design',
      'Program and project management (Agile, Waterfall, hybrid)',
      'Business process analysis and automation',
      'Go-live support, knowledge transfer, and managed support',
    ],
    faqs: [
      {
        q: 'Where is Peer Consulting Resources located?',
        a: 'Our headquarters is at 20 Jefferson Plaza, Princeton, NJ 08540. We serve clients throughout New Jersey, New York, and Connecticut, and we also maintain delivery operations in India for extended-hours coverage.',
      },
      {
        q: 'Do you work with New Jersey government agencies?',
        a: 'Yes. Public sector work — local, state, and federal — is a core part of our practice. We are a minority- and women-owned business, which is relevant to many New Jersey set-aside and supplier-diversity procurement programs.',
      },
      {
        q: 'What size organizations do you work with?',
        a: 'Our clients range from municipal departments and mid-sized New Jersey businesses to Fortune 500 enterprises. Engagements scale from a single embedded consultant to a full delivery team.',
      },
      {
        q: 'How quickly can an engagement start?',
        a: 'For staff augmentation and advisory work we can typically begin within two to three weeks. Full project-delivery engagements depend on scoping and, for public agencies, on the procurement calendar.',
      },
    ],
    related: [
      { label: 'IT Staffing in New Jersey', to: '/services/it-staffing-new-jersey' },
      { label: 'Cloud & Digital Transformation', to: '/services/cloud-digital-transformation' },
      { label: 'ITIL® Certification Training', to: '/itil-certification' },
    ],
  },

  {
    slug: 'it-staffing-new-jersey',
    icon: 'people',
    eyebrow: 'Strategic Staffing',
    h1: 'IT Staffing in New Jersey',
    title: 'IT Staffing in New Jersey | Peer Consulting Resources',
    description:
      'IT staffing and resource augmentation in New Jersey. Engineers, QA analysts, and project managers placed contract, contract-to-hire, or direct from Princeton.',
    intro:
      'Peer Consulting Resources places technical professionals with organizations across New Jersey, New York, and Connecticut. We are not a volume recruiting shop. Because we also deliver consulting projects with our own teams, we evaluate candidates against the same bar we apply when the work is on our own scope — which is the practical reason our placements last.',
    sections: [
      {
        h2: 'Roles we place',
        body: [
          'Our placements concentrate in engineering, application development, quality assurance, knowledge management, business process management, and project management. Within those areas we regularly source solution architects, full-stack and back-end developers, automation and performance test engineers, data engineers and analysts, ERP functional consultants, business analysts, scrum masters, and program managers.',
          'We do not claim coverage of every technology on the market. When a requirement falls outside where we have real bench depth and a real network, we say so rather than sending resumes to see what sticks.',
        ],
      },
      {
        h2: 'How our screening differs',
        body: [
          'Every candidate is screened by someone who has done the job. A test automation candidate is interviewed by a practicing QA lead, not by a recruiter working from a keyword list. That is slower on the first submission and considerably faster to a signed offer, because the shortlist is short and accurate.',
          'We also screen for the working context, not only the skill set. A developer who thrives in a startup often struggles inside a New Jersey state agency change-control process, and the reverse is equally true. Matching that is most of what makes a placement stick past month three.',
        ],
      },
      {
        h2: 'Engagement types',
        body: [
          'Contract placements cover defined-duration needs — a release, a migration, a parental-leave backfill. Contract-to-hire lets both sides evaluate before committing, which is common for New Jersey clients filling a permanent role in a tight market. Direct placement suits leadership and hard-to-source specialist roles.',
          'For larger needs we staff a managed team: a delivery pod with its own lead, accountable to an outcome rather than to timesheets. This is often the better structure when a client needs capacity but does not have the management bandwidth to direct six new contractors.',
        ],
      },
      {
        h2: 'Compliance and supplier diversity',
        body: [
          'We are a certified minority- and women-owned business. For New Jersey public agencies and for large enterprises with supplier-diversity targets, our placements count toward those goals without requiring a separate subcontracting arrangement.',
          'We handle employment, payroll, insurance, and background screening for contract staff, and we work within client-specific onboarding and clearance requirements — which for state agency work is frequently the longest pole in the tent.',
        ],
      },
      {
        h2: 'What a good staffing partnership looks like',
        body: [
          "The clients who get the most from us treat the relationship as ongoing rather than transactional. When we understand a team's architecture, its release cadence, and the kind of person who succeeds there, our first submission is usually the hire. When a requisition arrives cold with a keyword list, everyone spends longer.",
          'We also tell clients when a role is mis-specified. A requirement asking for eight years in a framework that has existed for five will not be filled, and the honest response is to say so in the intake call rather than to run the search for six weeks and report a difficult market.',
          'Our redeployment rate is low, and we treat a placement that ends early as our problem to fix rather than a replacement to invoice. That is the whole basis of the relationship.',
        ],
      },
    ],
    capabilities: [
      'Contract, contract-to-hire, and direct placement',
      'Managed delivery pods with an accountable Peer team lead',
      'Software engineering and application development talent',
      'QA automation, performance, and compliance testing talent',
      'Business analysts, scrum masters, and project managers',
      'ERP and enterprise systems functional consultants',
      'Data engineering and analytics professionals',
      'Minority- and women-owned supplier-diversity credit',
    ],
    faqs: [
      {
        q: 'How fast can you submit candidates?',
        a: 'For roles in our core areas we typically submit a screened shortlist within five to seven business days. We submit fewer candidates than a volume agency because each has already been interviewed by a practitioner in that discipline.',
      },
      {
        q: 'Do you handle payroll and compliance for contract staff?',
        a: 'Yes. Contract professionals are employed by Peer Consulting Resources. We manage payroll, benefits, insurance, and background screening, and we comply with client-specific onboarding requirements.',
      },
      {
        q: 'Can placements work on-site in New Jersey?',
        a: 'Yes. We staff on-site, hybrid, and fully remote arrangements. Our Princeton headquarters and local candidate network make on-site coverage across New Jersey and the tri-state area practical.',
      },
      {
        q: 'Does Peer count toward supplier diversity goals?',
        a: 'Yes. We are a minority- and women-owned business, so our placements apply toward supplier-diversity and set-aside targets for both public agencies and private enterprises.',
      },
    ],
    related: [
      { label: 'IT Consulting in New Jersey', to: '/services/it-consulting-new-jersey' },
      { label: 'Quality Assurance & Testing', to: '/services/quality-assurance-testing' },
      { label: 'Careers at Peer', to: '/careers' },
    ],
  },

  {
    slug: 'cloud-digital-transformation',
    icon: 'cloud',
    eyebrow: 'Cloud & Digital',
    h1: 'Cloud & Digital Transformation Services',
    title: 'Cloud & Digital Transformation NJ | Peer Consulting',
    description:
      'Cloud migration and digital transformation for New Jersey organizations — assessment, wave-based migration, and post-migration operations from Princeton, NJ.',
    intro:
      'Cloud programs rarely fail on the technology. They fail because the migration is planned as a lift-and-shift, the operating model never changes, and the organization ends up running the same legacy estate at a higher monthly cost. Peer Consulting Resources plans the operating model and the migration together, from our Princeton, New Jersey office.',
    sections: [
      {
        h2: 'Start with an honest assessment',
        body: [
          'Before recommending a target platform we inventory what is actually running: application dependencies, data gravity, licensing exposure, integration surface, and the compliance regime each workload sits under. For New Jersey healthcare, pharmaceutical, and public-sector clients, that last item usually constrains the design more than any technical factor.',
          'The assessment produces a workload-by-workload disposition — rehost, replatform, refactor, replace, or retire — with a cost and risk position for each. Some workloads should not move. Saying so early is cheaper than discovering it during cutover.',
        ],
      },
      {
        h2: 'Migration and modernization',
        body: [
          'We run migrations in waves, sequenced so that the lowest-risk workloads validate the landing zone before anything critical moves. Each wave includes rollback criteria defined before the wave starts, not improvised during it.',
          'Modernization is where the return actually comes from. Breaking a monolith into services, replacing batch integrations with event-driven ones, and moving from manual releases to automated pipelines are what change the cost and speed curve. We stage this after migration rather than attempting both at once, because combining them is the single most common reason cloud programs slip past a year.',
        ],
      },
      {
        h2: 'Operating in the cloud afterward',
        body: [
          'A migrated estate needs different operations than a data-center estate: cost governance, infrastructure as code, observability, and an incident process that assumes elasticity. We design these alongside the migration and hand them over with documentation and trained staff.',
          'Our ITIL® practice matters here. Service management processes written for physical infrastructure do not survive contact with autoscaling, and our trainers rewrite them for the new environment as part of the engagement.',
        ],
      },
      {
        h2: 'Digital transformation beyond infrastructure',
        body: [
          'For most of our clients the cloud is a means, not the goal. The goal is a constituent portal that does not require a phone call, a claims process that closes in days instead of weeks, or a research pipeline that produces reproducible results. We work backward from those outcomes.',
          'That framing keeps transformation programs from becoming infrastructure projects with a marketing name. It also gives the organization something measurable to report to a board or a legislature at the end.',
        ],
      },
      {
        h2: 'Common ways cloud programs go wrong',
        body: [
          'The most expensive mistake is migrating before the operating model changes. An organization that lifts and shifts without adopting infrastructure as code, cost governance, and automated deployment ends up paying cloud rates for data-center practices, and the finance team concludes correctly that the program destroyed value.',
          'The second is treating the assessment as a formality. When workload disposition is decided by assumption rather than analysis, the surprises arrive during cutover, which is the most expensive possible moment to discover an undocumented dependency.',
          'The third is under-resourcing the period after go-live. Teams are asked to operate an unfamiliar environment with no additional support, and the resulting instability is attributed to the cloud rather than to the transition plan. We staff that period deliberately.',
        ],
      },
    ],
    capabilities: [
      'Cloud readiness and workload disposition assessment',
      'Landing zone design, governance, and security baseline',
      'Wave-based migration planning and execution',
      'Application modernization and monolith decomposition',
      'CI/CD pipeline and infrastructure-as-code implementation',
      'Cloud cost governance and FinOps practice setup',
      'Observability, monitoring, and incident process design',
      'Post-migration service management and knowledge transfer',
    ],
    faqs: [
      {
        q: 'Which cloud platforms do you work with?',
        a: 'We work across the major public cloud platforms and in hybrid configurations. Platform choice follows from the workload assessment, existing licensing, and any regulatory constraints, rather than being decided in advance.',
      },
      {
        q: 'How long does a cloud migration take?',
        a: 'A focused assessment typically runs four to eight weeks. Migration duration depends on estate size and compliance scope — a departmental estate can move in a quarter, while a regulated enterprise estate is usually a multi-quarter program run in waves.',
      },
      {
        q: 'Can you modernize applications without a full migration?',
        a: 'Yes. Application modernization, pipeline automation, and integration rework are frequently worth doing on existing infrastructure, particularly when a workload has a regulatory reason to stay where it is.',
      },
      {
        q: 'Do you support the environment after go-live?',
        a: 'Yes. We provide post-go-live support, operational documentation, and staff training so the client organization can run the environment independently. Ongoing managed support is available where a client prefers it.',
      },
    ],
    related: [
      { label: 'Enterprise & ERP Solutions', to: '/services/enterprise-erp-solutions' },
      { label: 'Cyber Security Solutions', to: '/services/cyber-security-solutions' },
      { label: 'IT Consulting in New Jersey', to: '/services/it-consulting-new-jersey' },
    ],
  },

  {
    slug: 'enterprise-erp-solutions',
    icon: 'business',
    eyebrow: 'Enterprise & ERP',
    h1: 'Enterprise & ERP Solutions',
    title: 'ERP Implementation & Integration NJ | Peer Consulting',
    description:
      'ERP implementation and enterprise integration for New Jersey organizations — selection, configuration, data migration, and go-live stabilization support.',
    intro:
      'An ERP program is a business change program that happens to involve software. Peer Consulting Resources approaches it that way: we spend the early weeks on process and data before anyone configures a module, because the configuration decisions that are expensive to reverse are all downstream of those two things.',
    sections: [
      {
        h2: 'Selection and readiness',
        body: [
          'Where a platform has not yet been chosen, we run a structured selection: current-state process mapping, a requirements set weighted by what actually differentiates the organization, scripted vendor demonstrations against your own scenarios rather than the vendor\'s, and a total-cost model that includes the integration and support years, not just licensing.',
          'For New Jersey public agencies we produce selection documentation that stands up to procurement review and to the records requests that frequently follow a large award.',
        ],
      },
      {
        h2: 'Implementation and data migration',
        body: [
          'We configure to the standard product wherever the standard product is adequate, and we document every deviation with the business reason for it. Uncontrolled customization is what makes an ERP impossible to upgrade three years later, and it accumulates one reasonable-sounding exception at a time.',
          'Data migration is planned as its own workstream with its own timeline. Cleansing, mapping, reconciliation, and multiple full-volume trial loads happen before cutover. Most ERP go-lives that go badly go badly because of data, and the data problems were visible months earlier.',
        ],
      },
      {
        h2: 'Integration with the surrounding estate',
        body: [
          'An ERP is never the only system. It has to exchange data with payroll, with case management, with laboratory or clinical systems, with reporting platforms, and often with legacy applications nobody is willing to decommission. We design that integration layer deliberately rather than accumulating point-to-point interfaces.',
          'Where reliable interfaces are impractical, we automate the business process around the gap instead of pretending the gap is not there.',
        ],
      },
      {
        h2: 'Go-live and stabilization',
        body: [
          'Cutover is rehearsed. We run mock cutovers on full data volumes with the actual people who will execute the real one, and the go/no-go criteria are agreed in writing beforehand so the decision is not made under pressure on the night.',
          'Stabilization is staffed as a distinct phase. The weeks after go-live generate the highest ticket volume of the entire program, and an implementation team that has already demobilized cannot absorb it. We plan hypercare capacity in advance and transition to the client support organization on a defined schedule.',
        ],
      },
      {
        h2: 'Governance across the program',
        body: [
          'ERP programs fail slowly and visibly. The warning signs are consistent: scope decisions made without a named owner, a steering committee that reviews status rather than making decisions, and a risk register that has not changed in two months. We establish governance that forces decisions to a person and a date.',
          'For New Jersey public agencies this extends to documentation that survives an audit or a records request. Decisions, their rationale, and who approved them are recorded as the program runs rather than reconstructed afterward, which is both cheaper and considerably more accurate.',
          'We also report honestly. A status report that has been green for eleven consecutive weeks is not information, and executives who receive one learn to stop reading it. Our reporting names the problems while they are still small enough to fix.',
        ],
      },
    ],
    capabilities: [
      'ERP platform selection and procurement documentation',
      'Current-state process mapping and target-state design',
      'ERP configuration and controlled customization',
      'Data cleansing, mapping, and trial-load migration',
      'Enterprise system and legacy application integration',
      'Business process automation and workflow design',
      'Cutover planning, rehearsal, and go/no-go governance',
      'Hypercare, stabilization, and support transition',
    ],
    faqs: [
      {
        q: 'Do you implement a specific ERP product?',
        a: 'We are not a single-product reseller. We support selection and implementation across major enterprise platforms, which lets the selection be driven by fit rather than by what we happen to sell.',
      },
      {
        q: 'How long does an ERP implementation take?',
        a: 'A departmental implementation commonly runs six to nine months. A full enterprise or agency-wide program is usually twelve to twenty-four months, phased by module or by business unit.',
      },
      {
        q: 'Can you take over a stalled implementation?',
        a: 'Yes. Recovery engagements are a regular part of our practice. We begin with an independent assessment of scope, data readiness, and governance before recommending whether to continue, re-baseline, or change direction.',
      },
      {
        q: 'What happens to our legacy systems?',
        a: 'That is decided during target-state design. Some are replaced, some are integrated and retained because they serve a regulatory or specialist function, and some are retired only after a defined parallel-run period.',
      },
    ],
    related: [
      { label: 'Cloud & Digital Transformation', to: '/services/cloud-digital-transformation' },
      { label: 'Quality Assurance & Testing', to: '/services/quality-assurance-testing' },
      { label: 'IT Consulting in New Jersey', to: '/services/it-consulting-new-jersey' },
    ],
  },

  {
    slug: 'cyber-security-solutions',
    icon: 'security',
    eyebrow: 'Cyber Security',
    h1: 'Cyber Security Solutions',
    title: 'Cyber Security Consulting NJ | Peer Consulting',
    description:
      'Security risk assessment, compliance readiness, and data protection for New Jersey organizations and agencies. Practical programs from a Princeton, NJ firm.',
    intro:
      'Security work fails when it is delivered as a report. Peer Consulting Resources builds security programs that an organization can actually operate — sized to the staff, budget, and regulatory obligations that organization really has, not to an idealized reference architecture.',
    sections: [
      {
        h2: 'Risk assessment that produces decisions',
        body: [
          'We start by establishing what would actually hurt: which data, which systems, which processes, and what the consequence of compromise would be in operational and regulatory terms. Controls are then prioritized against that, rather than against a generic checklist where a public marketing site and a claims database receive equal attention.',
          'The output is a ranked remediation plan with effort and cost attached to each item, so leadership can make a funding decision instead of receiving a list of findings with no way to sequence them.',
        ],
      },
      {
        h2: 'Compliance as a design input',
        body: [
          'Our New Jersey clients operate under overlapping obligations — state data-breach notification requirements, sector rules in healthcare and pharmaceutical, and federal frameworks for agencies and their contractors. We treat these as design constraints from the start, because retrofitting evidence collection and audit trails after a system is built costs several times more than including them.',
          'We also produce the artifacts auditors ask for. A control that works but cannot be evidenced will still be written up as a finding.',
        ],
      },
      {
        h2: 'Threat prevention and monitoring',
        body: [
          'We help design and stand up detection and monitoring appropriate to the organization\'s scale: log aggregation, alerting tuned to reduce noise rather than maximize coverage, and an incident response process with named owners and rehearsed escalation paths.',
          'Alert fatigue is the practical failure mode here. A monitoring deployment that generates four hundred daily alerts nobody reviews is worse than a narrower one that generates six that people act on, and we tune deliberately toward the second.',
        ],
      },
      {
        h2: 'Data protection and access control',
        body: [
          'Most breaches we are asked to investigate after the fact involve credentials and excess privilege rather than an exotic exploit. We concentrate on identity and access management, least-privilege enforcement, encryption of data at rest and in transit, and the offboarding process — the last of which is neglected almost everywhere.',
          'Where a client is migrating to cloud, we build these controls into the landing zone rather than adding them afterward, which is both cheaper and considerably more likely to actually happen.',
        ],
      },
      {
        h2: 'Building security the organization can sustain',
        body: [
          'A security program is only as good as its worst month. Controls that depend on someone remembering to perform a manual review will lapse during a busy quarter, so wherever it is feasible we automate enforcement and evidence collection rather than relying on discipline.',
          'We also design for staff turnover. Documentation, runbooks, and clearly assigned ownership mean the program survives the departure of the person who built it, which in small IT organizations is the single most common way a mature security posture quietly degrades.',
          'Finally, we size the program to the organization rather than to a framework. A New Jersey municipality with three IT staff and a regulated pharmaceutical enterprise have different realistic ceilings, and a plan that ignores that will be abandoned rather than followed.',
        ],
      },
    ],
    capabilities: [
      'Security risk assessment and control gap analysis',
      'Regulatory compliance readiness and audit evidence',
      'Identity and access management design',
      'Data protection, encryption, and classification',
      'Security monitoring, logging, and alert tuning',
      'Incident response planning and tabletop exercises',
      'Secure architecture review for cloud and on-premise',
      'Security awareness training for staff',
    ],
    faqs: [
      {
        q: 'Do you perform penetration testing?',
        a: 'Our focus is security program design, risk assessment, and compliance readiness. Where a technical penetration test is warranted we scope it and coordinate specialist testing, then fold the results into the remediation plan.',
      },
      {
        q: 'Can you help us prepare for an audit?',
        a: 'Yes. We map existing controls against the applicable framework, identify gaps, and help produce the documentation and evidence the audit will request. Starting early is the difference between a clean report and a remediation cycle.',
      },
      {
        q: 'We have a small IT team. Is a security program realistic?',
        a: 'Yes, if it is sized honestly. We design programs against the staff you have. A short list of controls that are consistently operated protects an organization far better than a comprehensive program nobody has time to run.',
      },
      {
        q: 'Do you support incident response?',
        a: 'We help organizations build and rehearse incident response capability, including runbooks, escalation paths, and tabletop exercises. Rehearsal before an incident is what makes the plan usable during one.',
      },
    ],
    related: [
      { label: 'Cloud & Digital Transformation', to: '/services/cloud-digital-transformation' },
      { label: 'IT Consulting in New Jersey', to: '/services/it-consulting-new-jersey' },
      { label: 'Quality Assurance & Testing', to: '/services/quality-assurance-testing' },
    ],
  },

  {
    slug: 'quality-assurance-testing',
    icon: 'verified_user',
    eyebrow: 'Quality Assurance',
    h1: 'Quality Assurance & Software Testing',
    title: 'QA & Software Testing Services NJ | Peer Consulting',
    description:
      'Engineering-led QA, test automation, and performance testing for New Jersey enterprises and agencies. Independent quality assurance from Princeton, NJ.',
    intro:
      'Quality assurance is not a phase at the end of a project. Peer Consulting Resources runs QA as an engineering discipline that starts when requirements are written, because a defect caught in a requirements review costs a fraction of the same defect caught in production.',
    sections: [
      {
        h2: 'Engineering-led testing',
        body: [
          'Our QA analysts read code. They participate in design reviews, they understand the integration surface, and they write automation that is maintained as a real codebase with version control and code review rather than accumulating as a pile of brittle recorded scripts.',
          'This changes what testing finds. Script-driven manual QA confirms that documented paths work. Engineering-led QA finds the boundary conditions, the concurrency problems, and the integration failures that actually reach production.',
        ],
      },
      {
        h2: 'Test automation that survives',
        body: [
          'Most automation suites are abandoned within a year because they are slow, flaky, and coupled to interface details that change every release. We build against stable interfaces, keep the suite fast enough to run on every commit, and treat a flaky test as a defect to be fixed rather than a nuisance to be re-run.',
          'We are deliberate about what to automate. Regression paths, calculations, and integration contracts pay back repeatedly. Exploratory testing of a new interface does not, and pretending otherwise produces expensive suites that catch nothing.',
        ],
      },
      {
        h2: 'Performance and load validation',
        body: [
          'Performance testing has to happen against realistic data volumes and realistic concurrency, which is precisely what most projects defer until it is too late to act on. We build performance scenarios from actual usage patterns and run them early enough that an architectural response is still possible.',
          'For New Jersey public-facing systems this matters disproportionately. Constituent portals see load concentrated around deadlines, enrollment windows, and filing dates, and an average-load test tells you nothing useful about those days.',
        ],
      },
      {
        h2: 'Compliance and validation testing',
        body: [
          'Regulated clients in pharmaceutical, healthcare, and government need testing that produces defensible evidence: traceability from requirement to test case to result, documented environments, and controlled test data. We structure QA to generate that as a by-product of the work rather than as a documentation exercise afterward.',
          'Accessibility validation is part of this for public-sector systems. We test against the applicable standard rather than relying on an automated scan, which typically catches only a minority of real accessibility barriers.',
        ],
      },
      {
        h2: 'What QA changes about a project',
        body: [
          'Teams that adopt engineering-led QA usually notice the change in release confidence before they notice it in defect counts. When the regression suite is fast and trustworthy, releases stop being events that require a weekend and a rollback plan, and the cadence increases on its own.',
          'The economics are straightforward. A defect found during a requirements review costs a conversation. The same defect found in production costs an incident, a hotfix, a regression risk, and whatever the business consequence was. Shifting detection earlier is the cheapest quality investment available.',
          'We also leave the client team better equipped than we found it. Engagements include handover of the automation framework, the test strategy, and the practices behind them, so quality does not walk out the door when we do.',
          'Where a client has no existing QA function, we help stand one up: defining the role, writing the hiring profile, establishing the entry and exit criteria for each stage, and coaching the first hires through their first few releases until the practice runs without us.',
        ],
      },
    ],
    capabilities: [
      'QA strategy and test planning from requirements onward',
      'Test automation framework design and implementation',
      'Functional, regression, and integration testing',
      'Performance, load, and stress testing',
      'Accessibility validation for public-sector systems',
      'Compliance and validation testing with full traceability',
      'Test data management and environment strategy',
      'QA process assessment and team enablement',
    ],
    faqs: [
      {
        q: 'Can you test an application you did not build?',
        a: 'Yes. Independent QA on third-party or in-house builds is a common engagement, and independence is often the point — it removes the conflict of having the same team assess its own work.',
      },
      {
        q: 'Do you provide QA staff or a managed QA team?',
        a: 'Both. We embed individual QA engineers into client teams, and we run managed QA pods accountable for quality outcomes on a defined scope.',
      },
      {
        q: 'How do you handle accessibility requirements?',
        a: 'We test against the applicable standard using a combination of automated scanning and manual assistive-technology testing. Automated tools alone catch only a portion of real accessibility barriers.',
      },
      {
        q: 'Can you improve an existing automation suite?',
        a: 'Yes. We assess coverage, flakiness, and runtime, then stabilize and restructure the suite. Rebuilding from scratch is sometimes the right answer, but only after the assessment shows it.',
      },
    ],
    related: [
      { label: 'Enterprise & ERP Solutions', to: '/services/enterprise-erp-solutions' },
      { label: 'IT Staffing in New Jersey', to: '/services/it-staffing-new-jersey' },
      { label: 'IT Consulting in New Jersey', to: '/services/it-consulting-new-jersey' },
    ],
  },
];

/** Lookup by slug — used by the ServiceLanding route component. */
export const SERVICE_LANDING_BY_SLUG = Object.fromEntries(
  SERVICE_LANDINGS.map((s) => [s.slug, s])
);
