import './_group.css';
import { useState } from 'react';

const CATEGORIES = ['All', 'Wedding', 'Corporate', 'Private', 'Behind the Scenes'];

const FEATURED = {
  id: 1,
  title: 'The Art of the First Look: How We Orchestrate Unforgettable Moments',
  excerpt: 'From the soft morning light filtering through a Tuscan vineyard to the quiet hush before two people meet eyes for the first time — the first look is the emotional anchor of every wedding. Here\'s how we craft it.',
  category: 'Wedding',
  date: 'March 18, 2025',
  author: 'Sophie Lestari',
  readTime: '7 min read',
  img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90',
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
    excerpt: 'An evening under the stars in Bali\'s cultural heart — where firelight, gamelan music, and a tropical garden became the backdrop for a private celebration unlike any other.',
    category: 'Private',
    date: 'February 10, 2025',
    author: 'Ariana Costa',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=700&q=85',
  },
  {
    id: 4,
    title: 'How We Build a Wedding Timeline That Actually Works',
    excerpt: 'The secret to a seamless wedding day isn\'t luck — it\'s meticulous planning. We break down our proprietary timeline methodology that has never let a couple down.',
    category: 'Behind the Scenes',
    date: 'January 22, 2025',
    author: 'Sophie Lestari',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=700&q=85',
  },
  {
    id: 5,
    title: 'Santorini: A Love Letter to the Most Photographed Wedding Destination',
    excerpt: 'White-washed walls, cerulean domes, and sunsets that stop time — we\'ve hosted 14 weddings in Santorini and fall in love with it every single time.',
    category: 'Wedding',
    date: 'January 5, 2025',
    author: 'Ariana Costa',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=700&q=85',
  },
  {
    id: 6,
    title: 'Corporate Events That Don\'t Feel Corporate',
    excerpt: 'The modern workforce expects more than a conference room and a PowerPoint. We share five principles for designing corporate events that inspire rather than bore.',
    category: 'Corporate',
    date: 'December 14, 2024',
    author: 'Marcus Tan',
    readTime: '4 min read',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85',
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  return (
    <div className="lumiere-root" style={{ overflowY: 'auto', height: '100vh' }}>
      <div style={{ overflowY: 'auto', height: '100%' }}>

        {/* NAV */}
        <nav className="lumiere-nav" style={{ position: 'sticky', top: 0 }}>
          <a href="#" className="lumiere-logo">LUMI<span>È</span>RE</a>
          <ul className="lumiere-nav-links">
            {['Home', 'Portfolio', 'Blog', 'Career', 'Contact'].map(l => (
              <li key={l}><a href="#" className={l === 'Blog' ? 'active' : ''}>{l}</a></li>
            ))}
          </ul>
          <a href="#" className="lumiere-btn lumiere-btn-dark" style={{ padding: '10px 24px', fontSize: '10px' }}>Get In Touch</a>
        </nav>

        {/* HEADER */}
        <section style={{ padding: '80px 60px 60px', borderBottom: '1px solid var(--color-mid-grey)' }}>
          <p className="section-label">Stories & Insights</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h1 style={{ fontSize: 64, fontWeight: 200, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Journal
            </h1>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--color-text-mid)', maxWidth: 380, textAlign: 'right' }}>
              Behind-the-scenes documentation, event recaps, and inspiration from the world of luxury event design.
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section style={{ padding: '0 0 0' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <img
              src={FEATURED.img}
              alt={FEATURED.title}
              style={{ width: '100%', height: 560, objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, rgba(0,0,0,0.75) 40%, transparent 100%)',
              display: 'flex', alignItems: 'center',
              padding: '60px',
            }}>
              <div style={{ maxWidth: 560 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                  <span style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#fff', fontSize: 10,
                    fontWeight: 600, letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '5px 12px',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {FEATURED.category}
                  </span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Featured</span>
                </div>
                <h2 style={{
                  fontSize: 36, fontWeight: 300, color: '#fff',
                  lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.01em',
                }}>
                  {FEATURED.title}
                </h2>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
                  {FEATURED.excerpt}
                </p>
                <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                  <span className="arrow-link" style={{ color: '#fff' }}>Read Article</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
                    {FEATURED.date} · {FEATURED.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section style={{ padding: '0 60px', borderBottom: '1px solid var(--color-mid-grey)', display: 'flex', gap: 0 }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: 'none', border: 'none',
                padding: '20px 28px',
                fontSize: 11, fontWeight: 600,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer',
                color: activeCategory === cat ? 'var(--color-text-dark)' : 'var(--color-text-light)',
                borderBottom: activeCategory === cat ? '2px solid var(--color-text-dark)' : '2px solid transparent',
                marginBottom: -1,
                transition: 'all 0.2s',
                fontFamily: 'var(--font-proxima)',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* ARTICLE GRID */}
        <section style={{ padding: '60px 60px 100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
            {filtered.map((article) => (
              <article key={article.id} style={{ cursor: 'pointer' }}>
                <div style={{ overflow: 'hidden', marginBottom: 24 }}>
                  <img
                    src={article.img}
                    alt={article.title}
                    style={{
                      width: '100%', aspectRatio: '4/3', objectFit: 'cover',
                      display: 'block', transition: 'transform 0.4s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{
                  display: 'flex', gap: 12, alignItems: 'center', marginBottom: 14,
                }}>
                  <span style={{
                    fontSize: 9, fontWeight: 600, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--color-text-light)',
                    border: '1px solid var(--color-mid-grey)',
                    padding: '4px 10px',
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--color-text-light)' }}>
                    {article.readTime}
                  </span>
                </div>
                <h3 style={{
                  fontSize: 20, fontWeight: 300, lineHeight: 1.3,
                  marginBottom: 12, letterSpacing: '-0.01em',
                  color: 'var(--color-text-dark)',
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontSize: 13, lineHeight: 1.8,
                  color: 'var(--color-text-mid)', marginBottom: 20,
                }}>
                  {article.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-mid-grey)', paddingTop: 16 }}>
                  <span style={{ fontSize: 11, color: 'var(--color-text-light)' }}>
                    {article.date} · {article.author}
                  </span>
                  <span className="arrow-link" style={{ fontSize: 9 }}>Read</span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-light)' }}>
              <p style={{ fontSize: 16 }}>No articles in this category yet.</p>
            </div>
          )}
        </section>

        {/* NEWSLETTER */}
        <section style={{ background: 'var(--color-off-white)', padding: '80px 60px', borderTop: '1px solid var(--color-mid-grey)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 60 }}>
          <div style={{ maxWidth: 440 }}>
            <p className="section-label">Stay Inspired</p>
            <h2 style={{ fontSize: 36, fontWeight: 200, margin: '0 0 16px', letterSpacing: '-0.01em' }}>
              Subscribe to our journal
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-mid)', margin: 0 }}>
              Receive thoughtfully curated stories, event recaps, and design inspiration delivered to your inbox monthly.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 0, flexShrink: 0 }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                border: '1px solid var(--color-mid-grey)',
                borderRight: 'none',
                padding: '14px 24px',
                fontSize: 13,
                width: 300,
                outline: 'none',
                background: '#fff',
                fontFamily: 'var(--font-proxima)',
              }}
            />
            <button className="lumiere-btn lumiere-btn-dark">
              Subscribe
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lumiere-footer">
          <div className="lumiere-footer-grid">
            <div>
              <div className="lumiere-footer-brand">LUMI<span style={{ fontWeight: 600 }}>È</span>RE</div>
              <p className="lumiere-footer-desc">A boutique event production house creating extraordinary experiences worldwide.</p>
            </div>
            <div className="lumiere-footer-col"><h4>Services</h4><ul><li><a href="#">Wedding</a></li><li><a href="#">Corporate</a></li><li><a href="#">Private</a></li></ul></div>
            <div className="lumiere-footer-col"><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Portfolio</a></li><li><a href="#">Blog</a></li><li><a href="#">Careers</a></li></ul></div>
            <div className="lumiere-footer-col"><h4>Contact</h4><ul><li><a href="#">hello@lumiere-events.com</a></li><li><a href="#">Instagram</a></li></ul></div>
          </div>
          <div className="lumiere-footer-bottom">
            <span className="lumiere-footer-copy">© 2025 LUMIÈRE Events. All rights reserved.</span>
            <span className="lumiere-footer-copy">Privacy Policy · Terms</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
