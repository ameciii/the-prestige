import './_group.css';
import { useState } from 'react';

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Private'];

const GALLERY = [
  // Wedding
  { id: 1, title: 'The Santorini Affair', location: 'Santorini, Greece', year: '2025', cat: 'Wedding', size: 'large', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85' },
  { id: 2, title: 'Tuscany Garden Wedding', location: 'Florence, Italy', year: '2025', cat: 'Wedding', size: 'small', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=85' },
  { id: 3, title: 'Bali Cliff Ceremony', location: 'Uluwatu, Bali', year: '2024', cat: 'Wedding', size: 'small', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=85' },
  { id: 4, title: 'The Paris Proposal', location: 'Paris, France', year: '2024', cat: 'Wedding', size: 'small', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=85' },
  { id: 5, title: 'Maldives Barefoot Wedding', location: 'Male, Maldives', year: '2024', cat: 'Wedding', size: 'large', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900&q=85' },
  // Corporate
  { id: 6, title: 'Azure Annual Summit', location: 'Marina Bay, Singapore', year: '2025', cat: 'Corporate', size: 'large', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85' },
  { id: 7, title: 'Global Leadership Forum', location: 'Dubai, UAE', year: '2025', cat: 'Corporate', size: 'small', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85' },
  { id: 8, title: 'Tech Vision Conference', location: 'Jakarta, Indonesia', year: '2024', cat: 'Corporate', size: 'small', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=700&q=85' },
  // Private
  { id: 9, title: 'Midnight Garden Soirée', location: 'Ubud, Bali', year: '2025', cat: 'Private', size: 'large', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85' },
  { id: 10, title: 'Silver Anniversary', location: 'Amalfi Coast, Italy', year: '2024', cat: 'Private', size: 'small', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=700&q=85' },
  { id: 11, title: 'Rooftop Birthday Gala', location: 'New York, USA', year: '2024', cat: 'Private', size: 'small', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85' },
];

export function Portfolio() {
  const [active, setActive] = useState('All');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'All' ? GALLERY : GALLERY.filter(g => g.cat === active);

  return (
    <div className="lumiere-root" style={{ overflowY: 'auto', height: '100vh' }}>
      <div style={{ overflowY: 'auto', height: '100%' }}>

        {/* NAV */}
        <nav className="lumiere-nav" style={{ position: 'sticky', top: 0 }}>
          <a href="#" className="lumiere-logo">LUMI<span>È</span>RE</a>
          <ul className="lumiere-nav-links">
            {['Home', 'Portfolio', 'Blog', 'Career', 'Contact'].map(l => (
              <li key={l}><a href="#" className={l === 'Portfolio' ? 'active' : ''}>{l}</a></li>
            ))}
          </ul>
          <a href="#contact" className="lumiere-btn lumiere-btn-dark" style={{ padding: '10px 24px', fontSize: '10px' }}>Get In Touch</a>
        </nav>

        {/* HERO */}
        <section style={{
          padding: '80px 60px 60px',
          borderBottom: '1px solid var(--color-mid-grey)',
        }}>
          <p className="section-label">Our Work</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h1 style={{ fontSize: 64, fontWeight: 200, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Portfolio
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-mid)', maxWidth: 380, textAlign: 'right' }}>
              A curated collection of our finest events — each one a testament to meticulous craft and creative vision.
            </p>
          </div>
        </section>

        {/* FILTER */}
        <section style={{ padding: '40px 60px 0', display: 'flex', gap: 0, borderBottom: '1px solid var(--color-mid-grey)' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: 'none',
                border: 'none',
                padding: '16px 32px',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                color: active === cat ? 'var(--color-text-dark)' : 'var(--color-text-light)',
                borderBottom: active === cat ? '2px solid var(--color-text-dark)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                fontFamily: 'var(--font-proxima)',
              }}
            >
              {cat}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', paddingRight: 0 }}>
            <span style={{ fontSize: 11, color: 'var(--color-text-light)', letterSpacing: '0.1em' }}>
              {filtered.length} projects
            </span>
          </div>
        </section>

        {/* GALLERY MASONRY */}
        <section style={{ padding: '60px 60px 100px' }}>
          <div style={{
            columns: 3,
            columnGap: 3,
          }}>
            {filtered.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  breakInside: 'avoid',
                  marginBottom: 3,
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    display: 'block',
                    aspectRatio: item.size === 'large' ? '4/3' : '3/4',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: hovered === item.id ? 'scale(1.03)' : 'scale(1)',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,${hovered === item.id ? 0.75 : 0.4}) 0%, transparent 60%)`,
                  transition: 'background 0.3s',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: '28px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                    {item.cat} · {item.year}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 300, color: '#fff', lineHeight: 1.3, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>{item.location}</div>
                  {hovered === item.id && (
                    <div style={{ marginTop: 16 }}>
                      <span className="arrow-link" style={{ color: '#fff', fontSize: 10 }}>View Project</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: 'var(--color-off-white)',
          padding: '80px 60px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid var(--color-mid-grey)',
        }}>
          <div>
            <p className="section-label">Work With Us</p>
            <h2 style={{ fontSize: 40, fontWeight: 200, margin: 0, letterSpacing: '-0.01em' }}>
              Planning your next event?
            </h2>
          </div>
          <a href="#contact" className="lumiere-btn lumiere-btn-dark">Request a Proposal</a>
        </section>

        {/* FOOTER */}
        <footer className="lumiere-footer">
          <div className="lumiere-footer-grid">
            <div>
              <div className="lumiere-footer-brand">LUMI<span style={{ fontWeight: 600 }}>È</span>RE</div>
              <p className="lumiere-footer-desc">A boutique event production house creating extraordinary experiences for discerning clients worldwide.</p>
            </div>
            <div className="lumiere-footer-col"><h4>Services</h4><ul><li><a href="#">Wedding</a></li><li><a href="#">Corporate</a></li><li><a href="#">Private</a></li></ul></div>
            <div className="lumiere-footer-col"><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Portfolio</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li></ul></div>
            <div className="lumiere-footer-col"><h4>Contact</h4><ul><li><a href="#">hello@lumiere-events.com</a></li><li><a href="#">Instagram</a></li><li><a href="#">LinkedIn</a></li></ul></div>
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
