import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Career', href: '/career' },
];

interface NavProps {
  onContactClick?: () => void;
}

export function Nav({ onContactClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`lm-nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="lm-logo">
        LUMI<span style={{ fontWeight: 700 }}>È</span>RE
      </Link>
      <ul className="lm-nav-links">
        {LINKS.map(l => (
          <li key={l.label}>
            <Link href={l.href} className={location === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleContact} className="lm-btn lm-btn-dark" style={{ padding: '10px 22px', fontSize: '10px' }}>
        Get In Touch
      </button>
    </nav>
  );
}
