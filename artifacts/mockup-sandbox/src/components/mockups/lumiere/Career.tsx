import './_group.css';
import { useState } from 'react';

const OPENINGS = [
  {
    id: 1,
    title: 'Senior Event Producer',
    dept: 'Production',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    desc: 'Lead end-to-end production of large-scale weddings and corporate events. You will own client relationships, vendor coordination, and on-site execution.',
    requirements: ['5+ years in luxury event production', 'Strong vendor & venue network across Asia', 'Fluent in English; Bahasa Indonesia preferred', 'Willingness to travel internationally'],
  },
  {
    id: 2,
    title: 'Creative Director',
    dept: 'Design',
    type: 'Full-time',
    location: 'Jakarta, Indonesia / Remote',
    desc: 'Define the visual language and conceptual direction for LUMIÈRE events. Collaborate with clients to translate their vision into cohesive, stunning experiences.',
    requirements: ['Portfolio demonstrating luxury aesthetic sensibility', '7+ years in event design or related creative field', 'Expertise in floral, lighting, and spatial design', 'Experience with mood board tools (Canva, Miro, Figma)'],
  },
  {
    id: 3,
    title: 'Client Relations Manager',
    dept: 'Client Services',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    desc: 'Be the primary point of contact for our most valued clients. You will guide them from first consultation through post-event debrief, ensuring every touchpoint reflects our brand promise.',
    requirements: ['3+ years in luxury hospitality or event client services', 'Exceptional communication in English (written & verbal)', 'Calm under pressure; solutions-first mindset', 'Experience with international clients a plus'],
  },
  {
    id: 4,
    title: 'Event Coordinator (Junior)',
    dept: 'Production',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    desc: 'Support senior producers in planning and executing a diverse portfolio of events. An exceptional entry point for those passionate about the luxury events industry.',
    requirements: ['1–2 years in events or hospitality', 'Highly organized with strong attention to detail', 'Positive attitude and team-first mindset', 'Willingness to work flexible hours including weekends'],
  },
  {
    id: 5,
    title: 'Digital Marketing Specialist',
    dept: 'Marketing',
    type: 'Full-time',
    location: 'Jakarta, Indonesia / Hybrid',
    desc: 'Own LUMIÈRE\'s digital presence across social media, email, and SEO. Create content that reflects our brand\'s luxury positioning while growing our international audience.',
    requirements: ['3+ years in digital marketing', 'Proven expertise with Instagram, LinkedIn, and email campaigns', 'Strong visual eye aligned with luxury aesthetics', 'Analytics-driven decision making'],
  },
];

const VALUES = [
  { icon: '◇', title: 'Excellence', desc: 'We hold every detail to the highest standard, without exception.' },
  { icon: '◈', title: 'Integrity', desc: 'Honest relationships with clients, vendors, and each other.' },
  { icon: '◉', title: 'Creativity', desc: 'We approach every event as a blank canvas for extraordinary ideas.' },
  { icon: '◎', title: 'Global Mindset', desc: 'We work across cultures with curiosity, respect, and adaptability.' },
];

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

export function Career() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="lumiere-root" style={{ overflowY: 'auto', height: '100vh' }}>
      <div style={{ overflowY: 'auto', height: '100%' }}>

        {/* NAV */}
        <nav className="lumiere-nav" style={{ position: 'sticky', top: 0 }}>
          <a href="#" className="lumiere-logo">LUMI<span>È</span>RE</a>
          <ul className="lumiere-nav-links">
            {['Home', 'Portfolio', 'Blog', 'Career', 'Contact'].map(l => (
              <li key={l}><a href="#" className={l === 'Career' ? 'active' : ''}>{l}</a></li>
            ))}
          </ul>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="lumiere-btn lumiere-btn-dark" style={{ padding: '10px 24px', fontSize: '10px' }}>
            Apply Now
          </a>
        </nav>

        {/* HERO */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
            alt="Team at work"
            style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '0 60px',
          }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
              Join Our Team
            </p>
            <h1 style={{ fontSize: 64, fontWeight: 200, color: '#fff', lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.02em', maxWidth: 680 }}>
              Build the future<br />of extraordinary<br />events
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 480 }}>
              LUMIÈRE is home to passionate creatives, meticulous producers, and warm client champions who believe the best events change lives.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section style={{ padding: '100px 60px', background: 'var(--color-off-white)' }}>
          <div style={{ marginBottom: 60 }}>
            <p className="section-label">Why LUMIÈRE</p>
            <h2 style={{ fontSize: 40, fontWeight: 200, margin: 0, letterSpacing: '-0.01em' }}>
              What we stand for
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: '#fff', padding: '48px 36px' }}>
                <div style={{ fontSize: 20, marginBottom: 20, color: 'var(--color-text-mid)' }}>{v.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 400, marginBottom: 14, letterSpacing: '-0.01em' }}>{v.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--color-text-mid)', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OPENINGS */}
        <section style={{ padding: '100px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
            <div>
              <p className="section-label">Open Positions</p>
              <h2 style={{ fontSize: 40, fontWeight: 200, margin: 0, letterSpacing: '-0.01em' }}>
                {OPENINGS.length} roles available
              </h2>
            </div>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="arrow-link">
              General Application
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {OPENINGS.map((job) => (
              <div key={job.id} style={{ background: 'var(--color-off-white)', borderTop: '1px solid var(--color-mid-grey)' }}>
                {/* Row */}
                <button
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '32px 40px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto auto',
                    gap: 40,
                    alignItems: 'center',
                    textAlign: 'left',
                    fontFamily: 'var(--font-proxima)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 300, color: 'var(--color-text-dark)', marginBottom: 6, letterSpacing: '-0.01em' }}>{job.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--color-text-light)', letterSpacing: '0.1em' }}>{job.dept}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-mid)', marginBottom: 4 }}>{job.type}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-light)' }}>{job.location}</div>
                  </div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="lumiere-btn lumiere-btn-dark"
                    style={{ fontSize: 10, padding: '10px 20px', whiteSpace: 'nowrap' }}
                  >
                    Apply
                  </a>
                  <div style={{
                    width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, color: 'var(--color-text-mid)',
                    transform: expanded === job.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}>
                    +
                  </div>
                </button>

                {/* Expanded */}
                {expanded === job.id && (
                  <div style={{ padding: '0 40px 40px', borderTop: '1px solid var(--color-mid-grey)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, paddingTop: 32 }}>
                      <div>
                        <h4 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: 16 }}>
                          About the Role
                        </h4>
                        <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--color-text-mid)', margin: 0 }}>{job.desc}</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: 16 }}>
                          What We're Looking For
                        </h4>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                          {job.requirements.map((r, i) => (
                            <li key={i} style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-mid)', paddingLeft: 20, position: 'relative', marginBottom: 8 }}>
                              <span style={{ position: 'absolute', left: 0, color: 'var(--color-text-light)' }}>—</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--color-mid-grey)', display: 'flex', gap: 16, alignItems: 'center' }}>
                      <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="lumiere-btn lumiere-btn-dark">
                        Apply for This Position →
                      </a>
                      <span style={{ fontSize: 12, color: 'var(--color-text-light)' }}>
                        You'll be directed to our application form
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GENERAL APPLICATION CTA */}
        <section style={{
          background: 'var(--color-text-dark)',
          padding: '100px 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Don't See Your Role?
            </p>
            <h2 style={{ fontSize: 44, fontWeight: 200, color: '#fff', lineHeight: 1.1, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
              We're always looking<br />for exceptional talent
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
              Send us a general application and tell us what you can bring to LUMIÈRE. We review every submission and keep outstanding candidates on file for future opportunities.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '32px', borderLeft: '1px solid rgba(255,255,255,0.15)' }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Fill out our general application form on Google Forms. Include your CV, portfolio (if applicable), and a brief note on why you'd like to join LUMIÈRE.
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="lumiere-btn"
                style={{ background: '#fff', color: 'var(--color-text-dark)', display: 'inline-flex' }}
              >
                Submit General Application →
              </a>
            </div>
            <div style={{ padding: '0 8px' }}>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, margin: 0 }}>
                You can also reach us directly at{' '}
                <a href="mailto:careers@lumiere-events.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>
                  careers@lumiere-events.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lumiere-footer">
          <div className="lumiere-footer-grid">
            <div>
              <div className="lumiere-footer-brand">LUMI<span style={{ fontWeight: 600 }}>È</span>RE</div>
              <p className="lumiere-footer-desc">A boutique event production house creating extraordinary experiences worldwide.</p>
            </div>
            <div className="lumiere-footer-col"><h4>Services</h4><ul><li><a href="#">Wedding</a></li><li><a href="#">Corporate</a></li><li><a href="#">Private</a></li></ul></div>
            <div className="lumiere-footer-col"><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Portfolio</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li></ul></div>
            <div className="lumiere-footer-col"><h4>Contact</h4><ul><li><a href="#">hello@lumiere-events.com</a></li><li><a href="#">careers@lumiere-events.com</a></li><li><a href="#">Instagram</a></li></ul></div>
          </div>
          <div className="lumiere-footer-bottom">
            <span className="lumiere-footer-copy">© 2025 LUMIÈRE Events. All rights reserved.</span>
            <span className="lumiere-footer-copy">Privacy Policy · Terms</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
