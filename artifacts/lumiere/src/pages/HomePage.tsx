import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Fade } from '@/components/Fade';

/* ─── DATA ──────────────────────────────────────────────────────── */

const INTRO_EVENTS = [
  {
    id: 1, title: 'THE SANTORINI AFFAIR',
    location: 'SANTORINI, GREECE', cat: 'WEDDING',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=88',
  },
  {
    id: 2, title: 'AZURE SUMMIT 2025',
    location: 'MARINA BAY, SINGAPORE', cat: 'CORPORATE',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=88',
  },
  {
    id: 3, title: 'MIDNIGHT GARDEN SOIRÉE',
    location: 'UBUD, BALI', cat: 'PRIVATE',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=88',
  },
];

const SERVICES_LIST = [
  { name: 'Wedding Events', sub: 'Full Planning & Production' },
  { name: 'Corporate Gatherings', sub: 'Conferences & Galas' },
  { name: 'Private Celebrations', sub: 'Bespoke & Intimate' },
  { name: 'Destination Events', sub: 'Worldwide' },
  { name: 'Concept & Design', sub: 'Styling & Decor' },
  { name: 'Day-of Coordination', sub: 'Logistics & Management' },
];

const GALLERY_CATS = ['All', 'Wedding', 'Corporate', 'Private'];

const ALL_EVENTS = [
  { id: 1, title: 'THE SANTORINI AFFAIR', loc: 'Santorini, Greece', yr: '2025', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85' },
  { id: 2, title: 'TUSCANY GARDEN WEDDING', loc: 'Florence, Italy', yr: '2025', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85' },
  { id: 3, title: 'BALI CLIFF CEREMONY', loc: 'Uluwatu, Bali', yr: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=85' },
  { id: 4, title: 'MALDIVES BAREFOOT WEDDING', loc: 'Malé, Maldives', yr: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=85' },
  { id: 5, title: 'AZURE CORPORATE SUMMIT', loc: 'Singapore', yr: '2025', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85' },
  { id: 6, title: 'GLOBAL LEADERSHIP FORUM', loc: 'Dubai, UAE', yr: '2025', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85' },
  { id: 7, title: 'TECH VISION CONFERENCE', loc: 'Jakarta', yr: '2024', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=85' },
  { id: 8, title: 'MIDNIGHT GARDEN SOIRÉE', loc: 'Ubud, Bali', yr: '2025', cat: 'Private', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85' },
  { id: 9, title: 'SILVER ANNIVERSARY', loc: 'Amalfi Coast, Italy', yr: '2024', cat: 'Private', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85' },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */
export default function HomePage() {
  const [cat, setCat] = useState('All');
  const [visible, setVisible] = useState(6);
  const contactRef = useRef<HTMLElement>(null);

  const filtered = cat === 'All' ? ALL_EVENTS : ALL_EVENTS.filter(e => e.cat === cat);
  const shown = filtered.slice(0, visible);

  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', date: '', message: '' });
  const [sent, setSent] = useState(false);

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Nunito Sans', sans-serif" }}>
      <Nav onContactClick={scrollToContact} transparent />

      {/* ══ 1. HERO — FULL BLEED ════════════════════════════════════ */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 640, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=90"
          alt="Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Gradient overlay — heavier at bottom for text legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Bottom-left: headline + CTA */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '0 40px 44px', maxWidth: 640 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 18, marginTop: 0, animation: 'lm-fade-in 0.8s ease 0.2s both' }}>
            Event Design & Production
          </p>
          <h1 style={{
            fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 200, lineHeight: 1.06,
            letterSpacing: '-0.01em', color: '#fff', margin: '0 0 32px',
            animation: 'lm-fade-up 1s ease 0.35s both',
          }}>
            Where Moments<br />Become <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Extraordinary</em>
          </h1>
          <div style={{ display: 'flex', gap: 12, animation: 'lm-fade-up 0.7s ease 0.65s both' }}>
            <button onClick={scrollToContact} style={{
              background: '#fff', color: 'hsl(35 10% 14%)',
              border: 'none', padding: '13px 28px',
              fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              cursor: 'pointer', fontFamily: "'Nunito Sans', sans-serif",
            }}>
              Plan Your Event
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', color: '#fff',
                border: '1px solid rgba(255,255,255,0.45)', padding: '13px 28px',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              View Our Work →
            </button>
          </div>
        </div>

        {/* Bottom-right: two equal-size clickable project thumbnails */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, display: 'flex', gap: 2, animation: 'lm-fade-in 1s ease 0.85s both' }}>
          {[
            { title: 'The Tuscany Wedding', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&q=85' },
            { title: 'Azure Summit', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=85' },
          ].map(t => (
            <Link
              key={t.title}
              href="/portfolio"
              style={{
                position: 'relative',
                display: 'block',
                width: 200,
                height: 160,
                overflow: 'hidden',
                flexShrink: 0,
                textDecoration: 'none',
              }}
            >
              <img
                src={t.img}
                alt={t.title}
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={ev => { ev.currentTarget.style.transform = 'scale(1.06)'; }}
                onMouseLeave={ev => { ev.currentTarget.style.transform = 'scale(1)'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 12px', pointerEvents: 'none' }}>
                <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 3 }}>{t.cat}</div>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.14em', color: '#fff', textTransform: 'uppercase' }}>{t.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hero caption row */}
      <Fade style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        padding: '32px 40px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)', gap: 60,
      }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', color: 'hsl(35 10% 14%)', lineHeight: 1.5, textTransform: 'uppercase' }}>
            That's the vision<br />behind LUMIÈRE
          </div>
        </div>
        <div>
          <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(0,0,0,0.52)', margin: '0 0 22px' }}>
            LUMIÈRE is more than an event company — it's a reflection of how design, hospitality, and emotion can come together to create moments that are both extraordinary and timeless.
          </p>
          <button onClick={scrollToContact} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'hsl(35 10% 14%)', fontFamily: "'Nunito Sans', sans-serif",
            display: 'flex', alignItems: 'center', gap: 16,
          }}>
            Explore More <span style={{ fontSize: 14 }}>→</span>
          </button>
        </div>
      </Fade>

      {/* ══ 2. INTRODUCING EVENTS — 3-COL PORTRAIT GRID ═══════════ */}
      <section style={{ padding: '70px 40px 0' }}>
        <Fade style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 200, letterSpacing: '-0.01em', textTransform: 'uppercase', margin: 0 }}>
            Introducing Events
          </h2>
          <Link href="/portfolio" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.38)', textDecoration: 'none' }}>
            All Events →
          </Link>
        </Fade>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
          {INTRO_EVENTS.map((e, i) => (
            <Fade key={e.id} delay={i * 0.12}>
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={e.img}
                  alt={e.title}
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={ev => (ev.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={ev => (ev.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ paddingTop: 14, paddingBottom: 28, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 8 }}>
                  {e.cat}
                </div>
                <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(35 10% 14%)', marginBottom: 5 }}>{e.title}</div>
                <div style={{ fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.38)' }}>{e.location}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* ══ 3. EDITORIAL WIDE IMAGE — FEATURE EVENT ════════════════ */}
      <Fade as="section" direction="in" style={{ marginTop: 3 }}>
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1800&q=90"
            alt="Featured event"
            style={{ width: '100%', height: '70vh', minHeight: 500, objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '28px 40px 60px', borderBottom: '1px solid rgba(0,0,0,0.08)', gap: 60 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(35 10% 14%)', lineHeight: 1.5 }}>
              That's the ceremony<br />at Maldives Barefoot
            </div>
          </div>
          <div>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(0,0,0,0.5)', margin: '0 0 22px' }}>
              Beneath an open sky and above a turquoise lagoon, this barefoot beach ceremony became a masterclass in restraint — where nature provided the grandeur and LUMIÈRE provided the precision.
            </p>
            <Link href="/portfolio" style={{
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'hsl(35 10% 14%)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 16,
            }}>
              Explore More <span style={{ fontSize: 14 }}>→</span>
            </Link>
          </div>
        </div>
      </Fade>

      {/* ══ 4. SERVICES — LIST MANIFEST ════════════════════════════ */}
      <Fade as="section" style={{ padding: '70px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 200, letterSpacing: '-0.01em', textTransform: 'uppercase', margin: 0 }}>
            What We Do
          </h2>
          <button onClick={scrollToContact} style={{
            background: 'hsl(35 10% 14%)', color: '#fff', border: 'none', cursor: 'pointer',
            padding: '10px 26px', fontSize: 9.5, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: "'Nunito Sans', sans-serif",
          }}>
            Start Planning
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
          {SERVICES_LIST.map((s, i) => (
            <div key={s.name} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '22px 0',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              borderRight: i % 2 === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              paddingRight: i % 2 === 0 ? 40 : 0,
              paddingLeft: i % 2 !== 0 ? 40 : 0,
            }}>
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 400, letterSpacing: '0.03em', color: 'hsl(35 10% 14%)', marginBottom: 3, textTransform: 'uppercase' }}>{s.name}</div>
                <div style={{ fontSize: 10.5, color: 'rgba(0,0,0,0.38)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.sub}</div>
              </div>
              <span style={{ fontSize: 16, color: 'rgba(0,0,0,0.22)' }}>→</span>
            </div>
          ))}
        </div>
      </Fade>

      {/* ══ 5. PORTFOLIO GALLERY ════════════════════════════════════ */}
      <section id="portfolio" style={{ padding: '0 40px 80px', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <Fade style={{ padding: '50px 0 32px', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 0 }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 200, letterSpacing: '-0.01em', textTransform: 'uppercase', margin: 0 }}>
            Our Portfolio
          </h2>
          <span style={{ fontSize: 10, color: 'rgba(0,0,0,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {filtered.length} events
          </span>
        </Fade>
        {/* Filter row */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '0', borderBottom: '1px solid rgba(0,0,0,0.08)', marginBottom: 3 }}>
          {GALLERY_CATS.map(c => (
            <button key={c} onClick={() => { setCat(c); setVisible(6); }} style={{
              background: 'none', border: 'none',
              padding: '18px 24px',
              fontSize: 9.5, fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              cursor: 'pointer',
              color: cat === c ? 'hsl(35 10% 14%)' : 'rgba(0,0,0,0.36)',
              borderBottom: cat === c ? '2px solid hsl(35 10% 14%)' : '2px solid transparent',
              marginBottom: -1, fontFamily: "'Nunito Sans', sans-serif",
            }}>
              {c}
            </button>
          ))}
        </div>

        {/* Grid — 3 equal columns, square-ish images, text below */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }}>
          {shown.map((e, i) => (
            <Fade key={e.id} delay={(i % 3) * 0.1} style={{ cursor: 'pointer' }}>
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={e.img}
                  alt={e.title}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                  onMouseEnter={ev => (ev.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={ev => (ev.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '12px 0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(35 10% 14%)', marginBottom: 4 }}>{e.title}</div>
                  <div style={{ fontSize: 10, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {e.loc} <span style={{ opacity: 0.5, margin: '0 6px' }}>·</span> {e.yr}
                  </div>
                </div>
                <span style={{ fontSize: 10, color: 'rgba(0,0,0,0.28)', marginTop: 2 }}>→</span>
              </div>
            </Fade>
          ))}
        </div>

        {/* See More / View All */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          {visible < filtered.length ? (
            <button
              onClick={() => setVisible(v => v + 3)}
              style={{
                background: 'none', border: '1px solid rgba(0,0,0,0.2)',
                padding: '12px 36px', fontSize: 9.5, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: "'Nunito Sans', sans-serif",
                color: 'hsl(35 10% 14%)',
              }}
            >
              See More
            </button>
          ) : (
            <Link href="/portfolio" style={{
              background: 'hsl(35 10% 14%)', color: '#fff',
              padding: '12px 36px', fontSize: 9.5, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
            }}>
              View Full Portfolio →
            </Link>
          )}
        </div>
      </section>

      {/* ══ 6. ABOUT — LARGE IMAGE + TEXT ══════════════════════════ */}
      <Fade as="section" direction="in" style={{ display: 'grid', gridTemplateColumns: '55% 45%', minHeight: 560, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=88"
            alt="About LUMIÈRE"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        <div style={{ padding: '70px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 24 }}>
              The Studio
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', fontWeight: 200, letterSpacing: '-0.01em', textTransform: 'uppercase', margin: '0 0 8px' }}>
              LUMIÈRE EVENTS
            </h2>
            <div style={{ fontSize: 11.5, color: 'rgba(0,0,0,0.42)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 28 }}>
              Boutique Event Design Studio
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'rgba(0,0,0,0.55)', margin: '0 0 18px' }}>
              Founded on the belief that every event is a once-in-a-lifetime story, LUMIÈRE brings together the finest talent in design, logistics, and hospitality.
            </p>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, color: 'rgba(0,0,0,0.55)', margin: '0 0 40px' }}>
              With over a decade of international experience — from intimate Tuscan ceremonies to large-scale corporate galas in Singapore — we turn vision into reality.
            </p>
          </div>
          <button onClick={scrollToContact} style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'hsl(35 10% 14%)', fontFamily: "'Nunito Sans', sans-serif",
            display: 'inline-flex', alignItems: 'center', gap: 16, alignSelf: 'flex-start',
          }}>
            Explore More <span style={{ fontSize: 14 }}>→</span>
          </button>
        </div>
      </Fade>

      {/* ══ 7. CONTACT — FULL IMAGE + SECTION ══════════════════════ */}
      <section id="contact" ref={contactRef} style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        {/* Full-bleed contact image */}
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=88"
            alt="Contact"
            style={{ width: '100%', height: '55vh', minHeight: 400, objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Caption row */}
        <Fade style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '36px 40px 36px', borderBottom: '1px solid rgba(0,0,0,0.08)', gap: 60, alignItems: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 200, letterSpacing: '-0.01em', textTransform: 'uppercase', margin: 0, lineHeight: 1.15 }}>
            Contact Us For<br />More Information
          </h2>
          <p style={{ fontSize: 13.5, lineHeight: 1.85, color: 'rgba(0,0,0,0.5)', margin: 0 }}>
            Each event we design is a testament to attention, craft, and a deep understanding of what our clients truly want. Tell us your vision.
          </p>
        </Fade>

        {/* INQUIRY FORM */}
        <Fade delay={0.1} id="inquiry-form" style={{ padding: '60px 40px 80px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 100, alignItems: 'flex-start' }}>
          {/* Left: info */}
          <div>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 40 }}>
              Get In Touch
            </div>
            {[
              { label: 'Email', val: 'hello@lumiere-events.com' },
              { label: 'Phone', val: '+62 21 5050 1234' },
              { label: 'Office', val: 'Jakarta, Indonesia' },
              { label: 'Hours', val: 'Mon – Sat, 9am – 6pm WIB' },
            ].map((c, i) => (
              <div key={c.label} style={{ paddingBottom: 24, marginBottom: 24, borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.28)', marginBottom: 8 }}>{c.label}</div>
                <div style={{ fontSize: 14, color: 'hsl(35 10% 14%)', letterSpacing: '0.01em' }}>{c.val}</div>
              </div>
            ))}
          </div>

          {/* Right: form — editorial underline style */}
          <div>
            {sent ? (
              <div style={{ padding: '80px 0', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 20, color: 'rgba(0,0,0,0.2)' }}>✦</div>
                <div style={{ fontSize: 18, fontWeight: 200, letterSpacing: '0.08em', marginBottom: 14, textTransform: 'uppercase', color: 'hsl(35 10% 14%)' }}>Thank You</div>
                <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8, margin: 0 }}>We've received your inquiry and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px' }}>
                  <UField label="Full Name" type="text" placeholder="Your name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} required />
                  <UField label="Email Address" type="email" placeholder="your@email.com" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} required />
                  <UField label="Phone" type="tel" placeholder="+62 8xx xxxx xxxx" value={form.phone} onChange={v => setForm(f => ({ ...f, phone: v }))} />
                  <div style={{ marginBottom: 32 }}>
                    <label style={uLabel}>Event Type</label>
                    <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} style={{ ...uInput, color: form.type ? 'hsl(35 10% 14%)' : 'rgba(0,0,0,0.38)' }}>
                      <option value="">Select type</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Private Celebration</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <UField label="Preferred Event Date" type="date" placeholder="" value={form.date} onChange={v => setForm(f => ({ ...f, date: v }))} />
                <div style={{ marginBottom: 32 }}>
                  <label style={uLabel}>Message</label>
                  <textarea
                    required rows={4}
                    placeholder="Tell us about your vision — venue ideas, guest count, any special requests…"
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
                  Send Inquiry →
                </button>
                <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', marginTop: 16, lineHeight: 1.7, marginBottom: 0 }}>
                  We respond within 24 hours. For urgent matters, call us directly.
                </p>
              </form>
            )}
          </div>
        </Fade>
      </section>

      <Footer />
    </div>
  );
}

/* ─── FORM HELPERS — editorial underline style ──────────────────── */
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
