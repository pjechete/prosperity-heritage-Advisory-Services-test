import Link from 'next/link'

const performanceSignals = [
  'Revenue is growing, but cash remains under pressure.',
  'Receivables are increasing or billing is delayed.',
  'Financial reporting arrives too late to guide decisions.',
  'Reconciliations or accounting backlogs continue to build.',
  'Critical processes depend too heavily on individual employees.',
  'Teams are working hard, but important work keeps falling behind.',
  'Systems are in place, but leadership still lacks clear visibility.',
  'Important projects need experienced ownership and execution support.',
]

const coreCapabilities = [
  {
    number: '01',
    title: 'Financial & Revenue Performance',
    description:
      'Strengthen financial discipline, improve revenue performance, and give leadership better visibility into cash and results.',
    focus:
      'Controllership • Financial Reporting • Month-End Close • Reconciliations • Internal Controls • Revenue Cycle • Billing & Collections • Accounts Receivable • Cash Flow Visibility',
  },
  {
    number: '02',
    title: 'Operational Performance & Visibility',
    description:
      'Improve how work moves through the organization and create clearer ownership, accountability, and visibility into performance.',
    focus:
      'Process Improvement • Workflow Redesign • Operational Bottlenecks • KPI & Management Reporting • Accountability • Cross-Functional Coordination • Standard Operating Processes',
  },
  {
    number: '03',
    title: 'Fractional Leadership & Project Execution',
    description:
      'Add experienced financial or operational capacity when a full-time hire is not required or internal teams need additional leadership to move critical work forward.',
    focus:
      'Fractional Controllership • Interim Leadership • Project Execution • Systems Implementation • Organizational Transitions • Change Initiatives',
  },
]

const engagementModels = [
  {
    title: 'Focused Engagements',
    description:
      'Defined assessments and improvement projects addressing a specific financial or operational issue.',
  },
  {
    title: 'Fractional Support',
    description:
      'Ongoing financial or operational leadership for organizations that need experienced capacity without adding a full-time role.',
  },
  {
    title: 'Transformation & Implementation',
    description:
      'Leadership and execution support for larger initiatives involving multiple functions, systems, or stakeholders.',
  },
]

const experienceMetrics = [
  {
    value: '20+',
    label: 'Years',
    description: 'Financial & Operational Leadership',
  },
  {
    value: '$2B+',
    label: 'Revenue',
    description: 'Annual Revenue Environment Supported',
  },
  {
    value: '100+',
    label: 'Locations',
    description: 'Healthcare Locations Supported',
  },
  {
    value: '45%+',
    label: 'Improvement',
    description: 'Denial Reduction Achieved',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">
                Operational &amp; Financial Execution Partner
              </p>

              <h1 className="hero-title">
                Recover Hidden Profit. Improve Execution. Scale With Confidence.
              </h1>

              <p className="hero-subtext">
                PHS helps growing and midsize organizations strengthen financial
                performance, improve operations, and execute critical initiatives
                when internal capacity or specialized expertise is needed.
              </p>

              <p className="hero-subtext">
                From focused improvement projects to fractional leadership and
                larger transformation initiatives, we provide practical support
                built around the challenge — not a predetermined solution.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Schedule a Diagnostic Conversation
                </Link>

                <Link href="/solutions" className="btn btn-secondary">
                  Explore Our Solutions
                </Link>
              </div>
            </div>

            <div className="hero-card">
              <p className="section-label">Common Signals</p>
              <h3>When performance starts to break down</h3>

              <ul className="check-list">
                <li>Cash does not reflect revenue or profitability</li>
                <li>Reporting is late or difficult to trust</li>
                <li>Receivables continue to grow</li>
                <li>Processes depend too heavily on individual employees</li>
                <li>Important initiatives continue to stall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE SIGNALS */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">When Growth Creates Complexity</p>
              <h2 className="section-title">
                The symptoms are visible. The underlying problem is often not.
              </h2>
            </div>

            <p className="section-intro">
              Financial and operational problems rarely appear all at once. They
              build across people, processes, systems, and reporting until they
              begin affecting cash, performance, and leadership capacity.
            </p>
          </div>

          <div className="signal-grid">
            {performanceSignals.map((signal) => (
              <div className="signal-item" key={signal}>
                <span className="signal-mark">↗</span>
                <p>{signal}</p>
              </div>
            ))}
          </div>

          <p className="section-copy section-followup">
            PHS helps identify what is driving the problem, determine what needs
            to change, and support the work required to improve it.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title">
                Practical support where performance is being lost.
              </h2>
            </div>

            <p className="section-intro">
              Our work is organized around three areas that directly affect how
              organizations perform, make decisions, and execute.
            </p>
          </div>

          <div className="card-grid three-up capability-grid">
            {coreCapabilities.map((capability) => (
              <article className="info-card capability-card" key={capability.title}>
                <span className="card-number">{capability.number}</span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>

                <div className="card-divider" />

                <p className="card-focus">{capability.focus}</p>
              </article>
            ))}
          </div>

          <div className="section-action">
            <Link href="/solutions" className="text-link">
              Explore Our Solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Who We Serve</p>
              <h2 className="section-title">
                Support that scales with the complexity of the challenge.
              </h2>
            </div>
          </div>

          <div className="audience-grid">
            <article className="audience-card">
              <p className="section-label">Growing &amp; Midsize Businesses</p>

              <h3>Strengthen the infrastructure behind growth.</h3>

              <p>
                As organizations grow, the financial and operational processes
                that worked at an earlier stage often stop providing the control,
                visibility, and capacity leadership needs.
              </p>

              <p>
                PHS provides focused operational and financial support to help
                businesses strengthen that foundation without adding unnecessary
                overhead.
              </p>

              <Link href="/solutions" className="text-link">
                Explore Business Solutions →
              </Link>
            </article>

            <article className="audience-card audience-card-healthcare">
              <p className="section-label">Healthcare Organizations</p>

              <h3>Improve performance across connected healthcare operations.</h3>

              <p>
                Healthcare requires an understanding of how clinical operations,
                revenue cycle, finance, technology, and patient workflows affect
                one another.
              </p>

              <p>
                PHS brings specialized experience across healthcare operations,
                revenue cycle, financial performance, process improvement, and
                technology enablement.
              </p>

              <Link href="/healthcare" className="text-link">
                Explore Healthcare →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* HEALTHCARE */}
      <section className="section healthcare-section">
        <div className="container">
          <div className="healthcare-grid">
            <div>
              <p className="section-label">Healthcare</p>

              <h2 className="section-title">
                Connecting operations, finance, and technology.
              </h2>

              <p className="section-copy">
                Healthcare performance is rarely the result of one department or
                one system.
              </p>

              <p className="section-copy">
                Patient access, clinical workflows, billing, collections,
                finance, reporting, and technology operate as part of a connected
                environment. Breakdowns in one area often create financial and
                operational consequences elsewhere.
              </p>

              <p className="section-copy">
                PHS helps healthcare organizations identify those connections
                and improve the processes, visibility, and technology required
                to support stronger performance.
              </p>

              <Link href="/healthcare" className="btn btn-secondary">
                Explore Healthcare Solutions
              </Link>
            </div>

            <div className="healthcare-capabilities">
              <p className="section-label">Core Healthcare Capabilities</p>

              <ul className="healthcare-list">
                <li>Healthcare Operations</li>
                <li>Revenue Cycle Performance</li>
                <li>Financial Performance &amp; Visibility</li>
                <li>Process Improvement</li>
                <li>Healthcare Technology Enablement</li>
                <li>Implementation Support</li>
              </ul>

              <p className="healthcare-note">
                Where technology is part of the solution, PHS can work with
                specialized technology and implementation partners based on the
                needs of the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODEL */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">How We Engage</p>
              <h2 className="section-title">Start with what you need.</h2>
            </div>

            <p className="section-intro">
              Engagements can be focused or ongoing. The level of support is
              based on the problem, the internal capacity available, and the
              complexity of the work.
            </p>
          </div>

          <div className="card-grid three-up">
            {engagementModels.map((model) => (
              <article className="info-card" key={model.title}>
                <h3>{model.title}</h3>
                <p>{model.description}</p>
              </article>
            ))}
          </div>

          <p className="section-copy section-followup">
            Our role can expand or contract as needs change. The objective is to
            provide the level of support the organization actually requires.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Experience Behind PHS</p>
              <h2 className="section-title">
                Experience built inside complex organizations.
              </h2>
            </div>

            <p className="section-intro">
              PHS is built on more than two decades of financial, operational,
              and healthcare leadership experience across controllership,
              revenue cycle, process improvement, systems implementation, and
              organizational change.
            </p>
          </div>

          <div className="metrics-grid">
            {experienceMetrics.map((metric) => (
              <div className="metric-card" key={metric.description}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.description}</p>
              </div>
            ))}
          </div>

          <p className="experience-note">
            Experience reflects professional leadership work across career roles
            and is presented as experience behind PHS rather than as a
            representation of PHS client engagements.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section section-light">
        <div className="narrow">
          <p className="section-label">How We Work</p>

          <h2 className="section-title">
            Understand the problem. Improve what matters. Stay through execution.
          </h2>

          <p className="section-copy">
            We start by understanding the operating environment and identifying
            the underlying issue — not by selling a predetermined service.
          </p>

          <p className="section-copy">
            From there, we establish priorities, determine what needs to change,
            and work alongside the organization to implement practical
            improvements.
          </p>

          <p className="section-copy">
            Where specialized expertise or technology is required, PHS can bring
            appropriate partners into the engagement.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div className="narrow">
          <div className="cta-box">
            <p className="section-label">Start the Conversation</p>

            <h2>Let&apos;s start with the challenge.</h2>

            <p>
              You do not need to know exactly what service you need. Tell us what
              is creating pressure inside the organization, what is not working
              as expected, or what initiative needs additional support.
            </p>

            <p>We can start there.</p>

            <div className="hero-actions center-buttons">
              <Link href="/contact" className="btn btn-primary">
                Schedule a Diagnostic Conversation
              </Link>

              <Link href="/solutions" className="btn btn-secondary">
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
