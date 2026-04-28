import { useState, useRef, useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Fade } from '@/components/Fade';
import { Toast, type ToastData } from '@/components/Toast';
import { submitInquiry, isValidEmail, isValidPhone } from '@/lib/submitInquiry';
import '@/styles/home.css';

const EMPTY_FORM = {
  groom: '',
  bride: '',
  phone: '',
  email: '',
  date: '',
  city: '',
  message: '',
  website: '', // honeypot — must stay empty
};

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ─────────────────────────────────────────────────────────────────── */

/** Showcase: 3 pages × 5 photos. All images preloaded on mount. */
const SHOWCASE_PAGES: string[][] = [
  [
    '/photos/showcase-1.jpg',
    '/photos/showcase-2.jpg',
    '/photos/showcase-3.jpg',
    '/photos/showcase-4.jpg',
    '/photos/showcase-5.jpg',
  ],
  [
    '/photos/showcase-6.jpg',
    '/photos/showcase-7.jpg',
    '/photos/showcase-8.jpg',
    '/photos/showcase-9.jpg',
    '/photos/showcase-10.jpg',
  ],
  [
    '/photos/showcase-11.jpg',
    '/photos/showcase-12.jpg',
    '/photos/showcase-13.jpg',
    '/photos/showcase-14.jpg',
    '/photos/showcase-15.jpg',
  ],
];

const SERVICES = [
  {
    num: '01',
    name: 'Engagement Ceremony',
    desc: "An engagement marks the beginning of a new chapter, symbolizing a shared commitment and the first union of two families. We recognize the importance of honoring diverse cultural traditions and values.",
  },
  {
    num: '02',
    name: 'Wedding Reception',
    desc: 'A ballroom wedding offers versatile elegance, from modern minimalism to lavish floral settings, with every detail designed to reflect your vision.',
  },
  {
    num: '03',
    name: 'Destination Wedding - Bali',
    desc: 'For a more intimate and relaxed celebration, from golden sunsets by the sea to enchanting starlit evenings, nature becomes a breathtaking backdrop for your special day.',
  },
  {
    num: '04',
    name: 'Overseas Wedding Planner',
    desc: 'Our full-service planning of your overseas wedding is flawlessly executed from curated dining experiences to luxury accommodations. We design bespoke celebrations across the globe.',
  },
  {
    num: '05',
    name: 'Anniversary / Birthday Party',
    desc: 'Every anniversary / birthday is a meaningful milestone, and each celebration should reflect your unique vision.',
  },
  {
    num: '06',
    name: 'Corporate Events & Others',
    desc: 'We provide a comprehensive range of corporate event management and creative services. From team building activities to large scale corporate celebrations and gala events, each project is handled with innovation.',
  },
];

const TESTIMONIALS = [
  {
    names: 'Daniel & Jessy',
    img: '/photos/testi-1.jpg',
    quote: 'The Prestige turned our dream into a breathtaking reality. Every detail was crafted with care and elegance.',
  },
  {
    names: 'Rudy & Michelle',
    img: '/photos/testi-2.jpg',
    quote: 'From the first meeting to the last dance, the team was flawless. We will forever be grateful.',
  },
  {
    names: 'Wayne & Jeny',
    img: '/photos/testi-3.jpg',
    quote: 'A seamless, breathtaking experience from start to finish. Truly a world-class team.',
  },
];

const SHOWCASE_FADE_MS = 350;

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ─────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const contactRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastData | null>(null);

  /* Showcase pagination state */
  const [showcasePage, setShowcasePage] = useState(0);
  const [showcaseFading, setShowcaseFading] = useState(false);

  /* Preload every showcase image once so page changes are instant */
  useEffect(() => {
    SHOWCASE_PAGES.flat().forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  function scrollToContact() {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function goToShowcasePage(target: number) {
    if (target === showcasePage) return;
    const wrapped = ((target % SHOWCASE_PAGES.length) + SHOWCASE_PAGES.length) % SHOWCASE_PAGES.length;
    setShowcaseFading(true);
    setTimeout(() => {
      setShowcasePage(wrapped);
      setShowcaseFading(false);
    }, SHOWCASE_FADE_MS);
  }

  return (
    <div className="hp-root">
      <Nav onContactClick={scrollToContact} transparent />

      <HeroSection onCtaClick={scrollToContact} />

      <AboutSection onCtaClick={scrollToContact} />

      <ServicesSection />

      <ShowcaseSection
        page={showcasePage}
        fading={showcaseFading}
        onPageChange={goToShowcasePage}
      />

      <TestimonialsSection onSeeMore={scrollToContact} />

      <ContactSection
        sectionRef={contactRef}
        form={form}
        setForm={setForm}
        submitting={submitting}
        onSubmit={async () => {
          setSubmitting(true);
          const result = await submitInquiry(form);
          setSubmitting(false);

          if (result.ok) {
            setForm(EMPTY_FORM); // clear inputs after success
            setToast({
              variant: 'success',
              title: 'Inquiry Sent',
              message: "Thank you. We've received your inquiry and will respond within 24 hours.",
            });
          } else {
            setToast({
              variant: 'error',
              title: 'Could Not Send',
              message: result.error || 'Something went wrong. Please try again.',
            });
          }
        }}
      />

      <Footer />

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   1. HERO
   ─────────────────────────────────────────────────────────────────── */
function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="hp-hero">
      <img className="hp-hero__img" src="/photos/hero.jpg" alt="Hero" />
      <div className="hp-hero__overlay" />

      <div className="hp-hero__content lm-hero-text">
        <div className="hp-hero__heading-block">
          <div className="hp-hero__title">Love Journey</div>
          <div className="hp-hero__subtitle">Begins Here...</div>
        </div>
        <p className="hp-hero__tagline">
          Creating A Story That Is<br />Uniquely Yours.
        </p>
        <div className="hp-hero__cta-wrap">
          <button type="button" className="hp-cta-dark" onClick={onCtaClick}>
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   2. ABOUT
   ─────────────────────────────────────────────────────────────────── */
function AboutSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <Fade as="section" id="about" direction="in" className="hp-about lm-grid-2asym">
      <div className="hp-about__text-col lm-about-text">
        <div>
          <div className="hp-about__breadcrumb">
            <span>about</span>
            <span className="hp-about__breadcrumb-divider" />
            <span className="hp-about__breadcrumb-name">THE PRESTIGE ORGANIZER</span>
          </div>

          <h2 className="hp-about__heading">
            Beyond Planning,<br />We Create Meaning
          </h2>

          <p className="hp-about__paragraph">
            We are a passionate team in the wedding industry, crafting unique
            Celebration of Love moments inspired by each couple's story. At The
            Prestige, we create detailed, seamless wedding plans that capture
            laughter, love, and emotion to be cherished forever.
          </p>

          <div className="hp-about__team-row">
            <div className="hp-about__team-label">Our Team</div>
            <div className="hp-about__team-roles">Conceptor | Planner | Director</div>
          </div>
        </div>

        <button type="button" className="hp-about__cta-link" onClick={onCtaClick}>
          Know Us Better
        </button>
      </div>

      <div className="hp-about__media-col">
        <div className="hp-about__media-frame">
          <img className="hp-about__media-img" src="/photos/about-team.jpg" alt="The Prestige team" />
        </div>
        <div className="hp-about__stats lm-about-stats">
          <Stat value="1000+" label="Events Crafted" />
          <span className="hp-about__stat-divider" />
          <Stat value="10+" label="Years of Love" />
        </div>
      </div>
    </Fade>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="hp-about__stat">
      <div className="hp-about__stat-value">{value}</div>
      <div className="hp-about__stat-label">{label}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   3. SERVICES
   ─────────────────────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section id="services" className="hp-services">
      <Fade className="hp-services__inner lm-pad-h">
        <header className="hp-services__header">
          <div className="hp-eyebrow">what we do</div>
          <h2 className="hp-section-title">Our Services</h2>
        </header>

        <div className="lm-grid-svc">
          {SERVICES.map((service, i) => {
            const isLeft = i % 2 === 0;
            return (
              <article
                key={service.num}
                className={`hp-services__item ${isLeft ? 'hp-services__item--left' : 'hp-services__item--right'} lm-svc-item`}
              >
                <div className="hp-services__num">{service.num}</div>
                <div className="hp-services__name">{service.name}</div>
                <p className="hp-services__desc">{service.desc}</p>
              </article>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   4. PROJECT SHOWCASE
   ─────────────────────────────────────────────────────────────────── */
type ShowcaseProps = {
  page: number;
  fading: boolean;
  onPageChange: (newPage: number) => void;
};

function ShowcaseSection({ page, fading, onPageChange }: ShowcaseProps) {
  const photos = SHOWCASE_PAGES[page];
  const [topLeft, topRight, ...bottom] = photos;

  return (
    <section id="portfolio" className="hp-showcase lm-pad-h">
      <Fade className="hp-showcase__header">
        <div className="hp-eyebrow">our work</div>
        <h2 className="hp-section-title">Project Showcase</h2>
      </Fade>

      <Fade direction="in">
        <div className={`hp-showcase__viewport${fading ? ' hp-showcase__viewport--fading' : ''}`}>
          <div className="hp-showcase__top-grid">
            <ShowcaseCell src={topLeft} alt={`Showcase ${page * 5 + 1}`} />
            <ShowcaseCell src={topRight} alt={`Showcase ${page * 5 + 2}`} offCenter />
          </div>
          <div className="hp-showcase__bottom-grid">
            {bottom.map((src, i) => (
              <ShowcaseCell
                key={`${page}-${i}`}
                src={src}
                alt={`Showcase ${page * 5 + i + 3}`}
                bottom
              />
            ))}
          </div>
        </div>
      </Fade>

      <ShowcaseNav
        page={page}
        total={SHOWCASE_PAGES.length}
        onChange={onPageChange}
      />
    </section>
  );
}

function ShowcaseCell({
  src,
  alt,
  bottom,
  offCenter,
}: {
  src: string;
  alt: string;
  bottom?: boolean;
  offCenter?: boolean;
}) {
  const cellClass = `hp-showcase__cell${bottom ? ' hp-showcase__cell--bottom' : ''}`;
  const imgClass = [
    'hp-showcase__img',
    bottom && 'hp-showcase__img--bottom',
    offCenter && 'hp-showcase__img--off-center',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cellClass}>
      <img className={imgClass} src={src} alt={alt} />
    </div>
  );
}

function ShowcaseNav({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (newPage: number) => void;
}) {
  return (
    <nav className="hp-showcase__nav" aria-label="Showcase pagination">
      <button
        type="button"
        className="hp-showcase__arrow"
        aria-label="Previous"
        onClick={() => onChange(page - 1)}
      >
        ‹
      </button>
      <div className="hp-showcase__dots">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`hp-showcase__dot${i === page ? ' hp-showcase__dot--active' : ''}`}
            aria-label={`Go to page ${i + 1}`}
            aria-current={i === page ? 'page' : undefined}
            onClick={() => onChange(i)}
          />
        ))}
      </div>
      <button
        type="button"
        className="hp-showcase__arrow"
        aria-label="Next"
        onClick={() => onChange(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   5. TESTIMONIALS
   ─────────────────────────────────────────────────────────────────── */
function TestimonialsSection({ onSeeMore }: { onSeeMore: () => void }) {
  return (
    <section id="testimonial" className="hp-testimonials lm-pad-h">
      <Fade className="hp-testimonials__header">
        <div>
          <div className="hp-eyebrow">what they say</div>
          <h2 className="hp-section-title">Testimonial</h2>
        </div>
        <button type="button" className="hp-testimonials__see-more" onClick={onSeeMore}>
          See More ↓
        </button>
      </Fade>

      <div className="lm-grid-3">
        {TESTIMONIALS.map((t, i) => (
          <Fade key={t.names} delay={i * 0.1}>
            <div className="hp-testimonial-card__img-frame">
              <img className="hp-testimonial-card__img" src={t.img} alt={t.names} />
            </div>
            <div className="hp-testimonial-card__body">
              <div className="hp-testimonial-card__name">{t.names}</div>
              <p className="hp-testimonial-card__quote">"{t.quote}"</p>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   6. CONTACT
   ─────────────────────────────────────────────────────────────────── */
type FormState = {
  groom: string;
  bride: string;
  phone: string;
  email: string;
  date: string;
  city: string;
  message: string;
  /** Honeypot — bots fill this; humans never see it. Must stay empty. */
  website: string;
};

type ContactProps = {
  sectionRef: React.RefObject<HTMLElement | null>;
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  submitting: boolean;
  onSubmit: () => void;
};

function ContactSection({
  sectionRef, form, setForm, submitting, onSubmit,
}: ContactProps) {
  const [validationError, setValidationError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Frontend validation — fail fast before hitting the network
    if (!isValidEmail(form.email)) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!isValidPhone(form.phone)) {
      setValidationError('Please enter a valid phone number.');
      return;
    }

    setValidationError(null);
    onSubmit();
  }

  return (
    <section id="contact" ref={sectionRef} className="hp-contact">
      <Fade delay={0.1} className="hp-contact__inner lm-grid-form lm-pad-h">
        <div>
          <div className="hp-contact__eyebrow">let's connect</div>
          <h2 className="hp-contact__heading">
            Love Journey<br />Begins Here...
          </h2>
          <p className="hp-contact__intro">
            Every extraordinary event begins with a conversation. We invite you
            to share your vision with us, and allow our dedicated team to
            transform it into an unforgettable experience.
          </p>
          <div className="hp-contact__details">
            <div className="hp-contact__detail-line">ThePrestigeOrganizer@gmail.com</div>
            <div className="hp-contact__detail-line">+62 811 3566 299</div>
            <div className="hp-contact__detail-line hp-contact__detail-line--multi">
              Jakarta | Surabaya | Bali<br />Serving Worldwide
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} noValidate>
            <div className="hp-form__row">
              <FormField label="Groom To Be" type="text" placeholder="Alexandra"
                value={form.groom} onChange={(v) => update('groom', v)} required />
              <FormField label="Bride To Be" type="text" placeholder="Wijaya"
                value={form.bride} onChange={(v) => update('bride', v)} required />
              <FormField label="Contact" type="tel" placeholder="+62 ·······"
                value={form.phone} onChange={(v) => update('phone', v)} required />
              <FormField label="Email" type="email" placeholder="your@email.com"
                value={form.email} onChange={(v) => update('email', v)} required />
              <FormField label="Event Date" type="text" placeholder="dd/mm/yyyy"
                value={form.date} onChange={(v) => update('date', v)} />
              <FormField label="City & Country" type="text" placeholder="Surabaya"
                value={form.city} onChange={(v) => update('city', v)} />
            </div>

            <div className="hp-form__field hp-form__field--full">
              <label className="hp-form__label">Your Vision</label>
              <textarea
                className="hp-form__textarea"
                rows={4}
                placeholder="Tell us about your dream event...."
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
              />
            </div>

            {/* Honeypot — hidden from humans, bots fill it. Aria-hidden + tabIndex
                make it inaccessible to assistive tech and keyboard users. */}
            <div className="hp-form__honeypot" aria-hidden="true">
              <label>
                Website
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => update('website', e.target.value)}
                />
              </label>
            </div>

            {/* Inline validation error (network errors handled by toast) */}
            {validationError && (
              <div className="hp-form__error" role="alert">
                {validationError}
              </div>
            )}

            <button
              type="submit"
              className="hp-form__submit"
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </Fade>
    </section>
  );
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="hp-form__field">
      <label className="hp-form__label">{label}</label>
      <input
        className="hp-form__input"
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
