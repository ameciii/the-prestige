import { Link } from 'wouter';

export function Footer() {
  return (
    <footer style={{
      background: 'hsl(35 10% 16%)',
      color: 'hsl(40 20% 97%)',
      padding: '80px 60px 40px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '60px',
        marginBottom: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '60px',
      }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 300, letterSpacing: '0.38em', textTransform: 'uppercase', marginBottom: 18 }}>
            LUMI<span style={{ fontWeight: 700 }}>È</span>RE
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(255,255,255,0.48)', maxWidth: 280, margin: 0 }}>
            A boutique event production house creating extraordinary experiences for discerning clients worldwide.
          </p>
        </div>
        <FooterCol title="Services" links={[
          { label: 'Wedding Events', href: '/portfolio' },
          { label: 'Corporate Events', href: '/portfolio' },
          { label: 'Private Events', href: '/portfolio' },
          { label: 'Destination Events', href: '/portfolio' },
        ]} />
        <FooterCol title="Company" links={[
          { label: 'About', href: '/' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Blog', href: '/blog' },
          { label: 'Careers', href: '/career' },
        ]} />
        <FooterCol title="Contact" links={[
          { label: 'hello@lumiere-events.com', href: 'mailto:hello@lumiere-events.com', external: true },
          { label: '+62 21 5050 1234', href: 'tel:+622150501234', external: true },
          { label: 'Instagram', href: '#', external: true },
          { label: 'LinkedIn', href: '#', external: true },
        ]} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.05em' }}>
          © 2025 LUMIÈRE Events. All rights reserved.
        </span>
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)', letterSpacing: '0.05em' }}>
          Privacy Policy · Terms
        </span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 20, marginTop: 0 }}>
        {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map(l => (
          <li key={l.label} style={{ marginBottom: 12 }}>
            {l.external ? (
              <a href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.68)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ) : (
              <Link href={l.href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.68)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
