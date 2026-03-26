import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Fade } from '@/components/Fade';
import { Link } from 'wouter';

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Private'];

const GALLERY = [
  { id: 1, title: 'THE SANTORINI AFFAIR', location: 'Santorini, Greece', year: '2025', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85' },
  { id: 2, title: 'TUSCANY GARDEN WEDDING', location: 'Florence, Italy', year: '2025', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85' },
  { id: 3, title: 'BALI CLIFF CEREMONY', location: 'Uluwatu, Bali', year: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&q=85' },
  { id: 4, title: 'THE PARIS PROPOSAL', location: 'Paris, France', year: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85' },
  { id: 5, title: 'MALDIVES BAREFOOT WEDDING', location: 'Malé, Maldives', year: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=85' },
  { id: 6, title: 'AZURE CORPORATE SUMMIT', location: 'Marina Bay, Singapore', year: '2025', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85' },
  { id: 7, title: 'GLOBAL LEADERSHIP FORUM', location: 'Dubai, UAE', year: '2025', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85' },
  { id: 8, title: 'TECH VISION CONFERENCE', location: 'Jakarta, Indonesia', year: '2024', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&q=85' },
  { id: 9, title: 'MIDNIGHT GARDEN SOIRÉE', location: 'Ubud, Bali', year: '2025', cat: 'Private', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85' },
  { id: 10, title: 'SILVER ANNIVERSARY', location: 'Amalfi Coast, Italy', year: '2024', cat: 'Private', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85' },
  { id: 11, title: 'ROOFTOP BIRTHDAY GALA', location: 'New York, USA', year: '2024', cat: 'Private', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=85' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? GALLERY : GALLERY.filter(g => g.cat === active);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Nunito Sans', sans-serif" }}>
      <Nav />
      <div style={{ paddingTop: 80 }}>

        {/* PAGE HEADER */}
        <Fade as="section" direction="in" className="lm-pad-h" style={{ paddingTop: 50, paddingBottom: 40, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 14 }}>
                Our Work
              </div>
              <h1 style={{ fontSize: 'clamp(42px, 5.5vw, 70px)', fontWeight: 200, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05, textTransform: 'uppercase' }}>
                Portfolio
              </h1>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(0,0,0,0.48)', maxWidth: 360, margin: 0 }}>
              A curated collection of our finest events — each one a testament to meticulous craft and creative vision.
            </p>
          </div>
        </Fade>

        {/* FILTER TABS */}
        <section className="lm-pad-h" style={{ display: 'flex', alignItems: 'center', overflowX: 'auto', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: 'none', border: 'none',
                padding: '18px 22px',
                fontSize: 9.5, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                cursor: 'pointer',
                color: active === cat ? 'hsl(35 10% 14%)' : 'rgba(0,0,0,0.36)',
                borderBottom: active === cat ? '2px solid hsl(35 10% 14%)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 10, color: 'rgba(0,0,0,0.3)', letterSpacing: '0.1em' }}>
            {filtered.length} events
          </span>
        </section>

        {/* GRID — 3 columns, text labels below (no overlay) */}
        <section className="lm-pad-h lm-portfolio-section" style={{ paddingTop: 3, paddingBottom: 100 }}>
          <div className="lm-grid-3">
            {filtered.map((item, i) => (
              <Fade key={item.id} delay={(i % 3) * 0.1}>
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ paddingTop: 14, paddingBottom: 28, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.3)', marginBottom: 8 }}>
                    {item.cat}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'hsl(35 10% 14%)', marginBottom: 5 }}>{item.title}</div>
                  <div style={{ fontSize: 10.5, color: 'rgba(0,0,0,0.38)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.location}
                    <span style={{ margin: '0 8px', opacity: 0.4 }}>·</span>
                    {item.year}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Fade as="section" className="lm-pad-h" style={{
          borderTop: '1px solid rgba(0,0,0,0.08)',
          paddingTop: 60, paddingBottom: 60,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32,
        }}>
          <div>
            <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 16 }}>
              Work With Us
            </div>
            <div style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 200, letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
              Planning your next event?
            </div>
          </div>
          <Link href="/#contact" style={{
            background: 'hsl(35 10% 14%)', color: '#fff',
            padding: '13px 32px', fontSize: 9.5, fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            textDecoration: 'none', display: 'inline-block',
          }}>
            Request a Proposal →
          </Link>
        </Fade>

        <Footer />
      </div>
    </div>
  );
}
