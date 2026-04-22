import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Fade } from '@/components/Fade';

/* ─── DATA ──────────────────────────────────────────────────────── */

const SERVICES_LIST = [
  {
    num: '01', name: 'Engagement Ceremony',
    desc: 'An engagement marks the beginning of a new chapter, symbolizing a shared commitment and the first union of two families. We recognize the importance of honoring diverse cultural traditions and values.',
  },
  {
    num: '02', name: 'Wedding Reception',
    desc: 'A ballroom wedding offers versatile elegance, from modern minimalism to lavish floral settings, with every detail designed to reflect your vision.',
  },
  {
    num: '03', name: 'Destination Wedding - Bali',
    desc: 'For a more intimate and relaxed celebration, from golden sunsets by the sea to enchanting starlit evenings, nature becomes a breathtaking backdrop for your special day.',
  },
  {
    num: '04', name: 'Overseas Wedding Planner',
    desc: 'Our full-service planning of your overseas wedding is flawlessly executed from curated dining experiences to luxury accommodations. We design bespoke celebrations across the globe.',
  },
  {
    num: '05', name: 'Anniversary / Birthday Party',
    desc: 'Every anniversary / birthday is a meaningful milestone, and each celebration should reflect your unique vision.',
  },
  {
    num: '06', name: 'Corporate Events & Others',
    desc: 'We provide a comprehensive range of corporate event management and creative services. From team building activities to large scale corporate celebrations and gala events, each project is handled with innovation.',
  },
];

const TESTIMONIALS = [
  {
    names: 'Daniel & Jessy',
    img: '/photos/testi-1.jpg',
    quote: 'The Prestige turned our dream into a breathtaking reality. Every detail was crafted with care and elegance.',
  },
  {
    names: 'Rudy & Michelle',
    img: '/photos/testi-2.jpg',
    quote: 'From the first meeting to the last dance, the team was flawless. We will forever be grateful.',
  },
  {
    names: 'Wayne & Jeny',
    img: '/photos/testi-3.jpg',
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
          src="/photos/hero.jpg"
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
      <Fade as="section" id="about" direction="in" className="lm-grid-2asym" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', minHeight: 560 }}>
        <div className="lm-about-text" style={{ padding: '70px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.06em', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span>about</span>
              <span style={{ width: 1, height: 10, background: 'rgba(0,0,0,0.25)', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 10, color: 'rgba(0,0,0,0.5)' }}>THE PRESTIGE ORGANIZER</span>
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 800, letterSpacing: '0.03em', textTransform: 'uppercase', margin: '0 0 24px', lineHeight: 1.2 }}>
              Beyond Planning,<br />We Create Meaning
            </h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'rgba(0,0,0,0.55)', margin: '0 0 24px' }}>
              We are a passionate team in the wedding industry, crafting unique Celebration of Love moments inspired by each couple's story. At The Prestige, we create detailed, seamless wedding plans that capture laughter, love, and emotion to be cherished forever.
            </p>
            <div style={{ marginTop: 28, marginBottom: 36, paddingTop: 24, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 8 }}>
                Our Team
              </div>
              <div style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>
                Conceptor | Planner | Director
              </div>
            </div>
          </div>
          <button onClick={scrollToContact} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'hsl(35 10% 14%)', fontFamily: "'Nunito Sans', sans-serif",
            display: 'inline-flex', alignItems: 'center', gap: 0, alignSelf: 'flex-start',
            textDecoration: 'underline', textUnderlineOffset: 4,
          }}>
            Know Us Better
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, overflow: 'hidden', minHeight: 400 }}>
            <img
              src="/photos/about-team.jpg"
              alt="LUMIÈRE team"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
            />
          </div>
          <div className="lm-about-stats" style={{ display: 'flex', gap: 0, background: '#fff', padding: '22px 36px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(35 10% 14%)', lineHeight: 1 }}>1000+</div>
              <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.4)', marginTop: 6 }}>Events Crafted</div>
            </div>
            <div style={{ width: 1, background: 'rgba(0,0,0,0.1)', alignSelf: 'stretch', margin: '0 24px' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'hsl(35 10% 14%)', lineHeight: 1 }}>10+</div>
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
          <div className="lm-showcase-top" style={{ display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 3, marginBottom: 3, height: 440 }}>
            <div style={{ overflow: 'hidden', height: '100%' }}>
              <img src="/photos/showcase-1.jpg" alt="Showcase 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
            <div style={{ overflow: 'hidden', height: '100%' }}>
              <img src="/photos/showcase-2.jpg" alt="Showcase 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
          </div>
          <div className="lm-showcase-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
            {[
              '/photos/showcase-3.jpg',
              '/photos/showcase-4.jpg',
              '/photos/showcase-5.jpg',
            ].map((src, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <img src={src} alt={`Showcase ${i + 3}`}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            ))}
          </div>
        </Fade>

        <div className="lm-showcase-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 32, gap: 10 }}>
          <button aria-label="Previous" style={{ background: 'none', border: '1px solid rgba(0,0,0,0.2)', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'hsl(35 10% 14%)' }}>‹</button>
          <button aria-label="Next" style={{ background: 'none', border: '1px solid rgba(0,0,0,0.2)', width: 40, height: 40, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'hsl(35 10% 14%)' }}>›</button>
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
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
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
              Every extraordinary event begins with a conversation. We invite you to share your vision with us, and allow our dedicated team to transform it into an unforgettable experience.
            </p>
            <div style={{ marginTop: 8 }}>
              <div style={{ fontSize: 13, color: 'hsl(35 10% 14%)', marginBottom: 10 }}>ThePrestigeOrganizer@gmail.com</div>
              <div style={{ fontSize: 13, color: 'hsl(35 10% 14%)', marginBottom: 10 }}>+62 811 3566 299</div>
              <div style={{ fontSize: 13, color: 'hsl(35 10% 14%)', lineHeight: 1.7 }}>Jakarta | Surabaya | Bali<br />Serving Worldwide</div>
            </div>
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
                  <UField label="Groom To Be" type="text" placeholder="Alexandra" value={form.groom} onChange={v => setForm(f => ({ ...f, groom: v }))} required />
                  <UField label="Bride To Be" type="text" placeholder="Wijaya" value={form.bride} onChange={v => setForm(f => ({ ...f, bride: v }))} required />
                  <UField label="Contact" type="tel" placeholder="+62 ·······" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} required />
                  <UField label="Email" type="email" placeholder="your@email.com" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} required />
                  <UField label="Event Date" type="text" placeholder="dd/mm/yyyy" value={form.date} onChange={v => setForm(f => ({ ...f, date: v }))} />
                  <UField label="City & Country" type="text" placeholder="Surabaya" value={form.city} onChange={v => setForm(f => ({ ...f, city: v }))} />
                </div>
                <div style={{ marginBottom: 36 }}>
                  <label style={uLabel}>Your Vision</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your dream event...."
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
