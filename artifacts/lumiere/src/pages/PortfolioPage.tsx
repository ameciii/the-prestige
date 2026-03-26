import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Private'];

const GALLERY = [
  { id: 1, title: 'The Santorini Affair', location: 'Santorini, Greece', year: '2025', cat: 'Wedding', size: 'large', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85' },
  { id: 2, title: 'Tuscany Garden Wedding', location: 'Florence, Italy', year: '2025', cat: 'Wedding', size: 'small', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=85' },
  { id: 3, title: 'Bali Cliff Ceremony', location: 'Uluwatu, Bali', year: '2024', cat: 'Wedding', size: 'small', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=85' },
  { id: 4, title: 'The Paris Proposal', location: 'Paris, France', year: '2024', cat: 'Wedding', size: 'small', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=85' },
  { id: 5, title: 'Maldives Barefoot Wedding', location: 'Malé, Maldives', year: '2024', cat: 'Wedding', size: 'large', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=85' },
  { id: 6, title: 'Azure Annual Summit', location: 'Marina Bay, Singapore', year: '2025', cat: 'Corporate', size: 'large', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85' },
  { id: 7, title: 'Global Leadership Forum', location: 'Dubai, UAE', year: '2025', cat: 'Corporate', size: 'small', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85' },
  { id: 8, title: 'Tech Vision Conference', location: 'Jakarta, Indonesia', year: '2024', cat: 'Corporate', size: 'small', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=700&q=85' },
  { id: 9, title: 'Midnight Garden Soirée', location: 'Ubud, Bali', year: '2025', cat: 'Private', size: 'large', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85' },
  { id: 10, title: 'Silver Anniversary', location: 'Amalfi Coast, Italy', year: '2024', cat: 'Private', size: 'small', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=85' },
  { id: 11, title: 'Rooftop Birthday Gala', location: 'New York, USA', year: '2024', cat: 'Private', size: 'small', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'All' ? GALLERY : GALLERY.filter(g => g.cat === active);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Nav />
      <div style={{ paddingTop: 80 }}>

        {/* PAGE HEADER */}
        <section style={{ padding: '60px 60px 50px', borderBottom: '1px solid hsl(40 10% 88%)' }}>
          <span className="section-label">Our Work</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 200, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Portfolio
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'hsl(35 5% 42%)', maxWidth: 380, textAlign: 'right', margin: 0 }}>
              A curated collection of our finest events — each one a testament to meticulous craft and creative vision.
            </p>
          </div>
        </section>

        {/* FILTER TABS */}
        <section style={{ padding: '0 60px', borderBottom: '1px solid hsl(40 10% 88%)', display: 'flex', alignItems: 'center' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: 'none', border: 'none',
                padding: '18px 30px',
                fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer',
                color: active === cat ? 'hsl(35 10% 16%)' : 'hsl(35 5% 60%)',
                borderBottom: active === cat ? '2px solid hsl(35 10% 16%)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
          <div style={{ marginLeft: 'auto' }}>
            <span style={{ fontSize: 11, color: 'hsl(35 5% 60%)', letterSpacing: '0.1em' }}>
              {filtered.length} projects
            </span>
          </div>
        </section>

        {/* MASONRY GALLERY */}
        <section style={{ padding: '50px 60px 100px' }}>
          <div style={{ columns: 3, columnGap: 3 }}>
            {filtered.map(item => (
              <div
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ breakInside: 'avoid', marginBottom: 3, position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%', display: 'block',
                    aspectRatio: item.size === 'large' ? '4/3' : '3/4',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: hovered === item.id ? 'scale(1.04)' : 'scale(1)',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,${hovered === item.id ? 0.75 : 0.42}) 0%, transparent 58%)`,
                  transition: 'background 0.3s',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.58)', marginBottom: 6 }}>
                    {item.cat} · {item.year}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 300, color: '#fff', lineHeight: 1.3, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.48)', fontStyle: 'italic' }}>{item.location}</div>
                  {hovered === item.id && (
                    <div style={{ marginTop: 14 }}>
                      <span className="arrow-link arrow-link-white" style={{ fontSize: '10px' }}>View Project</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'hsl(35 5% 60%)' }}>
              <p>No projects in this category yet.</p>
            </div>
          )}
        </section>

        {/* CTA */}
        <section style={{
          background: 'hsl(40 20% 97%)',
          padding: '80px 60px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32,
          borderTop: '1px solid hsl(40 10% 88%)',
        }}>
          <div>
            <span className="section-label">Work With Us</span>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 200, margin: 0, letterSpacing: '-0.01em' }}>
              Planning your next event?
            </h2>
          </div>
          <Link href="/career" className="lm-btn lm-btn-dark">Request a Proposal</Link>
        </section>

        <Footer />
      </div>
    </div>
  );
}
