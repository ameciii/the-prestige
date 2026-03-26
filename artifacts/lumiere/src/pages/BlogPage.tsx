import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Private', 'Behind the Scenes'];

const FEATURED = {
  title: 'The Art of the First Look: How We Orchestrate Unforgettable Moments',
  excerpt: "From the soft morning light filtering through a Tuscan vineyard to the quiet hush before two people meet eyes for the first time — the first look is the emotional anchor of every wedding. Here's how we craft it.",
  category: 'Wedding',
  date: 'March 18, 2025',
  author: 'Sophie Lestari',
  readTime: '7 min read',
  img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1400&q=90',
};

const ARTICLES = [
  {
    id: 2,
    title: 'Inside the Azure Summit: 3 Days, 1,200 Guests, Zero Compromises',
    excerpt: 'When Azure asked us to transform Marina Bay Sands into an immersive leadership experience, we had 90 days and a vision for something unprecedented.',
    category: 'Corporate',
    date: 'February 28, 2025',
    author: 'Marcus Tan',
    readTime: '9 min read',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=85',
  },
  {
    id: 3,
    title: 'Midnight in Ubud: Documenting the Garden Soirée',
    excerpt: "An evening under the stars in Bali's cultural heart — where firelight, gamelan music, and a tropical garden became the backdrop for a private celebration unlike any other.",
    category: 'Private',
    date: 'February 10, 2025',
    author: 'Ariana Costa',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=85',
  },
  {
    id: 4,
    title: 'How We Build a Wedding Timeline That Actually Works',
    excerpt: "The secret to a seamless wedding day isn't luck — it's meticulous planning. We break down our proprietary timeline methodology.",
    category: 'Behind the Scenes',
    date: 'January 22, 2025',
    author: 'Sophie Lestari',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=85',
  },
  {
    id: 5,
    title: 'Santorini: A Love Letter to the Most Photographed Wedding Destination',
    excerpt: "White-washed walls, cerulean domes, and sunsets that stop time — we've hosted 14 weddings in Santorini and fall in love with it every single time.",
    category: 'Wedding',
    date: 'January 5, 2025',
    author: 'Ariana Costa',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=85',
  },
  {
    id: 6,
    title: "Corporate Events That Don't Feel Corporate",
    excerpt: 'The modern workforce expects more than a conference room and a PowerPoint. Five principles for designing corporate events that inspire.',
    category: 'Corporate',
    date: 'December 14, 2024',
    author: 'Marcus Tan',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85',
  },
  {
    id: 7,
    title: 'Behind the Flowers: Our Approach to Floral Design',
    excerpt: "Flowers aren't decoration — they are the language of an event's soul. A behind-the-scenes look at how we approach floral storytelling.",
    category: 'Behind the Scenes',
    date: 'November 30, 2024',
    author: 'Sophie Lestari',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=700&q=85',
  },
];

export default function BlogPage() {
  const [active, setActive] = useState('All');
  const [email, setEmail] = useState('');

  const filtered = active === 'All' ? ARTICLES : ARTICLES.filter(a => a.category === active);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      <Nav />
      <div style={{ paddingTop: 80 }}>

        {/* PAGE HEADER */}
        <section style={{ padding: '60px 60px 50px', borderBottom: '1px solid hsl(40 10% 88%)' }}>
          <span className="section-label">Stories & Insights</span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h1 style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 200, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Journal
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'hsl(35 5% 42%)', maxWidth: 380, textAlign: 'right', margin: 0 }}>
              Behind-the-scenes documentation, event recaps, and inspiration from the world of luxury event design.
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section style={{ position: 'relative', cursor: 'pointer' }}>
          <img
            src={FEATURED.img}
            alt={FEATURED.title}
            style={{ width: '100%', height: 560, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.76) 38%, rgba(0,0,0,0.08) 100%)',
            display: 'flex', alignItems: 'center', padding: '60px',
          }}>
            <div style={{ maxWidth: 580 }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 22 }}>
                <span style={{ background: 'rgba(255,255,255,0.14)', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '5px 12px', backdropFilter: 'blur(4px)' }}>
                  {FEATURED.category}
                </span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.48)' }}>Featured</span>
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 2.8vw, 38px)', fontWeight: 300, color: '#fff', lineHeight: 1.25, marginBottom: 18, marginTop: 0, letterSpacing: '-0.01em' }}>
                {FEATURED.title}
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(255,255,255,0.68)', marginBottom: 30, marginTop: 0 }}>
                {FEATURED.excerpt}
              </p>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <span className="arrow-link arrow-link-white">Read Article</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)' }}>{FEATURED.date} · {FEATURED.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section style={{ padding: '0 60px', borderBottom: '1px solid hsl(40 10% 88%)', display: 'flex', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                background: 'none', border: 'none',
                padding: '18px 26px',
                fontSize: 10.5, fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer',
                color: active === cat ? 'hsl(35 10% 16%)' : 'hsl(35 5% 60%)',
                borderBottom: active === cat ? '2px solid hsl(35 10% 16%)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                fontFamily: "'Nunito Sans', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ARTICLE GRID */}
        <section style={{ padding: '60px 60px 100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48 }}>
            {filtered.map(article => (
              <article key={article.id} style={{ cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', marginBottom: 22 }}>
                  <img
                    src={article.img}
                    alt={article.title}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.45s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'hsl(35 5% 60%)', border: '1px solid hsl(40 10% 88%)', padding: '4px 10px' }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: 11, color: 'hsl(35 5% 60%)' }}>{article.readTime}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 300, lineHeight: 1.3, marginBottom: 12, letterSpacing: '-0.01em', color: 'hsl(35 10% 16%)', marginTop: 0 }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: 'hsl(35 5% 42%)', marginBottom: 20, marginTop: 0 }}>
                  {article.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid hsl(40 10% 88%)', paddingTop: 16 }}>
                  <span style={{ fontSize: 11, color: 'hsl(35 5% 60%)' }}>{article.date} · {article.author}</span>
                  <span className="arrow-link" style={{ fontSize: '9px' }}>Read</span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'hsl(35 5% 60%)' }}>
              <p>No articles in this category yet.</p>
            </div>
          )}
        </section>

        {/* NEWSLETTER */}
        <section style={{
          background: 'hsl(40 20% 97%)',
          padding: '80px 60px',
          borderTop: '1px solid hsl(40 10% 88%)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 48,
        }}>
          <div style={{ maxWidth: 440 }}>
            <span className="section-label">Stay Inspired</span>
            <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 200, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
              Subscribe to our journal
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.85, color: 'hsl(35 5% 42%)', margin: 0 }}>
              Receive thoughtfully curated stories, event recaps, and design inspiration delivered to your inbox monthly.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 0, flexShrink: 0, flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                border: '1px solid hsl(40 10% 88%)',
                borderRight: 'none',
                padding: '13px 22px',
                fontSize: 13,
                width: 300,
                outline: 'none',
                background: '#fff',
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            />
            <button className="lm-btn lm-btn-dark" onClick={() => { if (email) { alert('Thank you for subscribing!'); setEmail(''); } }}>
              Subscribe
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
