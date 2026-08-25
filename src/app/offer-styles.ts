const display = 'm-0 [font-family:var(--display)] uppercase tracking-[-0.015em]';

const content = 'mx-auto w-full max-w-[1500px]';
const cta =
  'inline-flex min-h-14 w-full items-center justify-between gap-8 px-6 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0';

export const ui = {
  viewport: 'min-h-svh bg-[var(--field-deep)] min-[1921px]:px-8',
  shell:
    'relative mx-auto max-w-[1920px] overflow-clip border-x border-[var(--line)] bg-[var(--ground)] text-[var(--text)]',

  header: `${content} grid grid-cols-[minmax(19rem,1fr)_auto] items-end gap-x-[clamp(2rem,4vw,5rem)] gap-y-6 border-b border-[var(--line)] px-[var(--page-pad)] pb-[clamp(1.75rem,3vw,2.5rem)] pt-[clamp(2.5rem,5vw,4.5rem)] [&>*]:min-w-0 max-[1080px]:grid-cols-1 max-[620px]:items-start`,
  wordmark: 'flex min-h-11 flex-col items-start justify-end gap-2 no-underline',
  wordmarkName:
    '[font-family:var(--display)] text-[clamp(1.9rem,2.8vw,2.75rem)] font-extrabold leading-none tracking-[-0.03em] text-[var(--text)]',
  wordmarkRole: 'text-[clamp(0.875rem,1.1vw,1rem)] font-medium leading-[1.45] text-[var(--muted)]',
  nav: 'flex items-center gap-[clamp(1.5rem,3vw,3rem)] text-sm max-[1080px]:hidden',
  navLink:
    'relative inline-flex min-h-12 items-center font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--lime)] after:transition-transform hover:text-[var(--lime)] hover:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none',
  hero: `${content} grid min-h-[calc(100svh-9rem)] grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] items-end gap-[clamp(3rem,8vw,9rem)] px-[var(--page-pad)] py-[clamp(4rem,9vw,8rem)] [&>*]:min-w-0 max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:items-start max-[540px]:gap-8 max-[540px]:py-12`,
  heroTitle: `${display} balance max-w-[13ch] text-[clamp(3.25rem,8.1vw,6rem)] font-extrabold leading-[0.98] max-[540px]:max-w-none max-[540px]:text-[clamp(3rem,15vw,4.25rem)]`,
  accent: 'text-[var(--lime)]',
  heroLead:
    'pretty mt-7 max-w-[46rem] text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.65] text-[var(--muted)] max-[540px]:mt-5 max-[540px]:text-base max-[540px]:leading-[1.55]',
  heroAction: 'flex flex-col items-start gap-4 pb-1 max-[540px]:gap-3',
  primaryCta: `${cta} bg-[var(--orange)] text-[var(--ground)]`,
  actionHint: 'pretty m-0 max-w-[28rem] text-sm leading-[1.55] text-[var(--muted)]',
  sprintHint: 'm-0 text-xs font-semibold text-[var(--lime)]',
  arrow: 'h-5 w-5 shrink-0',

  contact: 'flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--muted)]',
  contactOnOrange: 'flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--ground)]',
  contactLink:
    'inline-flex min-h-11 items-center font-semibold text-[var(--text)] underline underline-offset-4',
  contactLinkOnOrange:
    'inline-flex min-h-11 items-center font-bold text-[var(--ground)] underline decoration-[color-mix(in_srgb,var(--ground)_55%,transparent)] decoration-2 underline-offset-4 transition-opacity hover:opacity-70 motion-reduce:transition-none',
  copyButton:
    'min-h-11 cursor-pointer border-0 bg-transparent px-0 font-semibold text-[var(--lime)] underline underline-offset-4',
  copyButtonOnOrange:
    'min-h-11 cursor-pointer border-0 bg-transparent px-0 font-bold text-[var(--ground)] underline decoration-[color-mix(in_srgb,var(--ground)_55%,transparent)] decoration-2 underline-offset-4 transition-opacity hover:opacity-70 motion-reduce:transition-none',

  buildSection: 'w-full border-t border-[var(--line)] bg-[var(--field)]',
  buildContent: `${content}`,
  buildIntro:
    'grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] gap-x-[clamp(3rem,8vw,9rem)] gap-y-[clamp(2.5rem,5vw,5rem)] px-[var(--page-pad)] py-[var(--section-gap)] [&>*]:min-w-0 max-[1050px]:grid-cols-1',
  buildHeading: 'col-span-full max-[1050px]:col-span-1',
  eyebrow: 'mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[var(--lime)]',
  sectionTitle: `${display} text-[clamp(2.75rem,5.2vw,5rem)] font-bold leading-[0.96] max-[540px]:text-[clamp(2.75rem,12vw,3.5rem)]`,
  titleLine: 'block',
  sectionTitleQuiet: `${display} pretty max-w-[17ch] text-[clamp(2.25rem,3.8vw,3.75rem)] font-semibold leading-[1.02] max-[540px]:text-[clamp(2.25rem,10vw,3rem)]`,
  sectionLead:
    'pretty mt-7 max-w-[48rem] text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.65] text-[var(--muted)]',
  buildPromise:
    'm-0 flex self-end flex-col gap-2 border-t border-[var(--lime)] pt-5 text-[clamp(1rem,1.25vw,1.2rem)]',
  buildList:
    'grid grid-cols-3 gap-x-[clamp(2rem,5vw,5rem)] px-[var(--page-pad)] max-[1024px]:grid-cols-1 max-[1024px]:gap-y-10',
  buildItem: 'relative min-h-80 overflow-hidden py-10 max-[1024px]:min-h-64',
  buildItemNumber: `${display} pointer-events-none absolute -bottom-[0.22em] right-5 text-[clamp(12rem,20vw,21rem)] font-extrabold leading-[0.7] text-[color-mix(in_srgb,var(--lime)_11%,transparent)]`,
  buildItemTitle: `${display} balance relative z-10 text-[clamp(1.875rem,2.5vw,2.625rem)] font-semibold leading-[1.02] text-[var(--lime)]`,
  buildItemCopy:
    'pretty relative z-10 mt-5 max-w-[30rem] text-sm leading-[1.65] text-[var(--muted)]',

  sprintSection: `${content} grid grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] gap-x-[clamp(3rem,7vw,8rem)] gap-y-[clamp(3rem,5vw,5rem)] px-[var(--page-pad)] py-[var(--section-gap)] [&>*]:min-w-0 max-[1050px]:grid-cols-1`,
  sprintHeading: 'col-span-full',
  sprintTitle: `${display} pretty max-w-[24ch] text-[clamp(2.75rem,4.8vw,4.75rem)] font-semibold leading-[1.02] max-[540px]:text-[clamp(2.5rem,11vw,3.25rem)]`,
  sprintOffer: 'self-start',
  sprintLead:
    'pretty m-0 max-w-[48rem] text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.65] text-[var(--muted)]',
  priceBlock: 'mt-10 flex flex-col gap-2',
  price: `${display} text-[clamp(4rem,7vw,6rem)] font-extrabold leading-[0.9] text-[var(--lime)]`,
  priceMeta: 'text-sm font-semibold text-[var(--muted)]',
  sprintResult: 'self-start',
  resultTitle: 'text-[clamp(1.4rem,2vw,1.8rem)] font-semibold tracking-[-0.025em]',
  resultList: 'mt-5 border-t border-[var(--line)]',
  resultItem:
    'pretty border-b border-[var(--line)] py-5 pl-7 text-base leading-[1.6] text-[var(--muted)] before:-ml-7 before:mr-4 before:text-[var(--lime)] before:content-["+"]',
  honestyNote:
    'pretty mt-8 bg-[var(--orange)] p-6 text-sm font-semibold leading-[1.6] text-[var(--ground)]',
  secondaryCta: `${cta} mt-6 border border-[var(--lime)] text-[var(--lime)]`,

  workSection: `${content}`,
  workHeading:
    'grid grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.62fr)] items-end gap-[clamp(2rem,7vw,8rem)] px-[var(--page-pad)] py-[clamp(5rem,8vw,8rem)] [&>*]:min-w-0 max-[760px]:grid-cols-1 max-[760px]:items-start',
  workTitle: `${display} max-w-[12ch] text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.96] max-[540px]:text-[clamp(2.75rem,12vw,3.5rem)]`,
  workLead:
    'pretty m-0 max-w-[34rem] text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.65] text-[var(--muted)]',
  workList:
    'flex flex-col gap-[clamp(4.5rem,8vw,8rem)] px-[var(--page-pad)] pb-[var(--section-gap)]',
  workReveal: 'w-full',
  workProject:
    'group grid grid-cols-[minmax(15rem,0.44fr)_minmax(0,1.56fr)] items-center gap-[clamp(2.5rem,6vw,7rem)] text-current no-underline [&>*]:min-w-0 max-[900px]:grid-cols-1 max-[900px]:gap-7',
  workProjectFeatured: 'grid-cols-[minmax(15rem,0.4fr)_minmax(0,1.6fr)] max-[900px]:grid-cols-1',
  workProjectReverse: 'min-[901px]:grid-cols-[minmax(0,1.56fr)_minmax(15rem,0.44fr)]',
  workBody:
    'flex flex-col items-start justify-center py-6 max-[900px]:max-w-[42rem] max-[900px]:py-0',
  workBodyReverse: 'min-[901px]:order-2',
  workType: 'text-xs font-extrabold uppercase tracking-[0.14em] text-[var(--lime)]',
  workName: `${display} mt-5 text-[clamp(3rem,5vw,5.25rem)] font-extrabold leading-[0.92]`,
  workCopy:
    'pretty mt-5 max-w-[36rem] text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.65] text-[var(--muted)]',
  workLink:
    'mt-8 inline-flex min-h-12 items-center gap-4 bg-[var(--lime)] px-5 text-sm font-extrabold text-[var(--ground)] transition-colors group-hover:bg-[var(--orange)] motion-reduce:transition-none',
  workVisual: 'relative aspect-[16/10] overflow-hidden bg-[var(--field)]',
  workVisualReverse: 'min-[901px]:order-1',
  workImage:
    'object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.012] motion-reduce:transition-none motion-reduce:group-hover:scale-100',

  closeSection: 'w-full bg-[var(--orange)] text-[var(--ground)]',
  close: `${content} grid grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] items-end gap-x-[clamp(3rem,8vw,9rem)] gap-y-[clamp(2.5rem,5vw,5rem)] px-[var(--page-pad)] py-[clamp(4rem,8vw,7rem)] [&>*]:min-w-0 max-[900px]:grid-cols-1`,
  closeTitle: `${display} col-span-full text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.96] max-[900px]:col-span-1 max-[540px]:text-[clamp(2.5rem,11vw,3.25rem)]`,
  closeCopy: 'pretty m-0 max-w-[48rem] text-base leading-[1.65]',
  closeAction: 'flex flex-col items-start gap-3',
  darkCta: `${cta} bg-[var(--ground)] text-[var(--text)]`,

  footer: `${content} grid grid-cols-[1fr_auto_auto] items-center gap-10 border-t border-[var(--line)] px-[var(--page-pad)] py-8 max-[680px]:grid-cols-[1fr_auto]`,
  footerName: 'block text-sm font-bold',
  footerRole: 'mt-1 block text-xs text-[var(--muted)]',
  footerLinks: 'flex gap-6 text-xs max-[680px]:col-span-full max-[680px]:row-start-2',
  footerLink: 'inline-flex min-h-11 min-w-11 items-center justify-center hover:text-[var(--lime)]',
  footerYear: 'text-xs text-[var(--muted)]',

  mobileSticky:
    'fixed inset-x-0 bottom-0 z-50 hidden border-t border-[var(--ground)] bg-[var(--orange)] px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-[var(--ground)] max-[760px]:flex',
  mobileStickyLink: 'flex min-h-12 w-full items-center justify-between text-sm font-bold',
  mobileSafeArea: 'max-[760px]:pb-24',
} as const;
