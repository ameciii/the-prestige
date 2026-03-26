import { Link } from 'wouter';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const SERVICES = [
  { num: '01', title: 'Wedding', desc: 'Intimate ceremonies to grand celebrations — every detail curated with precision and grace.' },
  { num: '02', title: 'Corporate', desc: 'Conferences, galas, and brand experiences that leave lasting impressions.' },
  { num: '03', title: 'Private Events', desc: 'Bespoke gatherings tailored to your vision, wherever in the world.' },
];

const PORTFOLIO_ITEMS = [
  { title: 'The Santorini Affair', category: 'Wedding', year: '2025', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85' },
  { title: 'Azure Corporate Summit', category: 'Corporate', year: '2025', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=85' },
  { title: 'Garden Soirée Bali', category: 'Private', year: '2024', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=85' },
];

const STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '800+', label: 'Events Crafted' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function HomePage() {
  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Nav />

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=90)',
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.55) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 60px 80px', color: '#fff', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 40 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.58)', marginBottom: 20, marginTop: 0 }}>
                Event Design & Production
              </p>
              <h1 style={{ fontSize: 'clamp(52px, 6vw, 80px)', fontWeight: 200, lineHeight: 1.05, letterSpacing: '-0.01em', margin: 0, maxWidth: 700 }}>
                Where Moments<br />Become<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>Extraordinary</em>
              </h1>
            </div>
            <div style={{ maxWidth: 340, textAlign: 'right' }}>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.74)', marginBottom: 28, marginTop: 0 }}>
                A boutique event production house crafting bespoke experiences for discerning clients across the globe.
              </p>
              <Link href="/portfolio" className="arrow-link arrow-link-white" style={{ justifyContent: 'flex-end' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.35)' }} />
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: 'hsl(35 10% 16%)', padding: '44px 60px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map((s, i) => (
          <div key={s.value} style={{ textAlign: 'center', padding: '16px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
            <div style={{ fontSize: 38, fontWeight: 200, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>{s.value}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section style={{ padding: '120px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
        <div>
          <span className="section-label">About LUMIÈRE</span>
          <h2 style={{ fontSize: 'clamp(34px, 3.5vw, 48px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 28px' }}>
            Crafting experiences<br />that transcend the<br />ordinary
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'hsl(35 5% 42%)', marginBottom: 18, marginTop: 0 }}>
            Founded on the belief that every event is a once-in-a-lifetime story, LUMIÈRE brings together the finest talent in design, logistics, and hospitality to create moments of breathtaking beauty.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'hsl(35 5% 42%)', marginBottom: 40, marginTop: 0 }}>
            With over a decade of international experience — from intimate Tuscan weddings to large-scale corporate galas in Singapore — we are your trusted partner in turning vision into reality.
          </p>
          <Link href="/portfolio" className="arrow-link">Explore Our Portfolio</Link>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85"
            alt="Elegant event setup"
            style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: -28, left: -28, background: 'hsl(40 20% 97%)', padding: '22px 30px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'hsl(35 5% 60%)', marginBottom: 6 }}>Est.</div>
            <div style={{ fontSize: 32, fontWeight: 200, letterSpacing: '-0.02em', color: 'hsl(35 10% 16%)' }}>2012</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: 'hsl(40 20% 97%)', padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 80, flexWrap: 'wrap', gap: 32 }}>
          <div>
            <span className="section-label">What We Do</span>
            <h2 style={{ fontSize: 'clamp(32px, 3vw, 46px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0, maxWidth: 380 }}>
              Services tailored<br />to every occasion
            </h2>
          </div>
          <Link href="/portfolio" className="lm-btn lm-btn-dark" style={{ alignSelf: 'flex-end' }}>Start Planning</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {SERVICES.map(s => (
            <div key={s.num} style={{ background: '#fff', padding: '48px 40px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: 'hsl(35 5% 60%)', marginBottom: 32 }}>{s.num}</div>
              <h3 style={{ fontSize: 26, fontWeight: 300, marginBottom: 14, letterSpacing: '-0.01em', marginTop: 0 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'hsl(35 5% 42%)', marginBottom: 32, marginTop: 0 }}>{s.desc}</p>
              <Link href="/portfolio" className="arrow-link" style={{ fontSize: '10px', letterSpacing: '0.22em' }}>Inquire</Link>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="section-label">Selected Work</span>
            <h2 style={{ fontSize: 'clamp(32px, 3vw, 46px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0 }}>
              Recent Events
            </h2>
          </div>
          <Link href="/portfolio" className="arrow-link">See All Projects</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 3 }}>
          {PORTFOLIO_ITEMS.map((p, i) => (
            <Link key={p.title} href="/portfolio" style={{ position: 'relative', overflow: 'hidden', display: 'block', textDecoration: 'none' }}>
              <img
                src={p.img}
                alt={p.title}
                style={{ width: '100%', aspectRatio: i === 0 ? '3/4' : '1/1', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 55%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px' }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.58)', marginBottom: 8 }}>
                  {p.category} · {p.year}
                </div>
                <div style={{ fontSize: 18, fontWeight: 300, color: '#fff', letterSpacing: '-0.01em' }}>{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'hsl(35 10% 16%)', padding: '100px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 48 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)', marginBottom: 20, marginTop: 0 }}>Let's Create Together</p>
          <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 200, color: '#fff', lineHeight: 1.1, margin: 0, letterSpacing: '-0.02em' }}>
            Ready to begin<br />your story?
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Link href="/portfolio" className="lm-btn lm-btn-white">Request a Proposal</Link>
          <Link href="/portfolio" className="lm-btn lm-btn-outline-white">View Portfolio</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
