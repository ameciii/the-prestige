import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Fade } from '@/components/Fade';

/* ─── DATA ──────────────────────────────────────────────────────── */

const SERVICES_LIST = [
  {
    num: '01', name: 'Engagement Ceremony',
    desc: 'An engagement marks the beginning of a new chapter, symbolizing a shared commitment. We recognize the importance of honoring diverse cultural traditions and values.',
  },
  {
    num: '02', name: 'Wedding Reception',
    desc: 'A wedding reception offers versatile elegance, from modern minimalism to lavish floral settings, with every detail designed to reflect your vision.',
  },
  {
    num: '03', name: 'Destination Wedding — Bali',
    desc: 'From golden sunsets by the sea to enchanting starlit evenings, nature becomes a breathtaking backdrop for your most special day.',
  },
  {
    num: '04', name: 'Overseas Wedding Planner',
    desc: 'Our full-service planning of your overseas wedding is flawlessly executed, from curated dining experiences to luxury accommodations. We design bespoke celebrations across the globe.',
  },
  {
    num: '05', name: 'Anniversary & Birthday Party',
    desc: 'Every anniversary and birthday is a meaningful milestone. Each celebration should reflect your unique vision and the life you have beautifully built together.',
  },
  {
    num: '06', name: 'Corporate Events & Others',
    desc: 'We provide a comprehensive range of corporate event management and creative services, from team building activities to large-scale corporate celebrations and galas.',
  },
];

const TESTIMONIALS = [
  {
    names: 'Daniel & Jessy',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=85',
    quote: 'LUMIÈRE turned our dream into a breathtaking reality. Every detail was crafted with care and elegance.',
  },
  {
    names: 'Rudy & Michelle',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=85',
    quote: 'From the first meeting to the last dance, the team was flawless. We will forever be grateful.',
  },
  {
    names: 'Wayne & Jeny',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=85',
    quote: 'A seamless, breathtaking experience from start to finish. Truly a world-class team.',
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */
export default function HomePage() {
  const contactRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ groom: '', bride: '', phone: '', email: '', date: '', city: '', message: '' });
  const [sent, setSent] = useState(false);

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Nunito Sans', sans-serif" }}>
      <Nav onContactClick={scrollToContact} transparent />

      {/* ══ 1. HERO — FULL BLEED ════════════════════════════════════ */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 600, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&q=90"
          alt="Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'grayscale(100%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.55) 100%)' }} />

        <div className="lm-hero-text" style={{ position: 'absolute', bottom: 0, left: 0, padding: '0 44px 48px', maxWidth: 560 }}>
          <div style={{ animation: 'lm-fade-up 1s ease 0.2s both' }}>
            <div style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 'clamp(64px, 8vw, 108px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: 2,
            }}>
              Love Journey
            </div>
            <div style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 'clamp(13px, 1.3vw, 18px)',
              fontWeight: 700,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: 20,
            }}>
              Begins Here...
            </div>
          </div>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)', marginBottom: 28, marginTop: 0,
            animation: 'lm-fade-in 0.8s ease 0.5s both',
          }}>
            Creating A Story That Is<br />Uniquely Yours.
          </p>
          <div style={{ animation: 'lm-fade-up 0.7s ease 0.65s both' }}>
            <button onClick={scrollToContact} style={{
              background: 'hsl(35 10% 14%)', color: '#fff',
              border: 'none', padding: '13px 30px',
              fontSize: 9.5, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: "'Nunito Sans', sans-serif",
            }}>
              Inquire Now
            </button>
          </div>
        </div>
      </section>

      {/* ══ 2. ABOUT — TEXT LEFT + IMAGE+STATS RIGHT ════════════════ */}
      <Fade as="section" id="about" direction="in" className="lm-grid-2asym" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div className="lm-about-text" style={{ padding: '70px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', marginBottom: 20 }}>
              about LUMIÈRE
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 800, letterSpacing: '0.03em', textTransform: 'uppercase', margin: '0 0 24px', lineHeight: 1.2 }}>
              Beyond Planning,<br />We Create Meaning
            </h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'rgba(0,0,0,0.55)', margin: '0 0 24px' }}>
              We are a passionate team in the event industry, crafting unique celebrations of love inspired by each couple's story. We create detailed, seamless event plans that capture laughter, love, and emotion to be cherished forever.
            </p>
            <div style={{ marginTop: 28, marginBottom: 36, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 8 }}>
                Our Team
              </div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>
                Conceptor · Planner · Director
              </div>
            </div>
          </div>
          <button onClick={scrollToContact} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'hsl(35 10% 14%)', fontFamily: "'Nunito Sans', sans-serif",
            display: 'inline-flex', alignItems: 'center', gap: 16, alignSelf: 'flex-start',
          }}>
            Know Us Better <span style={{ fontSize: 14 }}>→</span>
          </button>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=88"
            alt="LUMIÈRE team"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div className="lm-about-stats" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 32, background: 'rgba(255,255,255,0.92)', padding: '20px 32px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(35 10% 14%)', lineHeight: 1 }}>1000+</div>
              <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginTop: 6 }}>Events Crafted</div>
            </div>
            <div style={{ width: 1, background: 'rgba(0,0,0,0.1)', alignSelf: 'stretch' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(35 10% 14%)', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginTop: 6 }}>Years of Love</div>
            </div>
          </div>
        </div>
      </Fade>

      {/* ══ 3. SERVICES ════════════════════════════════════════════ */}
      <section id="services" style={{ background: '#F4F2ED' }}>
        <Fade className="lm-pad-h" style={{ paddingTop: 70, paddingBottom: 70 }}>
          <div style={{ marginBottom: 50 }}>
            <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', marginBottom: 16 }}>
              what we do
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0 }}>
              Our Services
            </h2>
          </div>
          <div className="lm-grid-svc">
            {SERVICES_LIST.map((s, i) => (
              <div key={s.name} className="lm-svc-item" style={{
                padding: '28px 0',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                borderRight: i % 2 === 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
                paddingRight: i % 2 === 0 ? 48 : 0,
                paddingLeft: i % 2 !== 0 ? 48 : 0,
              }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(0,0,0,0.28)', marginBottom: 14 }}>{s.num}</div>
                <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.04em', color: 'hsl(35 10% 14%)', marginBottom: 12, textTransform: 'uppercase' }}>{s.name}</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.82, color: 'rgba(0,0,0,0.52)', margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ══ 4. PROJECT SHOWCASE ════════════════════════════════════ */}
      <section id="portfolio" className="lm-pad-h" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <Fade style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', marginBottom: 16 }}>
            our work
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0 }}>
            Project Showcase
          </h2>
        </Fade>

        <Fade direction="in">
          <div className="lm-showcase-top" style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 3, marginBottom: 3 }}>
            <div style={{ overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=88" alt="Showcase 1"
                style={{ width: '100%', height: '100%', minHeight: 420, objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=88" alt="Showcase 2"
                style={{ width: '100%', height: '100%', minHeight: 420, objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
          </div>
          <div className="lm-showcase-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
            {[
              'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=88',
              'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&q=88',
              'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=88',
            ].map((src, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <img src={src} alt={`Showcase ${i + 3}`}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            ))}
          </div>
        </Fade>

        <div className="lm-showcase-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <button aria-label="Previous" style={{ background: 'none', border: '1px solid rgba(0,0,0,0.2)', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'hsl(35 10% 14%)' }}>‹</button>
            <button aria-label="Next" style={{ background: 'none', border: '1px solid rgba(0,0,0,0.2)', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'hsl(35 10% 14%)' }}>›</button>
          </div>
          <Link href="/portfolio" style={{
            fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'hsl(35 10% 14%)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* ══ 5. TESTIMONIALS ════════════════════════════════════════ */}
      <section id="testimonial" className="lm-pad-h" style={{ paddingTop: 70, paddingBottom: 70, borderTop: '1px solid rgba(0,0,0,0.08)', background: '#FAF9F7' }}>
        <Fade style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44 }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', marginBottom: 16 }}>
              what they say
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0 }}>
              Testimonial
            </h2>
          </div>
          <button onClick={scrollToContact} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.38)', fontFamily: "'Nunito Sans', sans-serif",
          }}>
            See More ↓
          </button>
        </Fade>
        <div className="lm-grid-3">
          {TESTIMONIALS.map((t, i) => (
            <Fade key={t.names} delay={i * 0.1}>
              <div style={{ overflow: 'hidden' }}>
                <img src={t.img} alt={t.names}
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block', filter: 'grayscale(10%)' }} />
              </div>
              <div style={{ paddingTop: 18, paddingBottom: 28, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(35 10% 14%)', marginBottom: 10 }}>{t.names}</div>
                <p style={{ fontSize: 12.5, lineHeight: 1.75, color: 'rgba(0,0,0,0.5)', margin: 0, fontStyle: 'italic' }}>"{t.quote}"</p>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ══ 6. CONTACT ════════════════════════════════════════════════ */}
      <section id="contact" ref={contactRef} style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <Fade delay={0.1} className="lm-grid-form lm-pad-h" style={{ paddingTop: 70, paddingBottom: 80 }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', marginBottom: 20 }}>
              let's connect
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', margin: '0 0 24px', lineHeight: 1.25 }}>
              Love Journey<br />Begins Here...
            </h2>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(0,0,0,0.5)', margin: '0 0 44px', maxWidth: 320 }}>
              Every extraordinary event begins with a conversation. We invite you to share your vision and allow our dedicated team to transform it into an unforgettable experience.
            </p>
            {[
              { label: 'Email', val: 'hello@lumiere-events.com' },
              { label: 'Phone', val: '+62 21 5050 1234' },
              { label: 'Location', val: 'Jakarta · Surabaya · Bali\nServing Worldwide' },
            ].map((c, i) => (
              <div key={c.label} style={{ paddingBottom: 18, marginBottom: 18, borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)', marginBottom: 6 }}>{c.label}</div>
                <div style={{ fontSize: 13, color: 'hsl(35 10% 14%)', whiteSpace: 'pre-line' }}>{c.val}</div>
              </div>
            ))}
          </div>

          <div>
            {sent ? (
              <div style={{ padding: '80px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 20, color: 'rgba(0,0,0,0.2)' }}>✦</div>
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.06em', marginBottom: 14, textTransform: 'uppercase', color: 'hsl(35 10% 14%)' }}>Thank You</div>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8, margin: 0 }}>We've received your inquiry and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>
                  <UField label="Groom To Be" type="text" placeholder="Groom's name" value={form.groom} onChange={v => setForm(f => ({ ...f, groom: v }))} required />
                  <UField label="Bride To Be" type="text" placeholder="Bride's name" value={form.bride} onChange={v => setForm(f => ({ ...f, bride: v }))} required />
                  <UField label="Contact" type="tel" placeholder="+62 ···" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} required />
                  <UField label="Email" type="email" placeholder="your@email.com" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} required />
                  <UField label="Event Date" type="text" placeholder="dd/mm/yyyy" value={form.date} onChange={v => setForm(f => ({ ...f, date: v }))} />
                  <UField label="City & Country" type="text" placeholder="Surabaya, Indonesia" value={form.city} onChange={v => setForm(f => ({ ...f, city: v }))} />
                </div>
                <div style={{ marginBottom: 36 }}>
                  <label style={uLabel}>Your Vision</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your dream event..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...uInput, resize: 'none' }}
                  />
                </div>
                <button type="submit" style={{
                  background: 'hsl(35 10% 14%)', color: '#fff',
                  border: 'none', padding: '15px 0', width: '100%',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase',
                  cursor: 'pointer', fontFamily: "'Nunito Sans', sans-serif",
                }}>
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </Fade>
      </section>

      <Footer />
    </div>
  );
}

/* ─── FORM HELPERS ───────────────────────────────────────────────── */
const uLabel: React.CSSProperties = {
  display: 'block',
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: '0.26em',
  textTransform: 'uppercase' as const,
  color: 'rgba(0,0,0,0.3)',
  marginBottom: 10,
};

const uInput: React.CSSProperties = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.15)',
  padding: '0 0 12px',
  fontSize: 14,
  outline: 'none',
  background: 'transparent',
  fontFamily: "'Nunito Sans', sans-serif",
  color: 'hsl(35 10% 14%)',
  boxSizing: 'border-box' as const,
  display: 'block',
};

function UField({ label, type, placeholder, value, onChange, required }: {
  label: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div style={{ marginBottom: 32 }}>
      <label style={uLabel}>{label}</label>
      <input
        type={type} placeholder={placeholder} value={value} required={required}
        onChange={e => onChange(e.target.value)}
        style={uInput}
      />
    </div>
  );
}
