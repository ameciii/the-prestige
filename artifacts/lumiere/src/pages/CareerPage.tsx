import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform';

const VALUES = [
  { icon: '◇', title: 'Excellence', desc: 'We hold every detail to the highest standard, without exception.' },
  { icon: '◈', title: 'Integrity', desc: 'Honest relationships with clients, vendors, and each other.' },
  { icon: '◉', title: 'Creativity', desc: 'We approach every event as a blank canvas for extraordinary ideas.' },
  { icon: '◎', title: 'Global Mindset', desc: 'We work across cultures with curiosity, respect, and adaptability.' },
];

const OPENINGS = [
  {
    id: 1,
    title: 'Senior Event Producer',
    dept: 'Production',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    desc: 'Lead end-to-end production of large-scale weddings and corporate events. Own client relationships, vendor coordination, and on-site execution.',
    requirements: ['5+ years in luxury event production', 'Strong vendor & venue network across Asia', 'Fluent in English; Bahasa Indonesia preferred', 'Willingness to travel internationally'],
  },
  {
    id: 2,
    title: 'Creative Director',
    dept: 'Design',
    type: 'Full-time',
    location: 'Jakarta / Remote',
    desc: 'Define the visual language and conceptual direction for LUMIÈRE events. Collaborate with clients to translate their vision into cohesive, stunning experiences.',
    requirements: ['Portfolio demonstrating luxury aesthetic sensibility', '7+ years in event design or related creative field', 'Expertise in floral, lighting, and spatial design', 'Experience with mood board tools (Canva, Miro, Figma)'],
  },
  {
    id: 3,
    title: 'Client Relations Manager',
    dept: 'Client Services',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    desc: 'Be the primary point of contact for our most valued clients, guiding them from first consultation through post-event debrief.',
    requirements: ['3+ years in luxury hospitality or event client services', 'Exceptional communication in English (written & verbal)', 'Calm under pressure; solutions-first mindset', 'International client experience a plus'],
  },
  {
    id: 4,
    title: 'Event Coordinator (Junior)',
    dept: 'Production',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    desc: 'Support senior producers in planning and executing a diverse portfolio of events — an exceptional entry point for those passionate about luxury events.',
    requirements: ['1–2 years in events or hospitality', 'Highly organized with strong attention to detail', 'Positive attitude and team-first mindset', 'Willingness to work flexible hours including weekends'],
  },
  {
    id: 5,
    title: 'Digital Marketing Specialist',
    dept: 'Marketing',
    type: 'Full-time',
    location: 'Jakarta / Hybrid',
    desc: "Own LUMIÈRE's digital presence across social media, email, and SEO. Create content that reflects our brand's luxury positioning while growing our international audience.",
    requirements: ['3+ years in digital marketing', 'Proven expertise with Instagram, LinkedIn, and email campaigns', 'Strong visual eye aligned with luxury aesthetics', 'Analytics-driven decision making'],
  },
];

export default function CareerPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Nav />
      <div style={{ paddingTop: 80 }}>

        {/* HERO */}
        <section style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=88"
            alt="LUMIÈRE team collaborating"
            style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(0,0,0,0.62))',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px',
          }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 20, marginTop: 0 }}>
              Join Our Team
            </p>
            <h1 style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 200, color: '#fff', lineHeight: 1.05, margin: '0 0 24px', letterSpacing: '-0.02em', maxWidth: 680 }}>
              Build the future<br />of extraordinary<br />events
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: 0 }}>
              LUMIÈRE is home to passionate creatives, meticulous producers, and warm client champions who believe the best events change lives.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section style={{ padding: '100px 60px', background: 'hsl(40 20% 97%)' }}>
          <div style={{ marginBottom: 56 }}>
            <span className="section-label">Why LUMIÈRE</span>
            <h2 style={{ fontSize: 'clamp(30px, 3vw, 42px)', fontWeight: 200, margin: 0, letterSpacing: '-0.01em' }}>What we stand for</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2 }}>
            {VALUES.map(v => (
              <div key={v.title} style={{ background: '#fff', padding: '48px 36px' }}>
                <div style={{ fontSize: 22, marginBottom: 20, color: 'hsl(35 5% 42%)' }}>{v.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 400, marginBottom: 14, letterSpacing: '-0.01em', marginTop: 0 }}>{v.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: 'hsl(35 5% 42%)', margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OPEN POSITIONS */}
        <section style={{ padding: '100px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <span className="section-label">Open Positions</span>
              <h2 style={{ fontSize: 'clamp(30px, 3vw, 42px)', fontWeight: 200, margin: 0, letterSpacing: '-0.01em' }}>
                {OPENINGS.length} roles available
              </h2>
            </div>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="arrow-link">
              General Application
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {OPENINGS.map(job => (
              <div key={job.id} style={{ background: 'hsl(40 20% 97%)', borderTop: '1px solid hsl(40 10% 88%)' }}>
                {/* Job Row */}
                <button
                  onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '30px 40px',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto auto auto',
                    gap: 36, alignItems: 'center', textAlign: 'left',
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 300, color: 'hsl(35 10% 16%)', marginBottom: 5, letterSpacing: '-0.01em' }}>{job.title}</div>
                    <div style={{ fontSize: 11, color: 'hsl(35 5% 60%)', letterSpacing: '0.1em' }}>{job.dept}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'hsl(35 5% 42%)', marginBottom: 4 }}>{job.type}</div>
                    <div style={{ fontSize: 12, color: 'hsl(35 5% 60%)' }}>{job.location}</div>
                  </div>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="lm-btn lm-btn-dark"
                    style={{ fontSize: 10, padding: '10px 20px' }}
                  >
                    Apply
                  </a>
                  <div style={{
                    width: 30, height: 30,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, color: 'hsl(35 5% 42%)',
                    transform: expanded === job.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.22s',
                  }}>
                    +
                  </div>
                </button>

                {/* Expanded Details */}
                {expanded === job.id && (
                  <div style={{ padding: '0 40px 40px', borderTop: '1px solid hsl(40 10% 88%)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, paddingTop: 32 }}>
                      <div>
                        <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'hsl(35 5% 60%)', marginBottom: 14, marginTop: 0 }}>About the Role</h4>
                        <p style={{ fontSize: 14, lineHeight: 1.9, color: 'hsl(35 5% 42%)', margin: 0 }}>{job.desc}</p>
                      </div>
                      <div>
                        <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'hsl(35 5% 60%)', marginBottom: 14, marginTop: 0 }}>What We're Looking For</h4>
                        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                          {job.requirements.map((r, i) => (
                            <li key={i} style={{ fontSize: 14, lineHeight: 1.75, color: 'hsl(35 5% 42%)', paddingLeft: 20, position: 'relative', marginBottom: 8 }}>
                              <span style={{ position: 'absolute', left: 0, color: 'hsl(35 5% 60%)' }}>—</span>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div style={{ marginTop: 36, paddingTop: 28, borderTop: '1px solid hsl(40 10% 88%)', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                      <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="lm-btn lm-btn-dark">
                        Apply for This Position →
                      </a>
                      <span style={{ fontSize: 12, color: 'hsl(35 5% 60%)' }}>You'll be directed to our application form</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* GENERAL APPLICATION */}
        <section style={{
          background: 'hsl(35 10% 16%)',
          padding: '100px 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 20, marginTop: 0 }}>
              Don't See Your Role?
            </p>
            <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 46px)', fontWeight: 200, color: '#fff', lineHeight: 1.1, margin: '0 0 22px', letterSpacing: '-0.02em' }}>
              We're always looking<br />for exceptional talent
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: 'rgba(255,255,255,0.58)', margin: 0 }}>
              Send us a general application and tell us what you can bring to LUMIÈRE. We review every submission and keep outstanding candidates on file for future opportunities.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ background: 'rgba(255,255,255,0.07)', padding: '32px', borderLeft: '1px solid rgba(255,255,255,0.14)' }}>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.8, margin: '0 0 24px' }}>
                Fill out our general application form on Google Forms. Include your CV, portfolio (if applicable), and a brief note on why you'd like to join LUMIÈRE.
              </p>
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="lm-btn lm-btn-white" style={{ display: 'inline-flex' }}>
                Submit General Application →
              </a>
            </div>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, margin: '0 8px' }}>
              You can also reach us at{' '}
              <a href="mailto:careers@lumiere-events.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>
                careers@lumiere-events.com
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
