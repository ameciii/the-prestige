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
    { label: 'About Us', href: '/#about' },
    { label: 'Our Services', href: '/#services' },
    { label: 'Project Showcase', href: '/#portfolio' },
    { label: 'Testimonial', href: '/#testimonial' },
  ];

  const linkColor = isLight ? 'rgba(255,255,255,0.82)' : 'hsl(35 5% 42%)';
  const activeLinkColor = isLight ? '#fff' : 'hsl(35 10% 14%)';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center',
        paddingTop: 18, paddingBottom: 18,
        paddingLeft: 36, paddingRight: 36,
        background: isLight ? 'transparent' : 'rgba(255,255,255,0.97)',
        backdropFilter: isLight ? 'none' : 'blur(12px)',
        borderBottom: isLight ? 'none' : `1px solid ${scrolled ? 'rgba(0,0,0,0.08)' : 'transparent'}`,
        transition: 'background 0.35s, border-color 0.35s',
      }}>
        {/* LOGO — left */}
        <Link href="/" onClick={() => setMenuOpen(false)} style={{
          textDecoration: 'none', zIndex: 101, flex: '0 0 auto',
          lineHeight: 1,
        }}>
          <div style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 14, fontWeight: 800, letterSpacing: '0.26em',
            textTransform: 'uppercase',
            color: isLight ? '#fff' : 'hsl(35 10% 14%)',
            transition: 'color 0.3s',
          }}>
            LUMIÈRE
          </div>
          <div style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 7.5, fontWeight: 600, letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.35)',
            marginTop: 3, transition: 'color 0.3s',
          }}>
            Event Organizer
          </div>
        </Link>

        {/* CENTERED LINKS — desktop only */}
        <div className="lm-nav-links-desktop" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 28,
        }}>
          {navLinks.map(l => {
            const active = location === l.href || (l.href === '/' && location === '/');
            return (
              <a key={l.label} href={l.href} onClick={e => {
                if (l.href.includes('#')) {
                  e.preventDefault();
                  const id = l.href.split('#')[1];
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }
              }} style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: 9, fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: active ? activeLinkColor : linkColor,
                textDecoration: active ? 'underline' : 'none',
                textUnderlineOffset: 4,
                textDecorationColor: 'currentColor',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}>
                {l.label}
              </a>
            );
          })}
        </div>

        {/* INQUIRE NOW — right */}
        <div className="lm-nav-links-desktop" style={{ marginLeft: 'auto', flex: '0 0 auto' }}>
          <button onClick={handleContact} style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 9, fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: isLight ? '#fff' : 'hsl(35 10% 14%)',
            background: 'none',
            padding: '7px 18px',
            border: `1px solid ${isLight ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.3)'}`,
            cursor: 'pointer',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
          }}>
            Inquire Now
          </button>
        </div>

        {/* HAMBURGER — mobile only */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, zIndex: 101, marginLeft: 'auto',
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
          <a
            key={l.label}
            href={l.href}
            onClick={e => {
              setMenuOpen(false);
              if (l.href.includes('#')) {
                e.preventDefault();
                setTimeout(() => {
                  const id = l.href.split('#')[1];
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }
            }}
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: 26, fontWeight: 200, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'hsl(35 10% 14%)',
              textDecoration: 'none',
            }}
          >
            {l.label}
          </a>
        ))}
        <button
          onClick={handleContact}
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 26, fontWeight: 200, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'hsl(35 10% 14%)',
            background: 'none', border: 'none', cursor: 'pointer',
          }}
        >
          Inquire Now
        </button>
        <div style={{ width: '100%', height: 1, background: 'rgba(0,0,0,0.08)', margin: '8px 0' }} />
        <div style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
          hello@lumiere-events.com
        </div>
      </div>
    </>
  );
}
