import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

interface NavProps {
  onContactClick?: () => void;
  transparent?: boolean;
}

export function Nav({ onContactClick, transparent = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const isLight = transparent && !scrolled;

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 40px',
      background: isLight ? 'transparent' : 'rgba(255,255,255,0.97)',
      backdropFilter: isLight ? 'none' : 'blur(12px)',
      borderBottom: isLight ? 'none' : `1px solid ${scrolled ? 'rgba(0,0,0,0.08)' : 'transparent'}`,
      transition: 'background 0.35s, border-color 0.35s',
    }}>
      {/* LOGO */}
      <Link href="/" style={{
        fontFamily: "'Nunito Sans', sans-serif",
        fontSize: 17,
        fontWeight: 800,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: isLight ? '#fff' : 'hsl(35 10% 14%)',
        textDecoration: 'none',
        transition: 'color 0.3s',
      }}>
        LUMIÈRE
      </Link>

      {/* LINKS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
        ].map(l => {
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
    </nav>
  );
}
