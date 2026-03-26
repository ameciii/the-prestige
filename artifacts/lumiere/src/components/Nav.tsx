import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

interface NavProps {
  onContactClick?: () => void;
  transparent?: boolean;
}

export function Nav({ onContactClick, transparent = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isLight = transparent && !scrolled && !menuOpen;

  const handleContact = () => {
    setMenuOpen(false);
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
  ];

  return (
    <>
      <nav className="lm-pad-h" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: 22, paddingBottom: 22,
        background: isLight ? 'transparent' : 'rgba(255,255,255,0.97)',
        backdropFilter: isLight ? 'none' : 'blur(12px)',
        borderBottom: isLight ? 'none' : `1px solid ${scrolled ? 'rgba(0,0,0,0.08)' : 'transparent'}`,
        transition: 'background 0.35s, border-color 0.35s',
      }}>
        {/* LOGO */}
        <Link href="/" onClick={() => setMenuOpen(false)} style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontSize: 17,
          fontWeight: 800,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: isLight ? '#fff' : 'hsl(35 10% 14%)',
          textDecoration: 'none',
          transition: 'color 0.3s',
          zIndex: 101,
        }}>
          LUMIÈRE
        </Link>

        {/* DESKTOP LINKS */}
        <div className="lm-nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {navLinks.map(l => {
            const active = location === l.href;
            return (
              <Link key={l.label} href={l.href} style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: isLight ? (active ? '#fff' : 'rgba(255,255,255,0.65)') : (active ? 'hsl(35 10% 14%)' : 'hsl(35 5% 52%)'),
                textDecoration: 'none',
                padding: '6px 14px',
                border: `1px solid ${isLight ? (active ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.22)') : (active ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.14)')}`,
                transition: 'all 0.2s',
              }}>
                {l.label}
              </Link>
            );
          })}
          <button onClick={handleContact} style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: isLight ? 'rgba(255,255,255,0.65)' : 'hsl(35 5% 52%)',
            background: 'none',
            padding: '6px 14px',
            border: `1px solid ${isLight ? 'rgba(255,255,255,0.22)' : 'rgba(0,0,0,0.14)'}`,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}>
            Contact
          </button>
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, zIndex: 101,
          }}
          className="lm-hamburger"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="4" y1="4" x2="18" y2="18" stroke={isLight ? '#fff' : 'hsl(35 10% 14%)'} strokeWidth="1.5"/>
              <line x1="18" y1="4" x2="4" y2="18" stroke={isLight ? '#fff' : 'hsl(35 10% 14%)'} strokeWidth="1.5"/>
            </svg>
          ) : (
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
              <line x1="0" y1="1" x2="22" y2="1" stroke={isLight ? '#fff' : 'hsl(35 10% 14%)'} strokeWidth="1.5"/>
              <line x1="0" y1="7" x2="22" y2="7" stroke={isLight ? '#fff' : 'hsl(35 10% 14%)'} strokeWidth="1.5"/>
              <line x1="0" y1="13" x2="22" y2="13" stroke={isLight ? '#fff' : 'hsl(35 10% 14%)'} strokeWidth="1.5"/>
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`lm-mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map(l => (
          <Link
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 28, fontWeight: 200, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'hsl(35 10% 14%)',
              textDecoration: 'none',
            }}
          >
            {l.label}
          </Link>
        ))}
        <button
          onClick={handleContact}
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 28, fontWeight: 200, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'hsl(35 10% 14%)',
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          Contact
        </button>
        <div style={{ width: '100%', height: 1, background: 'rgba(0,0,0,0.08)', margin: '8px 0' }} />
        <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
          hello@lumiere-events.com
        </div>
      </div>
    </>
  );
}
