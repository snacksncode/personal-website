'use client';

import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { type ReactNode, type RefObject, useEffect, useRef, useState } from 'react';
import { useCopyToClipboard } from '../hooks/use-copy-to-clipboard';
import { ui } from './offer-styles';

const EMAIL_ADDRESS = 'dolotov@hey.com';
const EMAIL_SUBJECT = 'Ręczna praca, którą chcemy usprawnić';
const EMAIL_BODY = `Cześć Ilya,

1. Co robimy ręcznie:
...

2. Kto na to czeka:
...

3. Jak często to się powtarza:
...

Dodatkowy kontekst:
...`;
const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

const buildExamples = [
  {
    title: 'Aplikacja webowa lub mobilna',
    copy: 'Kluczowa część twojej usługi działa dokładnie tak, jak potrzebuje tego firma i jej klienci.',
  },
  {
    title: 'Portal, sklep lub konfigurator',
    copy: 'Klient sam wybiera, zamawia, płaci i sprawdza status bez czekania na odpowiedź obsługi.',
  },
  {
    title: 'Panel dla zespołu',
    copy: 'Zespół obsługuje klientów, zamówienia i dokumenty w jednym miejscu, bez przekopywania maili i arkuszy.',
  },
];

const sprintOutcomes = [
  'Decyzję: budować własny system, kupić gotowe narzędzie czy zmienić sposób pracy.',
  'Najmniejszy sensowny zakres, ryzyka i listę rzeczy, które mogą poczekać.',
  'Plan wdrożenia z orientacyjnym budżetem i jasnym kolejnym krokiem.',
];

const projects = [
  {
    name: 'Fenne',
    type: 'Własny produkt · iOS',
    copy: 'Aplikacja mobilna do planowania posiłków. Zaprojektowana, zbudowana i opublikowana przeze mnie w App Store.',
    href: 'https://fenneplanner.com',
    image: '/projects/fenne-home.png',
    imageAlt: 'Strona główna aplikacji Fenne do planowania posiłków.',
    reverse: false,
  },
  {
    name: 'Better Off',
    type: 'Platforma społecznościowa · web',
    copy: 'Rozwijam część webową platformy, na której ludzie zapisują się na wydarzenia i poznają nowe osoby.',
    href: 'https://betteroffsocial.com',
    image: '/projects/better-off-home.png',
    imageAlt: 'Strona główna platformy społecznościowej Better Off.',
    reverse: true,
  },
  {
    name: 'Ranga',
    type: 'Strona usługowa',
    copy: 'Strona firmy księgowej, która porządkuje ofertę usług i prowadzi klienta prosto do kontaktu.',
    href: 'https://www.ranga.net.pl',
    image: '/projects/ranga-home.png',
    imageAlt: 'Strona główna firmy księgowej i audytorskiej Ranga.',
    reverse: false,
  },
];

const revealEase = [0.16, 1, 0.3, 1] as const;

type RevealDirection = 'up' | 'left' | 'right';

function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  amount = 0.22,
  crop = false,
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  amount?: number;
  crop?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(revealRef, {
    once: true,
    amount,
    margin: '0px 0px -8% 0px',
  });
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => setMotionReady(true), []);

  const offset =
    direction === 'left'
      ? { x: -36, y: 0 }
      : direction === 'right'
        ? { x: 36, y: 0 }
        : { x: 0, y: 28 };
  const visible = !motionReady || reduceMotion || isInView;

  return (
    <motion.div
      animate={
        visible
          ? { opacity: 1, x: 0, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }
          : {
              opacity: 0,
              ...offset,
              clipPath: crop ? 'inset(0% 0% 16% 0%)' : 'inset(0% 0% 0% 0%)',
            }
      }
      className={className}
      initial={false}
      ref={revealRef}
      transition={{
        duration: reduceMotion ? 0.01 : 0.64,
        delay: reduceMotion ? 0 : delay,
        ease: revealEase,
      }}
    >
      {children}
    </motion.div>
  );
}

function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg className={ui.arrow} viewBox="0 0 24 24" aria-hidden="true">
      {external ? (
        <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      ) : (
        <path d="M4 12h15M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      )}
    </svg>
  );
}

function ContactFallback({ onOrange = false }: { onOrange?: boolean }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [copyFailed, setCopyFailed] = useState(false);
  const copyStatus = copiedText === EMAIL_ADDRESS ? 'copied' : copyFailed ? 'error' : 'idle';

  async function copyEmail() {
    setCopyFailed(false);
    const copied = await copyToClipboard(EMAIL_ADDRESS);
    setCopyFailed(!copied);
  }

  return (
    <div className={onOrange ? ui.contactOnOrange : ui.contact}>
      <a className={onOrange ? ui.contactLinkOnOrange : ui.contactLink} href={EMAIL_LINK}>
        {EMAIL_ADDRESS}
      </a>
      <button
        className={onOrange ? ui.copyButtonOnOrange : ui.copyButton}
        type="button"
        onClick={copyEmail}
        aria-live="polite"
      >
        {copyStatus === 'copied'
          ? 'Skopiowano adres'
          : copyStatus === 'error'
            ? 'Zaznacz i skopiuj adres'
            : 'Kopiuj adres'}
      </button>
    </div>
  );
}

function Header() {
  return (
    <header className={ui.header}>
      <a className={ui.wordmark} href="#top" aria-label="Ilya Dolotov, początek strony">
        <span className={ui.wordmarkName}>Ilya Dolotov</span>
        <span className={ui.wordmarkRole}>Projektuję i buduję aplikacje dla firm.</span>
      </a>
      <nav className={ui.nav} aria-label="Główna nawigacja">
        <a className={ui.navLink} href="#wdrozenie">
          Pełne wdrożenie
        </a>
        <a className={ui.navLink} href="#sprint">
          Sprint 7 dni
        </a>
        <a className={ui.navLink} href="#realizacje">
          Realizacje
        </a>
      </nav>
    </header>
  );
}

function Hero({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  return (
    <section className={ui.hero} id="top" ref={sectionRef}>
      <div>
        <h1 className={ui.heroTitle}>
          Aplikacje, które <span className={ui.accent}>przejmują ręczną robotę.</span>
        </h1>
        <p className={ui.heroLead}>
          Jeśli zamówienia, wyceny albo obsługa klientów utknęły między mailem, Excelem i ręcznym
          pilnowaniem, buduję system, który przejmuje powtarzalne kroki i daje zespołowi jedno
          miejsce do pracy.
        </p>
      </div>
      <div className={ui.heroAction}>
        <a className={ui.primaryCta} href={EMAIL_LINK}>
          Opisz, co robicie ręcznie
          <ArrowIcon />
        </a>
        <p className={ui.actionHint}>
          Otworzy się gotowy e-mail z trzema pytaniami. Odpowiem, czy warto rozmawiać o własnym
          systemie.
        </p>
        <p className={ui.sprintHint}>Sprint decyzyjny: 7 dni roboczych · 9 000 PLN netto + VAT</p>
        <ContactFallback />
      </div>
    </section>
  );
}

function FullBuildSection() {
  return (
    <section className={ui.buildSection} id="wdrozenie" aria-labelledby="build-title">
      <div className={ui.buildContent}>
        <ScrollReveal className={ui.buildIntro} crop>
          <div className={ui.buildHeading}>
            <p className={ui.eyebrow}>Pełne wdrożenie</p>
            <h2 className={ui.sectionTitle} id="build-title">
              <span className={ui.titleLine}>Dostajesz działający system,</span>
              <span className={ui.titleLine}>nie sam kod.</span>
            </h2>
          </div>
          <p className={ui.sectionLead}>
            Najpierw ustalamy, co ma usprawnić firma. Potem projektuję sposób działania, buduję
            całość, podłączam płatności i używane przez firmę narzędzia, a na końcu uruchamiam
            system i stabilizuję go po starcie.
          </p>
          <p className={ui.buildPromise}>
            <strong>Masz jedną osobę odpowiedzialną za całość.</strong>
            <span>
              Rozmawiasz bezpośrednio ze mną od pierwszego spotkania po uruchomienie. Cenę
              poznajesz, gdy wiemy, co naprawdę trzeba zbudować.
            </span>
          </p>
        </ScrollReveal>
        <div className={ui.buildList}>
          {buildExamples.map((item, index) => (
            <ScrollReveal delay={index * 0.08} key={item.title} amount={0.18}>
              <article className={ui.buildItem}>
                <span className={ui.buildItemNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className={ui.buildItemTitle}>{item.title}</h3>
                <p className={ui.buildItemCopy}>{item.copy}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SprintSection() {
  return (
    <section className={ui.sprintSection} id="sprint" aria-labelledby="sprint-title">
      <ScrollReveal className={ui.sprintHeading} crop>
        <p className={ui.eyebrow}>Jak zaczynamy</p>
        <h2 className={ui.sprintTitle} id="sprint-title">
          Zanim zainwestujesz w pełne wdrożenie, ustalamy, co naprawdę ma sens.
        </h2>
      </ScrollReveal>
      <ScrollReveal className={ui.sprintOffer} direction="left">
        <p className={ui.sprintLead}>
          W 7 dni sprawdzam, gdzie firma traci czas, czego potrzebują klienci i jaki najmniejszy
          zakres rozwiąże problem. Jeśli wystarczy gotowe narzędzie albo zmiana sposobu pracy,
          powiem to wprost.
        </p>
        <div className={ui.priceBlock}>
          <strong className={ui.price}>9 000 PLN</strong>
          <span className={ui.priceMeta}>netto + VAT · 7 dni roboczych</span>
        </div>
      </ScrollReveal>
      <ScrollReveal className={ui.sprintResult} direction="right" delay={0.08}>
        <h3 className={ui.resultTitle}>Po tygodniu dostajesz:</h3>
        <ul className={ui.resultList}>
          {sprintOutcomes.map((outcome) => (
            <li className={ui.resultItem} key={outcome}>
              {outcome}
            </li>
          ))}
        </ul>
        <p className={ui.honestyNote}>
          Przed większą inwestycją wiesz, co budować, czego nie budować i ile może kosztować
          wdrożenie.
        </p>
        <a className={ui.secondaryCta} href={EMAIL_LINK}>
          Opisz, co robicie ręcznie
          <ArrowIcon />
        </a>
      </ScrollReveal>
    </section>
  );
}

function WorkSection() {
  return (
    <section className={ui.workSection} id="realizacje" aria-labelledby="work-title">
      <ScrollReveal className={ui.workHeading} crop>
        <div>
          <h2 className={ui.workTitle} id="work-title">
            Zobacz, co już działa.
          </h2>
        </div>
        <p className={ui.workLead}>
          Własna aplikacja mobilna, rozwój platformy i strona usługowa. Kliknij projekt, aby
          zobaczyć go na żywo.
        </p>
      </ScrollReveal>
      <div className={ui.workList}>
        {projects.map((project, index) => (
          <ScrollReveal
            className={ui.workReveal}
            direction={project.reverse ? 'right' : 'left'}
            delay={index === 0 ? 0 : 0.04}
            amount={0.16}
            crop
            key={project.name}
          >
            <a
              className={`${ui.workProject} ${project.reverse ? ui.workProjectReverse : ''}`}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name}. Otwórz projekt w nowej karcie`}
            >
              <div className={ui.workBody}>
                <span className={ui.workType}>{project.type.replace(' · ', ' / ')}</span>
                <strong className={ui.workName}>{project.name}</strong>
                <span className={ui.workCopy}>{project.copy}</span>
                <span className={ui.workLink}>
                  Zobacz na żywo
                  <ArrowIcon external />
                </span>
              </div>
              <div className={ui.workVisual}>
                <Image
                  className={ui.workImage}
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function CloseSection({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  return (
    <section className={ui.closeSection} aria-labelledby="close-title" ref={sectionRef}>
      <ScrollReveal className={ui.close} crop amount={0.18}>
        <h2 className={ui.closeTitle} id="close-title">
          <span className={ui.titleLine}>Masz proces, który</span>
          <span className={ui.titleLine}>działa tylko dlatego,</span>
          <span className={ui.titleLine}>że ktoś go pilnuje?</span>
        </h2>
        <p className={ui.closeCopy}>
          Wyślij trzy zdania: co robicie ręcznie, kto na to czeka i jak często problem wraca.
          Odpowiem, czy warto rozmawiać o własnym systemie.
        </p>
        <div className={ui.closeAction}>
          <a className={ui.darkCta} href={EMAIL_LINK}>
            Opisz, co robicie ręcznie
            <ArrowIcon />
          </a>
          <ContactFallback onOrange />
        </div>
      </ScrollReveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className={ui.footer}>
      <div>
        <strong className={ui.footerName}>Ilya Dolotov</strong>
        <span className={ui.footerRole}>Aplikacje dla firm</span>
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
        <a className={ui.footerLink} href={EMAIL_LINK}>
          E-mail
        </a>
      </div>
      <span className={ui.footerYear}>© {new Date().getFullYear()}</span>
    </footer>
  );
}

function MobileStickyAction({ visible }: { visible: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {visible ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className={ui.mobileSticky}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
        >
          <a className={ui.mobileStickyLink} href={EMAIL_LINK}>
            Opisz ręczną pracę
            <ArrowIcon />
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function useObservedElement(elementRef: RefObject<HTMLElement | null>, mode: 'past' | 'visible') {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setMatches(
        mode === 'visible'
          ? entry.isIntersecting
          : !entry.isIntersecting && entry.boundingClientRect.bottom < 0
      );
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, mode]);

  return matches;
}

export function OfferPage() {
  const heroRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLElement>(null);
  const heroPassed = useObservedElement(heroRef, 'past');
  const closeVisible = useObservedElement(closeRef, 'visible');

  return (
    <div className={ui.viewport}>
      <main className={`${ui.shell} ${ui.mobileSafeArea}`}>
        <Header />
        <Hero sectionRef={heroRef} />
        <FullBuildSection />
        <SprintSection />
        <WorkSection />
        <CloseSection sectionRef={closeRef} />
        <Footer />
      </main>
      <MobileStickyAction visible={heroPassed && !closeVisible} />
    </div>
  );
}
