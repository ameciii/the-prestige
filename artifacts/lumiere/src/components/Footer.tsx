import { useState } from 'react';
import { Link } from 'wouter';

export function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      {/* Top columns */}
      <div className="lm-grid-footer lm-pad-h" style={{ paddingTop: 60, paddingBottom: 50, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 28, color: 'hsl(35 10% 14%)' }}>
            LUMIÈRE
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.9, color: 'rgba(0,0,0,0.44)', margin: 0, maxWidth: 220 }}>
            A boutique event production house creating extraordinary experiences for discerning clients worldwide.
          </p>
        </div>
        <FooterCol title="Services" items={[
          { label: 'Wedding Events', href: '/portfolio' },
          { label: 'Corporate Events', href: '/portfolio' },
          { label: 'Private Events', href: '/portfolio' },
          { label: 'Destination Events', href: '/portfolio' },
        ]} />
        <FooterCol title="Social Media" items={[
          { label: 'Instagram', href: '#', ext: true },
          { label: 'LinkedIn', href: '#', ext: true },
          { label: 'Pinterest', href: '#', ext: true },
        ]} />
        <FooterCol title="Contact" items={[
          { label: 'hello@lumiere-events.com', href: 'mailto:hello@lumiere-events.com', ext: true },
          { label: '+62 21 5050 1234', href: 'tel:+622150501234', ext: true },
          { label: 'Jakarta, Indonesia', href: '#' },
        ]} />
      </div>

      {/* Inline contact / form row */}
      <div className="lm-footer-row lm-pad-h" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.38)', flexShrink: 0 }}>
          CONTACT
        </span>
        <input
          type="text"
          placeholder="NAME"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{
            flex: 1, border: 'none', borderBottom: '1px solid rgba(0,0,0,0.12)',
            padding: '8px 0', fontSize: 11, letterSpacing: '0.18em',
            outline: 'none', background: 'transparent', fontFamily: "'Nunito Sans', sans-serif",
            color: 'hsl(35 10% 14%)', textTransform: 'uppercase',
          }}
        />
        <input
          type="email"
          placeholder="EMAIL"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            flex: 1, border: 'none', borderBottom: '1px solid rgba(0,0,0,0.12)',
            padding: '8px 0', fontSize: 11, letterSpacing: '0.18em',
            outline: 'none', background: 'transparent', fontFamily: "'Nunito Sans', sans-serif",
            color: 'hsl(35 10% 14%)', textTransform: 'uppercase',
          }}
        />
        <button
          onClick={() => { if (name && email) { alert('Thank you! We\'ll be in touch.'); setName(''); setEmail(''); } }}
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 9.5, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase',
            padding: '10px 22px', background: 'hsl(35 10% 14%)', color: '#fff',
            border: 'none', cursor: 'pointer', flexShrink: 0,
          }}
        >
          Send →
        </button>
      </div>

      {/* Bottom bar */}
      <div className="lm-pad-h" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
          © 2025 LUMIÈRE. All Rights Reserved.
        </span>
        <span style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
          Privacy Policy
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string; ext?: boolean }[] }) {
  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 20 }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(item => (
          <li key={item.label} style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {item.ext ? (
              <a href={item.href} style={{ fontSize: 11.5, color: 'rgba(0,0,0,0.62)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                {item.label}
              </a>
            ) : (
              <Link href={item.href} style={{ fontSize: 11.5, color: 'rgba(0,0,0,0.62)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                {item.label}
              </Link>
            )}
            <span style={{ color: 'rgba(0,0,0,0.3)', fontSize: 11 }}>→</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
