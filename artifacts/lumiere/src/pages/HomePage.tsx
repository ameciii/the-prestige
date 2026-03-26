import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

/* ─── DATA ─────────────────────────────────────────────────────── */
const STATS = [
  { value: '12+', label: 'Years of Excellence' },
  { value: '800+', label: 'Events Crafted' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const SERVICES = [
  {
    num: '01', title: 'Wedding Events', icon: '♢',
    desc: 'From intimate garden ceremonies to grand ballroom receptions — we orchestrate every detail of your most important day with precision and grace.',
    highlights: ['Venue scouting & negotiation', 'Floral & décor design', 'Catering & entertainment coordination', 'On-the-day management'],
  },
  {
    num: '02', title: 'Corporate Events', icon: '◈',
    desc: 'Conferences, product launches, annual galas, and brand activations — we transform your corporate vision into immersive, high-impact experiences.',
    highlights: ['Full A/V & tech production', 'Guest & RSVP management', 'Keynote & stage design', 'Post-event reporting'],
  },
  {
    num: '03', title: 'Private Celebrations', icon: '◉',
    desc: 'Milestone birthdays, anniversaries, intimate soirées — your private celebration, crafted to reflect exactly who you are.',
    highlights: ['Concept & theme development', 'Bespoke menu curation', 'Entertainment & live music', 'Destination events worldwide'],
  },
];

const ADVANTAGES = [
  { icon: '✦', title: 'International Reach', desc: 'Our network spans 40+ countries — wherever your vision takes you, we are already there.' },
  { icon: '✦', title: 'Dedicated Team', desc: 'A single point of contact from first call to final farewell. Your producer owns the entire experience.' },
  { icon: '✦', title: 'Vetted Partners', desc: 'Decades of relationships with the world\'s finest venues, florists, chefs, and entertainers.' },
  { icon: '✦', title: 'Transparent Pricing', desc: 'No hidden fees. Detailed proposals, milestone billing, and full financial accountability.' },
];

const PORTFOLIO = [
  { id: 1, title: 'The Santorini Affair', location: 'Santorini, Greece', year: '2025', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85', wide: true },
  { id: 2, title: 'Tuscany Garden Wedding', location: 'Florence, Italy', year: '2025', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=85', wide: false },
  { id: 3, title: 'Bali Cliff Ceremony', location: 'Uluwatu, Bali', year: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=85', wide: false },
  { id: 4, title: 'Azure Corporate Summit', location: 'Singapore', year: '2025', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=85', wide: true },
  { id: 5, title: 'Global Leadership Forum', location: 'Dubai, UAE', year: '2025', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85', wide: false },
  { id: 6, title: 'Tech Vision Conference', location: 'Jakarta, Indonesia', year: '2024', cat: 'Corporate', img: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=700&q=85', wide: false },
  { id: 7, title: 'Midnight Garden Soirée', location: 'Ubud, Bali', year: '2025', cat: 'Private', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85', wide: true },
  { id: 8, title: 'Rooftop Birthday Gala', location: 'New York, USA', year: '2024', cat: 'Private', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85', wide: false },
  { id: 9, title: 'Maldives Barefoot Wedding', location: 'Malé, Maldives', year: '2024', cat: 'Wedding', img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=700&q=85', wide: false },
];

const CATS = ['All', 'Wedding', 'Corporate', 'Private'];

/* ─── COMPONENT ────────────────────────────────────────────────── */
export default function HomePage() {
  const [activeCat, setActiveCat] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  const filtered = activeCat === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === activeCat);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleCatChange(cat: string) {
    setActiveCat(cat);
    setVisibleCount(6);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Nav onContactClick={scrollToContact} />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section id="hero" style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=90)',
          backgroundSize: 'cover', backgroundPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.58) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 60px 90px', color: '#fff', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 40 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 22, marginTop: 0 }}>
                Event Design & Production
              </p>
              <h1 style={{ fontSize: 'clamp(52px, 6vw, 82px)', fontWeight: 200, lineHeight: 1.04, letterSpacing: '-0.01em', margin: '0 0 28px', maxWidth: 700 }}>
                Where Moments<br />Become<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>Extraordinary</em>
              </h1>
              <div style={{ display: 'flex', gap: 14 }}>
                <button onClick={scrollToContact} className="lm-btn lm-btn-white">Plan Your Event</button>
                <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="lm-btn lm-btn-outline-white">
                  View Portfolio
                </button>
              </div>
            </div>
            <div style={{ maxWidth: 320, textAlign: 'right' }}>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.70)', margin: 0 }}>
                A boutique event production house crafting bespoke experiences for discerning clients across the globe.
              </p>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 50, background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────── */}
      <section style={{ background: 'hsl(35 10% 16%)', padding: '46px 60px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {STATS.map((s, i) => (
          <div key={s.value} style={{ textAlign: 'center', padding: '14px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.09)' : 'none' }}>
            <div style={{ fontSize: 40, fontWeight: 200, color: '#fff', letterSpacing: '-0.02em', marginBottom: 6 }}>{s.value}</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.36)' }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── 2. ABOUT ────────────────────────────────────────────── */}
      <section id="about" style={{ padding: '120px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=85"
            alt="Elegant event"
            style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', bottom: -28, right: -28, background: 'hsl(35 10% 16%)', padding: '28px 34px', color: '#fff' }}>
            <div style={{ fontSize: 38, fontWeight: 200, letterSpacing: '-0.02em', marginBottom: 4 }}>2012</div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>Est.</div>
          </div>
        </div>
        <div>
          <span className="section-label">About LUMIÈRE</span>
          <h2 style={{ fontSize: 'clamp(32px, 3.2vw, 46px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 28px' }}>
            Crafting experiences<br />that transcend the<br />ordinary
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'hsl(35 5% 42%)', marginBottom: 18, marginTop: 0 }}>
            Founded on the belief that every event is a once-in-a-lifetime story, LUMIÈRE brings together the finest talent in design, logistics, and hospitality to create moments of breathtaking beauty.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.9, color: 'hsl(35 5% 42%)', marginBottom: 44, marginTop: 0 }}>
            With over a decade of international experience — from intimate Tuscan weddings to large-scale corporate galas in Singapore — we are your trusted partner in turning vision into reality.
          </p>
          {/* Advantages */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px 32px' }}>
            {ADVANTAGES.map(a => (
              <div key={a.title}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: 'hsl(35 10% 16%)', marginBottom: 6 }}>
                  {a.icon} {a.title}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.75, color: 'hsl(35 5% 52%)' }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ─────────────────────────────────────────── */}
      <section id="services" style={{ background: 'hsl(40 20% 97%)', padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 70, flexWrap: 'wrap', gap: 28 }}>
          <div>
            <span className="section-label">What We Do</span>
            <h2 style={{ fontSize: 'clamp(30px, 3vw, 44px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0, maxWidth: 360 }}>
              Services tailored<br />to every occasion
            </h2>
          </div>
          <button onClick={scrollToContact} className="lm-btn lm-btn-dark" style={{ alignSelf: 'flex-end' }}>Start Planning</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}>
          {SERVICES.map(s => (
            <div key={s.num} style={{ background: '#fff', padding: '48px 40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', color: 'hsl(35 5% 60%)' }}>{s.num}</span>
                <span style={{ fontSize: 22, color: 'hsl(35 5% 72%)' }}>{s.icon}</span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 300, marginBottom: 14, letterSpacing: '-0.01em', marginTop: 0 }}>{s.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'hsl(35 5% 42%)', marginBottom: 28, marginTop: 0, flexGrow: 1 }}>{s.desc}</p>
              <ul style={{ margin: '0 0 32px', padding: 0, listStyle: 'none' }}>
                {s.highlights.map(h => (
                  <li key={h} style={{ fontSize: 12.5, color: 'hsl(35 5% 50%)', paddingLeft: 16, position: 'relative', marginBottom: 7, lineHeight: 1.6 }}>
                    <span style={{ position: 'absolute', left: 0, color: 'hsl(35 5% 72%)' }}>—</span>
                    {h}
                  </li>
                ))}
              </ul>
              <button onClick={scrollToContact} className="arrow-link" style={{ fontSize: '10px', letterSpacing: '0.22em' }}>Inquire</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. PORTFOLIO ────────────────────────────────────────── */}
      <section id="portfolio" style={{ padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="section-label">Our Work</span>
            <h2 style={{ fontSize: 'clamp(30px, 3vw, 44px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: 0 }}>
              Portfolio
            </h2>
          </div>
          <p style={{ fontSize: 14, color: 'hsl(35 5% 52%)', lineHeight: 1.75, maxWidth: 360, margin: 0, textAlign: 'right' }}>
            A curated selection of events we've had the privilege to design and produce.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid hsl(40 10% 88%)', marginBottom: 44 }}>
          {CATS.map(cat => (
            <button
              key={cat}
              onClick={() => handleCatChange(cat)}
              style={{
                background: 'none', border: 'none',
                padding: '14px 26px',
                fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer',
                color: activeCat === cat ? 'hsl(35 10% 16%)' : 'hsl(35 5% 58%)',
                borderBottom: activeCat === cat ? '2px solid hsl(35 10% 16%)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', paddingRight: 4 }}>
            <span style={{ fontSize: 11, color: 'hsl(35 5% 60%)', letterSpacing: '0.08em' }}>{filtered.length} projects</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {visible.map((p, idx) => {
            const isWide = p.wide && idx % 3 === 0;
            return (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: 'relative', overflow: 'hidden', cursor: 'pointer',
                  gridColumn: isWide ? 'span 2' : 'span 1',
                }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: '100%', display: 'block',
                    aspectRatio: isWide ? '16/9' : '1/1',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    transform: hoveredId === p.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,${hoveredId === p.id ? 0.72 : 0.40}) 0%, transparent 55%)`,
                  transition: 'background 0.3s',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px 28px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 6 }}>
                    {p.cat} · {p.year}
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 300, color: '#fff', lineHeight: 1.3, marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.44)', fontStyle: 'italic' }}>{p.location}</div>
                  {hoveredId === p.id && (
                    <div style={{ marginTop: 12 }}>
                      <span className="arrow-link arrow-link-white" style={{ fontSize: '9px', letterSpacing: '0.2em' }}>View Project</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* See More / View All */}
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center', gap: 16 }}>
          {hasMore ? (
            <button
              onClick={() => setVisibleCount(v => v + 3)}
              className="lm-btn lm-btn-outline"
            >
              See More
            </button>
          ) : (
            <Link href="/portfolio" className="lm-btn lm-btn-dark">
              View Full Portfolio →
            </Link>
          )}
        </div>
      </section>

      {/* ── 5. CONTACT / INQUIRY FORM ───────────────────────────── */}
      <section id="contact" ref={contactRef} style={{ background: 'hsl(40 20% 97%)', padding: '100px 60px', borderTop: '1px solid hsl(40 10% 88%)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100, alignItems: 'flex-start' }}>

          {/* Left: copy */}
          <div>
            <span className="section-label">Get In Touch</span>
            <h2 style={{ fontSize: 'clamp(30px, 3.2vw, 46px)', fontWeight: 200, lineHeight: 1.2, letterSpacing: '-0.01em', margin: '0 0 22px' }}>
              Let's plan your<br />next event
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.9, color: 'hsl(35 5% 42%)', marginBottom: 50, marginTop: 0 }}>
              Tell us about your vision. Our team will reach out within 24 hours to discuss how we can bring your event to life.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {[
                { label: 'Email', val: 'hello@lumiere-events.com' },
                { label: 'Phone', val: '+62 21 5050 1234' },
                { label: 'Office', val: 'Jakarta, Indonesia' },
              ].map(c => (
                <div key={c.label}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'hsl(35 5% 60%)', marginBottom: 6 }}>{c.label}</div>
                  <div style={{ fontSize: 15, color: 'hsl(35 10% 16%)' }}>{c.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: '#fff', padding: '52px 48px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: 32, marginBottom: 18 }}>✦</div>
                <h3 style={{ fontSize: 24, fontWeight: 300, margin: '0 0 14px', letterSpacing: '-0.01em' }}>Thank you</h3>
                <p style={{ fontSize: 14, color: 'hsl(35 5% 48%)', lineHeight: 1.8, margin: 0 }}>
                  We've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Full Name *" type="text" placeholder="Your name" value={form.name}
                    onChange={v => setForm(f => ({ ...f, name: v }))} required />
                  <Field label="Email Address *" type="email" placeholder="your@email.com" value={form.email}
                    onChange={v => setForm(f => ({ ...f, email: v }))} required />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="Phone Number" type="tel" placeholder="+62 8xx xxxx xxxx" value={form.phone}
                    onChange={v => setForm(f => ({ ...f, phone: v }))} />
                  <div>
                    <label style={labelStyle}>Event Type</label>
                    <select
                      value={form.eventType}
                      onChange={e => setForm(f => ({ ...f, eventType: e.target.value }))}
                      style={{ ...inputStyle, color: form.eventType ? 'hsl(35 10% 16%)' : 'hsl(35 5% 60%)' }}
                    >
                      <option value="">Select type</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Private Celebration</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <Field label="Event Date" type="date" placeholder="" value={form.date}
                  onChange={v => setForm(f => ({ ...f, date: v }))} />
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your vision — venue ideas, guest count, any special requests…"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  />
                </div>
                <button type="submit" className="lm-btn lm-btn-dark" style={{ marginTop: 8, justifyContent: 'center' }}>
                  Send Inquiry →
                </button>
                <p style={{ fontSize: 11, color: 'hsl(35 5% 60%)', margin: 0, lineHeight: 1.7 }}>
                  We'll respond within 24 hours. For urgent matters, please call us directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── HELPERS ──────────────────────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'hsl(35 5% 58%)',
  marginBottom: 8,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1px solid hsl(40 10% 88%)',
  padding: '12px 16px',
  fontSize: 14,
  outline: 'none',
  background: '#fff',
  fontFamily: "'Nunito Sans', sans-serif",
  color: 'hsl(35 10% 16%)',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

function Field({
  label, type, placeholder, value, onChange, required,
}: {
  label: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        style={inputStyle}
        onFocus={e => (e.currentTarget.style.borderColor = 'hsl(35 10% 36%)')}
        onBlur={e => (e.currentTarget.style.borderColor = 'hsl(40 10% 88%)')}
      />
    </div>
  );
}
