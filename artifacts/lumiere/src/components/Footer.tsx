import { Link } from 'wouter';

export function Footer() {
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div className="lm-grid-footer lm-pad-h" style={{ paddingTop: 60, paddingBottom: 50, borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: 6, color: 'hsl(35 10% 14%)' }}>
            LUMIÈRE
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 22 }}>
            Event Organizer
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.9, color: 'rgba(0,0,0,0.44)', margin: '0 0 28px', maxWidth: 210 }}>
            Luxury event organizer crafting timeless moments for discerning clients around the world.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <a href="#" aria-label="Instagram" style={{ width: 34, height: 34, border: '1px solid rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'hsl(35 10% 14%)', fontSize: 14 }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="tel:+622150501234" aria-label="Phone" style={{ width: 34, height: 34, border: '1px solid rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'hsl(35 10% 14%)', fontSize: 14 }}>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
          </div>
        </div>
        <FooterCol title="Navigation" items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/' },
          { label: 'Our Services', href: '/' },
          { label: 'Project Showcase', href: '/portfolio' },
          { label: 'Testimonial', href: '/' },
        ]} />
        <FooterCol title="Connect With Us" items={[
          { label: 'Instagram', href: '#', ext: true },
          { label: 'Inquire Here', href: '/#contact', ext: true },
          { label: 'Job & Career', href: '#', ext: true },
        ]} />
      </div>

      <div className="lm-pad-h" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, paddingBottom: 20, flexWrap: 'wrap', gap: 8 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.12em', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
          © 2026 LUMIÈRE. All Rights Reserved.
        </span>
        <span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase' }}>
          Jakarta · Surabaya · Bali · Serving Worldwide
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
          <li key={item.label} style={{ marginBottom: 12 }}>
            {item.ext ? (
              <a href={item.href} style={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                {item.label}
              </a>
            ) : (
              <Link href={item.href} style={{ fontSize: 12, color: 'rgba(0,0,0,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
