'use client';

import { motion, MotionConfig, useReducedMotion } from 'motion/react';
import { type ReactNode, useState } from 'react';
import { useCopyToClipboard } from '../hooks/use-copy-to-clipboard';
import { DecisionFlow } from './flow-diagram';
import { ui } from './offer-styles';

const EMAIL_ADDRESS = 'hello@snacksncode.dev';
const EMAIL_SUBJECT = 'Gdzie ginie czas w naszej firmie';
const EMAIL_BODY = `Cześć Ilya,

1. Co robimy ręcznie:
...

2. Kto na to czeka:
...

3. Jak często problem wraca:
...

Dodatkowy kontekst:
...`;
const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

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
  'diagnoza problemu i rekomendacja: budować, kupić czy zmienić proces',
  'najmniejszy sensowny zakres oraz lista rzeczy, które mogą poczekać',
  'warianty rozwiązania, ryzyka, orientacyjny budżet i kolejny krok',
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

const fullBuildIncludes = [
  'zakres, architektura i plan etapów',
  'kluczowe ścieżki oraz interfejs produktu',
  'frontend, backend, płatności i integracje',
  'wdrożenie, analityka i stabilizacja po starcie',
];

const cases = [
  {
    name: 'Better Off',
    type: 'Platforma społecznościowa',
    description: 'Rozwijam webową część działającej platformy społecznościowej.',
    href: 'https://betteroffsocial.com',
  },
  {
    name: 'Fenne',
    type: 'Własna aplikacja mobilna',
    description: 'Od pomysłu i decyzji produktowych po działającą aplikację dostępną w App Store.',
    href: 'https://fenneplanner.com',
  },
  {
    name: 'Ranga',
    type: 'Firma usługowa',
    description: 'Uporządkowałem ofertę księgową i kontakt z klientem.',
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

function ContactFallback({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [copyFailed, setCopyFailed] = useState(false);
  const copyStatus = copiedText === EMAIL_ADDRESS ? 'copied' : copyFailed ? 'error' : 'idle';

  async function copyEmail() {
    setCopyFailed(false);
    const copied = await copyToClipboard(EMAIL_ADDRESS);
    setCopyFailed(!copied);
  }

  return (
    <div
      className={`${ui.contactFallback} ${tone === 'dark' ? 'text-[var(--surface)]' : 'text-[var(--ink)]'}`}
    >
      <span className={ui.contactHint}>Nie otworzyła się poczta?</span>
      <a className={ui.contactLink} href={EMAIL_LINK}>
        {EMAIL_ADDRESS}
      </a>
      <button
        className={`${ui.contactButton} ${tone === 'dark' ? ui.contactButtonDark : ui.contactButtonLight}`}
        type="button"
        onClick={copyEmail}
        aria-live="polite"
      >
        {copyStatus === 'copied'
          ? 'Skopiowano'
          : copyStatus === 'error'
            ? 'Nie udało się'
            : 'Kopiuj e-mail'}
      </button>
    </div>
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
    <header className={ui.header}>
      <a className={ui.wordmark} href="#top" aria-label="Ilya Dolotov — początek strony">
        <span className={ui.wordmarkMark}>ID</span>
        <span>Ilya Dolotov</span>
      </a>
      <nav className={ui.nav} aria-label="Główna nawigacja">
        <a className={ui.navLink} href="#sprint">
          Pierwszy krok
        </a>
        <a className={ui.navLink} href="#wdrozenie">
          Pełne wdrożenie
        </a>
        <a className={ui.navLink} href="#realizacje">
          Realizacje
        </a>
      </nav>
      <a className={ui.navCta} href={EMAIL_LINK}>
        Napisz 3 zdania
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
    <section className={ui.hero} id="top">
      <div className={`${ui.heroOrb} ${ui.heroOrbOne}`} aria-hidden="true" />
      <div className={`${ui.heroOrb} ${ui.heroOrbTwo}`} aria-hidden="true" />
      <div className={ui.heroLayout}>
        <motion.div
          className={ui.heroCopy}
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.p className={ui.eyebrow} variants={heroItemVariants}>
            Dedykowane aplikacje dla MŚP w usługach, handlu i produkcji
          </motion.p>
          <h1 className={ui.heroTitle}>
            <motion.span variants={heroItemVariants}>Buduję aplikacje, które usuwają</motion.span>
            <motion.span className={ui.heroAccent} variants={heroItemVariants}>
              ręczną robotę.
            </motion.span>
          </h1>
          <motion.p className={ui.heroLead} variants={heroItemVariants}>
            Masz proces oparty na e-mailu i Excelu, klient czeka albo gotowy system nie pasuje?
            Najpierw znajduję najmniejszy sensowny zakres. Potem — jeśli warto — buduję rozwiązanie
            webowe lub mobilne.
          </motion.p>
          <motion.div className={ui.heroActions} variants={heroItemVariants}>
            <motion.a
              className={`${ui.primaryCtaBase} ${ui.primaryCtaLime}`}
              href={EMAIL_LINK}
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 420, damping: 30 }}
            >
              Napisz trzy zdania
              <ArrowIcon />
            </motion.a>
            <a className={ui.textLink} href="#sprint">
              Jak wygląda pierwszy krok
            </a>
          </motion.div>
          <motion.div variants={heroItemVariants}>
            <ContactFallback tone="dark" />
          </motion.div>
          <motion.div className={ui.heroFacts} variants={heroItemVariants}>
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
    </section>
  );
}

function ProblemsSection() {
  const reduce = useReducedMotion();
  return (
    <section className={ui.sectionPaper} id="problemy">
      <Reveal className={ui.sectionHeading}>
        <div>
          <p className={ui.eyebrow}>Brzmi znajomo?</p>
          <h2 className={ui.sectionTitle}>Problem widać w codziennej pracy.</h2>
        </div>
        <p className={ui.sectionIntro}>
          Nie musisz wiedzieć, czy potrzebujesz sklepu, aplikacji czy panelu. Wystarczy wskazać
          miejsce, w którym firma regularnie traci czas, klientów albo marżę.
        </p>
      </Reveal>
      <div className={ui.problemGrid}>
        {problems.map((problem, index) => (
          <Reveal delay={index * 0.045} key={problem.title}>
            <motion.article
              className={ui.problemCard}
              whileHover={reduce ? undefined : { y: -5 }}
              transition={{ type: 'spring', stiffness: 360, damping: 30 }}
            >
              <span className={ui.problemIndex}>0{index + 1}</span>
              <span className={ui.problemSignal}>{problem.signal}</span>
              <h3 className={ui.problemTitle}>{problem.title}</h3>
              <p className={ui.problemCopy}>{problem.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal className={ui.bridge}>
        <span className={ui.bridgeLead}>
          Jeśli któryś z tych sygnałów kosztuje firmę realne pieniądze,
        </span>
        <strong className={ui.bridgeStrong}>nie zaczynamy od kodu. Zaczynamy od decyzji.</strong>
        <ArrowIcon />
      </Reveal>
    </section>
  );
}

function SprintSection() {
  return (
    <section className={ui.sectionCobalt} id="sprint">
      <Reveal className={ui.sectionHeading}>
        <div>
          <p className={ui.eyebrow}>Pierwszy krok</p>
          <h2 className={ui.sectionTitle}>Product Clarity Sprint</h2>
        </div>
        <p className={ui.sectionIntroLight}>
          W 7 dni zamieniamy niejasny problem w decyzję, którą da się obronić biznesowo. Bez
          prototypu na pokaz i bez założenia, że każda sytuacja potrzebuje dedykowanego systemu.
        </p>
      </Reveal>
      <div className={ui.processGrid}>
        {sprintSteps.map((step, index) => (
          <Reveal
            className={`${ui.processStep} ${index > 0 ? ui.processStepInset : ''} ${index === sprintSteps.length - 1 ? ui.processStepLast : ''}`}
            delay={index * 0.06}
            key={step.number}
          >
            <span className={ui.utilityLabel}>{step.number}</span>
            <h3 className={ui.processTitle}>{step.title}</h3>
            <p className={ui.processCopy}>{step.description}</p>
          </Reveal>
        ))}
      </div>
      <div className={ui.offerGrid}>
        <Reveal className={ui.pricePanel}>
          <p className={ui.priceLabel}>Stała cena sprintu</p>
          <p className={ui.price}>9 000</p>
          <p className={ui.priceMeta}>PLN netto + VAT</p>
          <div className={ui.durationRow}>
            <span className={ui.durationLabel}>czas</span>
            <strong>7 dni roboczych</strong>
          </div>
        </Reveal>
        <Reveal className={ui.deliverablesPanel} delay={0.05}>
          <p className={ui.utilityLabel}>Po tygodniu masz</p>
          <ul className={ui.deliverablesList}>
            {deliverables.map((deliverable) => (
              <li className={ui.deliverable} key={deliverable}>
                <span className={ui.deliverableMark}>+</span>
                {deliverable}
              </li>
            ))}
          </ul>
          <p className={ui.scopeNote}>
            <strong>Nie każdy problem powinien kończyć się wdrożeniem.</strong> Jeśli nie warto
            budować albo nie jestem właściwą osobą, powiem to wprost.
          </p>
        </Reveal>
      </div>
      <Reveal className={ui.conversion}>
        <div className={ui.conversionProof}>
          <p className={ui.conversionProofLabel}>Dowiezione w praktyce</p>
          <strong className={ui.conversionMetric}>Produkt w App Store</strong>
          <strong className={ui.conversionMetric}>Platforma na produkcji</strong>
          <span className={ui.conversionProofNote}>
            Fenne jest w App Store. Better Off działa na produkcji.
          </span>
        </div>
        <div className={ui.conversionAction}>
          <h3 className={ui.conversionTitle}>Masz podobny kosztowny problem?</h3>
          <p className={ui.conversionCopy}>
            Wystarczą trzy zdania: co robicie ręcznie, kto czeka i jak często problem wraca.
          </p>
          <motion.a
            className={`${ui.primaryCtaBase} ${ui.primaryCtaDark}`}
            href={EMAIL_LINK}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
          >
            Napisz trzy zdania
            <ArrowIcon />
          </motion.a>
          <ContactFallback />
          <p className={ui.directWorkNote}>
            Pracujesz bezpośrednio ze mną — od pierwszej rozmowy po decyzję i wdrożenie.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function BuildSection() {
  return (
    <section className={ui.sectionPaper} id="wdrozenie">
      <Reveal className={ui.sectionHeading}>
        <div>
          <p className={ui.eyebrow}>Pełne wdrożenie</p>
          <h2 className={ui.sectionTitle}>Od decyzji do działającego produktu.</h2>
        </div>
        <p className={ui.sectionIntro}>
          Jeśli sprint pokaże, że budowa ma sens, mogę przejąć całość: od technicznego planu po
          uruchomienie. Dostajesz jednego partnera odpowiedzialnego za działający efekt, nie paczkę
          ekranów i repozytorium bez właściciela.
        </p>
      </Reveal>
      <Reveal className={ui.buildPackage}>
        <div className={ui.buildPackagePitch}>
          <p className={ui.utilityLabel}>Custom build · web lub mobile</p>
          <h3 className={ui.buildPackageTitle}>Buduję cały produkt. Nie tylko pierwszy ekran.</h3>
          <p className={ui.buildPackageCopy}>
            Cenę, etapy i termin ustalamy po sprincie, kiedy znamy prawdziwy zakres i ryzyka. Każdy
            etap kończy się czymś, co można uruchomić, sprawdzić i świadomie rozwijać dalej.
          </p>
          <motion.a
            className={`${ui.primaryCtaBase} ${ui.primaryCtaLime}`}
            href={EMAIL_LINK}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
          >
            Zapytaj o pełne wdrożenie
            <ArrowIcon />
          </motion.a>
        </div>
        <div className={ui.buildPackageScope}>
          <p className={ui.utilityLabel}>W pakiecie</p>
          <ul className={ui.buildPackageList}>
            {fullBuildIncludes.map((item, index) => (
              <li className={ui.buildPackageItem} key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal className={ui.buildExamplesHeading}>
        <p className={ui.utilityLabel}>Przykładowe rozwiązania</p>
        <p>Technologia wynika z procesu, nie odwrotnie.</p>
      </Reveal>
      <div className={ui.buildGrid}>
        {buildOptions.map((option, index) => (
          <Reveal className={ui.buildCard} delay={index * 0.06} key={option.title}>
            <span className={ui.buildIndex}>0{index + 1}</span>
            <h3 className={ui.buildTitle}>{option.title}</h3>
            <p className={ui.buildCopy}>{option.description}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className={ui.buildNote}>
        <strong className={ui.buildNoteStrong}>Pełne wdrożenie, ale bez pompowania zakresu.</strong>
        <span className={ui.buildNoteCopy}>
          Najpierw uruchamiamy najmniejszą wersję, która rozwiązuje kosztowny problem. Kolejne
          elementy dokładamy dopiero wtedy, gdy produkt udowodni ich sens.
        </span>
      </Reveal>
    </section>
  );
}

function CasesSection() {
  const reduce = useReducedMotion();
  return (
    <section className={ui.casesSection} id="realizacje">
      <Reveal className={ui.sectionHeading}>
        <div>
          <p className={ui.eyebrow}>Dowód zamiast deklaracji</p>
          <h2 className={ui.sectionTitle}>Buduję rzeczy, których ludzie naprawdę używają.</h2>
        </div>
        <p className={ui.sectionIntro}>
          Od złożonej platformy produktowej, przez własną aplikację w App Store, po prosty i
          skuteczny web. Dobieram poziom rozwiązania do problemu.
        </p>
      </Reveal>
      <div className={ui.casesGrid}>
        {cases.map((project, index) => (
          <Reveal
            className={index === 0 ? ui.caseWrapFeatured : ''}
            delay={index * 0.05}
            key={project.name}
          >
            <motion.a
              className={`${ui.caseCard} ${index === 0 ? ui.caseCardFeatured : ui.caseCardRegular}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? undefined : { y: -5 }}
              transition={{ type: 'spring', stiffness: 360, damping: 32 }}
            >
              <div className={ui.caseTopline}>
                <span>{project.type}</span>
                <ExternalArrow />
              </div>
              <h3 className={ui.caseTitle}>{project.name}</h3>
              <p
                className={`${ui.caseCopy} ${index === 0 ? ui.caseCopyFeatured : ui.caseCopyRegular}`}
              >
                {project.description}
              </p>
              <span className={ui.caseLink}>{new URL(project.href).hostname}</span>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={ui.footer}>
      <div className={ui.footerIdentity}>
        <strong className={ui.footerName}>Ilya Dolotov</strong>
        <span className={ui.footerRole}>Product Engineer</span>
      </div>
      <div className={ui.footerLinks}>
        <a
          className={ui.footerLink}
          href="https://github.com/snacksncode"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className={ui.footerLink}
          href="https://fenneplanner.com"
          target="_blank"
          rel="noreferrer"
        >
          Fenne
        </a>
        <a className={ui.footerLink} href={EMAIL_LINK}>
          E-mail
        </a>
      </div>
      <span className={ui.footerYear}>© {new Date().getFullYear()}</span>
    </footer>
  );
}

export function OfferPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className={ui.viewportFrame}>
        <main className={ui.siteShell}>
          <Header />
          <Hero />
          <ProblemsSection />
          <SprintSection />
          <BuildSection />
          <CasesSection />
          <Footer />
        </main>
      </div>
    </MotionConfig>
  );
}
