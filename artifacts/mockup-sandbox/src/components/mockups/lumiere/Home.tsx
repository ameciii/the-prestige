import './_group.css';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  { num: '01', title: 'Wedding', desc: 'Intimate ceremonies to grand celebrations — every detail curated with precision and grace.' },
  { num: '02', title: 'Corporate', desc: 'Conferences, galas, and brand experiences that leave lasting impressions.' },
  { num: '03', title: 'Private Events', desc: 'Bespoke gatherings tailored to your vision, wherever in the world.' },
];

const PORTFOLIO_ITEMS = [
  { title: 'The Santorini Wedding', category: 'Wedding', year: '2025', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80' },
  { title: 'Azure Corporate Summit', category: 'Corporate', year: '2025', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80' },
  { title: 'Garden Soirée Bali', category: 'Private', year: '2024', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80' },
];

const STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '800+', label: 'Events Crafted' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.querySelector('.lumiere-scroll-container');
    const handle = () => setScrolled((el?.scrollTop ?? 0) > 20);
    el?.addEventListener('scroll', handle);
    return () => el?.removeEventListener('scroll', handle);
  }, []);

  return (
    <div className="lumiere-root" style={{ overflowY: 'auto', height: '100vh' }}>
      <div className="lumiere-scroll-container" style={{ overflowY: 'auto', height: '100%' }}>

        {/* NAV */}
        <nav className={`lumiere-nav ${scrolled ? 'scrolled' : ''}`} style={{ position: 'sticky', top: 0 }}>
          <a href="#" className="lumiere-logo">LUMI<span>È</span>RE</a>
          <ul className="lumiere-nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.label}>
                <a href={l.href} className={l.active ? 'active' : ''}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="lumiere-btn lumiere-btn-dark" style={{ padding: '10px 24px', fontSize: '10px' }}>
            Get In Touch
          </a>
        </nav>

        {/* HERO */}
        <section style={{
          position: 'relative',
          height: '100vh',
          minHeight: 700,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=90)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
          }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '0 60px 80px', color: '#fff', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
                  Event Design & Production
                </p>
                <h1 style={{
                  fontSize: 72, fontWeight: 200, lineHeight: 1.05,
                  letterSpacing: '-0.01em', margin: 0, maxWidth: 700,
                  fontFamily: 'var(--font-proxima)',
                }}>
                  Where Moments<br />Become<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>Extraordinary</em>
                </h1>
              </div>
              <div style={{ maxWidth: 340, textAlign: 'right' }}>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: 28 }}>
                  A boutique event production house crafting bespoke experiences for discerning clients across the globe.
                </p>
                <a href="#portfolio" className="arrow-link" style={{ color: '#fff', justifyContent: 'flex-end' }}>
                  View Our Work
                </a>
              </div>
            </div>
          </div>
          {/* Scroll indicator */}
          <div style={{
            position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)',
          }}>
            <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.4)', animation: 'none' }} />
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{
          background: 'var(--color-text-dark)',
          padding: '40px 60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {STATS.map((s, i) => (
            <div key={s.value} style={{
              textAlign: 'center',
              padding: '20px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <div style={{ fontSize: 36, fontWeight: 200, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </section>

        {/* ABOUT / INTRO */}
        <section style={{ padding: '120px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
          <div>
            <p className="section-label">About LUMIÈRE</p>
            <h2 style={{ fontSize: 44, fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 30px' }}>
              Crafting experiences<br />that transcend the<br />ordinary
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--color-text-mid)', marginBottom: 20 }}>
              Founded on the belief that every event is a once-in-a-lifetime story, LUMIÈRE brings together the finest talent in design, logistics, and hospitality to create moments of breathtaking beauty.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--color-text-mid)', marginBottom: 40 }}>
              With over a decade of international experience — from intimate Tuscan weddings to large-scale corporate galas in Singapore — we are your trusted partner in turning vision into reality.
            </p>
            <a href="#portfolio" className="arrow-link">Explore Our Portfolio</a>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
              alt="Event setup"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: -30, left: -30,
              background: 'var(--color-off-white)',
              padding: '24px 32px',
              maxWidth: 200,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: 8 }}>Est.</div>
              <div style={{ fontSize: 32, fontWeight: 200, letterSpacing: '-0.02em' }}>2012</div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ background: 'var(--color-off-white)', padding: '100px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 80 }}>
            <div>
              <p className="section-label">What We Do</p>
              <h2 style={{ fontSize: 44, fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0, maxWidth: 380 }}>
                Services tailored<br />to every occasion
              </h2>
            </div>
            <a href="#contact" className="lumiere-btn lumiere-btn-dark" style={{ alignSelf: 'flex-end' }}>
              Start Planning
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {SERVICES.map((s) => (
              <div key={s.num} style={{ background: '#fff', padding: '48px 40px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', color: 'var(--color-text-light)', marginBottom: 32 }}>{s.num}</div>
                <h3 style={{ fontSize: 26, fontWeight: 300, marginBottom: 16, letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-mid)', marginBottom: 32 }}>{s.desc}</p>
                <a href="#contact" className="arrow-link" style={{ fontSize: '10px', letterSpacing: '0.2em' }}>Inquire</a>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO PREVIEW */}
        <section id="portfolio" style={{ padding: '100px 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60 }}>
            <div>
              <p className="section-label">Selected Work</p>
              <h2 style={{ fontSize: 44, fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0 }}>
                Recent Events
              </h2>
            </div>
            <a href="#portfolio" className="arrow-link">See All Projects</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 3 }}>
            {PORTFOLIO_ITEMS.map((p, i) => (
              <div key={p.title} style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%',
                    aspectRatio: i === 0 ? '3/4' : '1/1',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                  padding: '28px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>
                    {p.category} · {p.year}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 300, color: '#fff', letterSpacing: '-0.01em' }}>{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section style={{
          background: 'var(--color-text-dark)',
          padding: '100px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
              Let's Create Together
            </p>
            <h2 style={{ fontSize: 52, fontWeight: 200, color: '#fff', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}>
              Ready to begin<br />your story?
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <a href="#contact" className="lumiere-btn" style={{ background: '#fff', color: 'var(--color-text-dark)' }}>
              Request a Proposal
            </a>
            <a href="#portfolio" className="lumiere-btn lumiere-btn-outline-white">
              View Portfolio
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lumiere-footer">
          <div className="lumiere-footer-grid">
            <div>
              <div className="lumiere-footer-brand">LUMI<span style={{ fontWeight: 600 }}>È</span>RE</div>
              <p className="lumiere-footer-desc">
                A boutique event production house creating extraordinary experiences for discerning clients worldwide.
              </p>
            </div>
            <div className="lumiere-footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Wedding Events</a></li>
                <li><a href="#">Corporate Events</a></li>
                <li><a href="#">Private Events</a></li>
                <li><a href="#">Destination Events</a></li>
              </ul>
            </div>
            <div className="lumiere-footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="lumiere-footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">hello@lumiere-events.com</a></li>
                <li><a href="#">+62 21 5050 1234</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
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
