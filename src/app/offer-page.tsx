'use client';

import { motion, MotionConfig, useReducedMotion } from 'motion/react';
import { type ReactNode } from 'react';
import { DecisionFlow } from './flow-diagram';

const EMAIL_LINK =
  'mailto:hello@snacksncode.dev?subject=Gdzie%20ginie%20czas&body=Cze%C5%9B%C4%87%20Ilya%2C%0A%0AW%20naszej%20firmie%20najwi%C4%99cej%20czasu%20ginie%20na...';

const problems = [
  {
    signal: 'sprzedaż zwalnia',
    title: 'Wyceny i zamówienia krążą po e-mailu',
    description: 'Każdy przypadek wymaga kilku wiadomości, Excela i ręcznego pilnowania statusu.',
  },
  {
    signal: 'klient czeka',
    title: 'Klient czeka na prostą odpowiedź',
    description: 'Cena, termin, status albo dokument zależą od tego, czy ktoś znajdzie chwilę.',
  },
  {
    signal: 'czas znika',
    title: 'Zespół przepisuje te same dane',
    description: 'Informacje wędrują między formularzem, arkuszem, CRM-em i systemem księgowym.',
  },
  {
    signal: 'narzędzie przeszkadza',
    title: 'Gotowy system nie pasuje do firmy',
    description:
      'Sklep, CRM lub wtyczki wymuszają proces, zamiast wspierać sposób, w jaki zarabiacie.',
  },
];

const sprintSteps = [
  {
    number: '01',
    title: 'Rozbieramy problem',
    description:
      'Rozmawiam z osobami w procesie i sprawdzam, gdzie naprawdę uciekają czas i pieniądze.',
  },
  {
    number: '02',
    title: 'Tniemy zakres',
    description:
      'Oddzielamy rozwiązanie potrzebne teraz od funkcji, które mogą spokojnie poczekać.',
  },
  {
    number: '03',
    title: 'Podejmujesz decyzję',
    description:
      'Dostajesz rekomendację, ryzyka, zakres i budżet — także wtedy, gdy nie warto nic budować.',
  },
];

const deliverables = [
  'jasna diagnoza problemu i jego wartości dla firmy',
  'rekomendacja: budować, kupić gotowe narzędzie czy zmienić proces',
  'najmniejszy sensowny zakres oraz lista rzeczy odłożonych',
  'warianty rozwiązania, ryzyka i zależności',
  'orientacyjny budżet i plan kolejnego kroku',
];

const buildOptions = [
  {
    title: 'Portal lub konfigurator dla klientów',
    description:
      'Wycena, zamówienie, rezerwacja, płatność albo status bez wymiany dziesięciu e-maili.',
  },
  {
    title: 'Panel dla zespołu',
    description:
      'Jedno miejsce do obsługi procesu zamiast arkuszy, kopiowania danych i ręcznych przypomnień.',
  },
  {
    title: 'Produkt webowy lub mobilny',
    description:
      'Dedykowana aplikacja, kiedy gotowe narzędzia nie obsługują kluczowej logiki biznesu.',
  },
];

const cases = [
  {
    name: 'Better Off',
    type: 'Platforma społecznościowa',
    description:
      'Rozwijam webową część produktu łączącego ludzi przez wydarzenia, dopasowanie i społeczności.',
    href: 'https://betteroffsocial.com',
    metrics: [
      '+19% ukończeń quizu',
      '+7% konwersji',
      '-800 ms LCP',
      '90% kluczowych ścieżek objętych testami E2E',
    ],
  },
  {
    name: 'Fenne',
    type: 'Własna aplikacja mobilna',
    description:
      'Planowanie posiłków, przepisów i zakupów dla rodzin — od pomysłu do aplikacji dostępnej w App Store.',
    href: 'https://fenneplanner.com',
  },
  {
    name: 'Ranga × Warido',
    type: 'Web',
    description:
      'Responsywna strona porządkująca ofertę firmy księgowej i prowadząca klienta do właściwego kontaktu.',
    href: 'https://www.ranga.net.pl',
  },
];

const enterEase = [0.22, 1, 0.36, 1] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M5 13 13 5M7 5h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: enterEase }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Ilya Dolotov — początek strony">
        <span className="wordmark-mark">ID</span>
        <span>Ilya Dolotov</span>
      </a>
      <nav className="main-nav" aria-label="Główna nawigacja">
        <a href="#problemy">Dla kogo</a>
        <a href="#sprint">Pierwszy krok</a>
        <a href="#realizacje">Realizacje</a>
      </nav>
      <a className="nav-cta" href={EMAIL_LINK}>
        Opowiedz o problemie
        <ArrowIcon />
      </a>
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const heroItemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: enterEase } },
  };
  return (
    <section className="hero" id="top">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.p className="eyebrow" variants={heroItemVariants}>
            Dedykowane aplikacje dla MŚP w usługach, handlu i produkcji
          </motion.p>
          <h1>
            <motion.span variants={heroItemVariants}>Buduję aplikacje, które usuwają</motion.span>
            <motion.span className="hero-accent" variants={heroItemVariants}>
              ręczną robotę.
            </motion.span>
          </h1>
          <motion.p className="hero-lead" variants={heroItemVariants}>
            Masz proces oparty na e-mailu i Excelu, klient czeka albo gotowy system nie pasuje?
            Najpierw znajduję najmniejszy sensowny zakres. Potem — jeśli warto — buduję rozwiązanie
            webowe lub mobilne.
          </motion.p>
          <motion.div className="hero-actions" variants={heroItemVariants}>
            <motion.a
              className="primary-cta"
              href={EMAIL_LINK}
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            >
              Opowiedz mi, gdzie ginie czas
              <ArrowIcon />
            </motion.a>
            <a className="text-link" href="#sprint">
              Zobacz pierwszy krok
            </a>
          </motion.div>
          <motion.div className="hero-facts" variants={heroItemVariants}>
            <span>
              <strong>7 dni</strong> do decyzji
            </span>
            <span>
              <strong>9 000 zł</strong> netto
            </span>
            <span>
              <strong>0 presji</strong> na wdrożenie
            </span>
          </motion.div>
        </motion.div>
        <DecisionFlow />
      </div>
      <div className="hero-proof">
        <span>Portale klientów</span>
        <span>Panele dla zespołu</span>
        <span>Web</span>
        <span>Mobile</span>
      </div>
    </section>
  );
}

function ProblemsSection() {
  const reduce = useReducedMotion();
  return (
    <section className="section problems-section" id="problemy">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="eyebrow">Brzmi znajomo?</p>
          <h2>Problem widać w codziennej pracy.</h2>
        </div>
        <p>
          Nie musisz wiedzieć, czy potrzebujesz sklepu, aplikacji czy panelu. Wystarczy wskazać
          miejsce, w którym firma regularnie traci czas, klientów albo marżę.
        </p>
      </Reveal>
      <div className="problem-grid">
        {problems.map((problem, index) => (
          <Reveal className="problem-card" delay={index * 0.045} key={problem.title}>
            <motion.article
              whileHover={reduce ? undefined : { y: -5 }}
              transition={{ type: 'spring', stiffness: 360, damping: 30 }}
            >
              <span className="problem-index">0{index + 1}</span>
              <span className="problem-signal">{problem.signal}</span>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal className="section-bridge">
        <span>Jeśli któryś z tych sygnałów kosztuje firmę realne pieniądze,</span>
        <strong>nie zaczynamy od kodu. Zaczynamy od decyzji.</strong>
        <ArrowIcon />
      </Reveal>
    </section>
  );
}

function SprintSection() {
  return (
    <section className="section sprint-section" id="sprint">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="eyebrow">Pierwszy krok</p>
          <h2>Product Clarity Sprint</h2>
        </div>
        <p>
          W 7 dni zamieniamy niejasny problem w decyzję, którą da się obronić biznesowo. Bez
          prototypu na pokaz i bez założenia, że każda sytuacja potrzebuje dedykowanego systemu.
        </p>
      </Reveal>
      <div className="sprint-process">
        {sprintSteps.map((step, index) => (
          <Reveal className="process-step" delay={index * 0.06} key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Reveal>
        ))}
      </div>
      <div className="offer-grid">
        <Reveal className="price-panel">
          <p className="price-label">Stała cena sprintu</p>
          <p className="price">9 000</p>
          <p className="price-meta">PLN netto + VAT</p>
          <div className="duration-row">
            <span>czas</span>
            <strong>7 dni roboczych</strong>
          </div>
        </Reveal>
        <Reveal className="deliverables-panel" delay={0.05}>
          <p className="panel-label">Po tygodniu masz</p>
          <ul>
            {deliverables.map((deliverable) => (
              <li key={deliverable}>
                <span>+</span>
                {deliverable}
              </li>
            ))}
          </ul>
          <p className="scope-note">
            <strong>Nie każdy problem powinien kończyć się wdrożeniem.</strong> Jeśli nie jestem
            właściwą osobą, powiem to przed sprintem albo wskażę lepszą drogę.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function BuildSection() {
  return (
    <section className="section build-section" id="wdrozenie">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="eyebrow">Jeśli odpowiedź brzmi „budujemy”</p>
          <h2>Mogę też dowieźć rozwiązanie.</h2>
        </div>
        <p>
          Sprint jest osobną usługą. Potem możesz wdrożyć plan ze mną, z własnym zespołem albo z
          innym wykonawcą. Jeśli problem pasuje do moich kompetencji, biorę odpowiedzialność od
          zakresu do działającej wersji.
        </p>
      </Reveal>
      <div className="build-grid">
        {buildOptions.map((option, index) => (
          <Reveal className="build-card" delay={index * 0.06} key={option.title}>
            <span>0{index + 1}</span>
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="build-note">
        <strong>Dedykowany system tylko wtedy, kiedy daje przewagę.</strong>
        <span>
          Nie buduję tanich stron na WordPressie. Buduję rozwiązania dopasowane do procesu, którego
          gotowy szablon nie obsłuży.
        </span>
      </Reveal>
    </section>
  );
}

function CasesSection() {
  const reduce = useReducedMotion();
  return (
    <section className="section cases-section" id="realizacje">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="eyebrow">Dowód zamiast deklaracji</p>
          <h2>Buduję rzeczy, których ludzie naprawdę używają.</h2>
        </div>
        <p>
          Od złożonej platformy produktowej, przez własną aplikację w App Store, po prosty i
          skuteczny web. Dobieram poziom rozwiązania do problemu.
        </p>
      </Reveal>
      <div className="cases-grid">
        {cases.map((project, index) => (
          <Reveal
            className={`case-wrap ${index === 0 ? 'featured' : ''}`}
            delay={index * 0.05}
            key={project.name}
          >
            <motion.a
              className="case-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? undefined : { y: -5 }}
              transition={{ type: 'spring', stiffness: 360, damping: 32 }}
            >
              <div className="case-topline">
                <span>{project.type}</span>
                <ExternalArrow />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.metrics ? (
                <div className="metrics-grid">
                  {project.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              ) : null}
              <span className="case-link">{new URL(project.href).hostname}</span>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="closing-section">
      <Reveal className="closing-copy">
        <p className="eyebrow">Bez briefu. Bez listy funkcji.</p>
        <h2>Napisz, gdzie dziś ginie czas.</h2>
        <p>
          W pierwszej wiadomości wystarczą trzy zdania: co robicie ręcznie, kto na to czeka i jak
          często problem wraca. Odpowiem, czy widzę sens w dalszej rozmowie.
        </p>
        <motion.a
          className="primary-cta"
          href={EMAIL_LINK}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 420, damping: 30 }}
        >
          Opowiedz mi o problemie
          <ArrowIcon />
        </motion.a>
      </Reveal>
      <div className="availability-note">
        <span className="status-dot" />
        <p>
          Pracujesz bezpośrednio ze mną — od pierwszej rozmowy po decyzje produktowe i wdrożenie.
        </p>
        <a href="mailto:hello@snacksncode.dev">hello@snacksncode.dev</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Ilya Dolotov</strong>
        <span>Product Engineer</span>
      </div>
      <div className="footer-links">
        <a href="https://github.com/snacksncode" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://fenneplanner.com" target="_blank" rel="noreferrer">
          Fenne
        </a>
        <a href="mailto:hello@snacksncode.dev">E-mail</a>
      </div>
      <span className="footer-year">© {new Date().getFullYear()}</span>
    </footer>
  );
}

export function OfferPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="viewport-frame">
        <main className="site-shell">
          <Header />
          <Hero />
          <ProblemsSection />
          <SprintSection />
          <BuildSection />
          <CasesSection />
          <ClosingSection />
          <Footer />
        </main>
      </div>
    </MotionConfig>
  );
}
