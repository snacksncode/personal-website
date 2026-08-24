const sectionBase =
  'relative px-[var(--page-pad)] py-[var(--section-gap)] max-[760px]:py-16 [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-[1600px]';

const displayHeading =
  'm-0 [font-family:var(--display)] font-[790] tracking-[-0.04em] leading-[0.98]';

const utilityLabel =
  '[font-family:var(--utility)] text-[0.65rem] font-bold tracking-[0.12em] uppercase';

export const ui = {
  viewportFrame: 'min-h-svh min-w-0',
  siteShell:
    'relative mx-auto max-w-[1920px] overflow-clip bg-[var(--paper)] shadow-[0_0_80px_rgb(0_0_0_/_28%)] min-[1921px]:border-x min-[1921px]:border-white/20',

  header:
    'absolute inset-x-0 top-0 z-30 grid min-h-[5.5rem] grid-cols-[1fr_auto_1fr] items-center px-[var(--page-pad)] text-[var(--surface)] max-[760px]:min-h-[4.7rem] max-[760px]:grid-cols-[1fr_auto]',
  wordmark:
    'inline-flex min-h-11 items-center gap-3 justify-self-start text-[0.9rem] font-[720] tracking-[-0.02em] max-[760px]:text-[0.8rem]',
  wordmarkMark:
    'grid aspect-square w-8 place-items-center rounded-full border border-current [font-family:var(--utility)] text-[0.66rem] max-[760px]:w-[1.8rem]',
  nav: 'flex items-center gap-8 text-[0.78rem] font-[650] max-[760px]:hidden',
  navLink: 'underline-offset-[0.35rem] hover:underline',
  navCta:
    'inline-flex min-h-11 items-center gap-[0.65rem] justify-self-end border-b border-current text-[0.8rem] font-[720] max-[760px]:text-[0.72rem] [&>svg]:aspect-square [&>svg]:w-[1.1rem] [&>svg]:shrink-0 max-[760px]:[&>svg]:hidden',

  hero: 'relative min-h-[min(1000px,100svh)] overflow-hidden bg-[var(--ink)] text-[var(--surface)] max-[1100px]:min-h-0',
  heroLayout:
    'relative z-[3] mx-auto grid min-h-[min(940px,100svh)] w-full max-w-[1680px] grid-cols-[minmax(0,1.04fr)_minmax(31rem,0.96fr)] items-center gap-[clamp(2.5rem,5vw,6rem)] px-[var(--page-pad)] pb-32 pt-36 max-[1100px]:min-h-0 max-[1100px]:grid-cols-1 max-[1100px]:pb-32 max-[1100px]:pt-36 max-[760px]:gap-10 max-[760px]:pb-20 max-[760px]:pt-[7.5rem]',
  heroCopy: 'relative z-[5] max-[1100px]:max-w-[54rem]',
  eyebrow:
    "m-0 mb-[1.4rem] inline-flex items-center gap-[0.7rem] [font-family:var(--utility)] text-[0.68rem] font-bold leading-tight tracking-[0.14em] uppercase before:h-0.5 before:w-[1.45rem] before:shrink-0 before:bg-current before:content-['']",
  heroTitle: `${displayHeading} max-w-[13ch] text-[clamp(3.4rem,5.8vw,6rem)] leading-[0.91] [&>span]:block max-[1100px]:text-[clamp(4rem,9vw,6rem)] max-[760px]:max-w-[12ch] max-[760px]:text-[clamp(3.15rem,14.8vw,4rem)]`,
  heroAccent: 'text-[var(--accent)]',
  heroLead:
    'mt-8 max-w-[42rem] text-[clamp(1.04rem,1.25vw,1.28rem)] leading-[1.55] text-[color-mix(in_srgb,var(--surface)_78%,transparent)] max-[760px]:mt-6 max-[760px]:text-base',
  heroActions: 'mt-9 flex flex-wrap items-center gap-x-6 gap-y-[1.1rem] max-[760px]:items-stretch',
  textLink:
    'inline-flex min-h-11 items-center text-[0.88rem] font-[680] underline-offset-[0.35rem] hover:underline',
  primaryCtaBase:
    'inline-flex min-h-[54px] items-center justify-center gap-4 border border-[var(--ink)] px-[1.35rem] py-[0.85rem] text-[0.9rem] font-[760] max-[760px]:w-full max-[760px]:justify-between [&>svg]:aspect-square [&>svg]:w-[1.1rem] [&>svg]:shrink-0',
  primaryCtaLime: 'bg-[var(--accent)] text-[var(--ink)] shadow-[5px_5px_0_var(--accent-2)]',
  primaryCtaDark: 'bg-[var(--ink)] text-[var(--surface)] shadow-[5px_5px_0_var(--accent)]',
  heroFacts:
    'mt-8 flex flex-wrap gap-x-6 gap-y-[0.6rem] [font-family:var(--utility)] text-[0.64rem] uppercase text-[color-mix(in_srgb,var(--surface)_78%,transparent)] [&_strong]:font-bold [&_strong]:text-[var(--surface)] max-[760px]:grid max-[760px]:grid-cols-2',
  heroOrb: 'pointer-events-none absolute z-[1] aspect-square rounded-full',
  heroOrbOne:
    '-right-40 -top-56 w-[34rem] border-[7rem] border-[var(--accent-3)] opacity-[0.86] max-[760px]:-right-36 max-[760px]:-top-36 max-[760px]:w-[23rem] max-[760px]:border-[4.5rem]',
  heroOrbTwo:
    'bottom-28 right-[43%] w-28 bg-[var(--accent-2)] max-[1100px]:bottom-20 max-[1100px]:right-[8%] max-[760px]:hidden',

  contactFallback:
    'contact-fallback mt-4 flex flex-wrap items-center gap-x-3 gap-y-[0.35rem] [font-family:var(--utility)] text-[0.68rem] leading-[1.45] max-[760px]:items-start max-[760px]:[&>span:first-child]:basis-full',
  contactHint: 'opacity-75',
  contactLink: 'min-h-11 content-center font-[750] underline underline-offset-4',
  contactButton:
    'min-h-11 cursor-pointer rounded-none border border-current bg-transparent px-3 py-2 font-[750]',
  contactButtonLight: 'text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--surface)]',
  contactButtonDark: 'text-[var(--surface)] hover:bg-[var(--surface)] hover:text-[var(--ink)]',
  sectionPaper: `${sectionBase} bg-[var(--paper)]`,
  sectionCobalt: `${sectionBase} bg-[var(--accent-3)] text-[var(--surface)]`,
  sectionHeading:
    'mb-[clamp(3rem,5vw,5rem)] grid grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] items-end gap-[clamp(2rem,6vw,8rem)] max-[760px]:grid-cols-1 max-[760px]:gap-6',
  sectionTitle: `${displayHeading} max-w-[15ch] text-[clamp(2.6rem,5.2vw,6rem)] max-[760px]:text-[clamp(2.7rem,13vw,4.2rem)]`,
  sectionIntro: 'm-0 max-w-xl text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.6] text-[var(--muted)]',
  sectionIntroLight:
    'm-0 max-w-xl text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.6] text-[var(--surface)]',

  problemGrid:
    'grid grid-cols-3 border-l border-t border-[var(--line)] max-[1100px]:grid-cols-2 max-[760px]:grid-cols-1',
  problemCard:
    'relative min-h-[23rem] border-b border-r border-[var(--line)] bg-[var(--surface)] p-[clamp(1.35rem,2.2vw,2.3rem)] max-[760px]:min-h-0',
  problemIndex: '[font-family:var(--utility)] text-[0.72rem]',
  problemSignal:
    'absolute right-5 top-5 max-w-36 border border-[var(--line)] px-2 py-[0.35rem] text-right [font-family:var(--utility)] text-[0.55rem] tracking-[0.06em] uppercase text-[var(--muted)]',
  problemTitle:
    'mb-4 mt-32 max-w-[12ch] text-[clamp(1.55rem,2.1vw,2.2rem)] leading-[1.03] tracking-[-0.04em] max-[760px]:mt-16 max-[760px]:text-[1.55rem]',
  problemCopy: 'm-0 text-[0.95rem] leading-[1.55] text-[var(--muted)]',
  bridge:
    'mt-8 grid rotate-[-0.45deg] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_auto] items-center gap-8 bg-[var(--accent-2)] p-[clamp(1.35rem,2.5vw,2.2rem)] [&>svg]:aspect-square [&>svg]:w-[1.1rem] [&>svg]:shrink-0 max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-4',
  bridgeLead: 'text-[0.9rem] leading-[1.45] max-[760px]:col-span-full',
  bridgeStrong: 'text-[clamp(1.15rem,2vw,1.7rem)] tracking-[-0.035em]',

  processGrid:
    'mb-[clamp(3rem,6vw,6rem)] grid grid-cols-3 border-t border-white/30 max-[760px]:grid-cols-1',
  processStep:
    'min-h-64 border-r border-white/30 py-6 pr-8 max-[760px]:min-h-0 max-[760px]:border-b max-[760px]:border-r-0 max-[760px]:px-0 max-[760px]:pb-[2.3rem] max-[760px]:pt-6',
  processStepInset: 'pl-8 max-[760px]:pl-0',
  processStepLast: 'border-r-0',
  utilityLabel,
  processTitle: 'mb-3 mt-16 text-[clamp(1.5rem,2.3vw,2.4rem)] tracking-[-0.04em] max-[760px]:mt-10',
  processCopy: 'm-0 max-w-[23rem] leading-[1.55] text-[var(--surface)]',
  offerGrid:
    'grid grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)] gap-[clamp(1.5rem,3vw,3rem)] max-[1100px]:grid-cols-1',
  pricePanel:
    'self-start bg-[var(--accent)] p-[clamp(2rem,4vw,4rem)] text-[var(--ink)] max-[1100px]:grid max-[1100px]:grid-cols-[1fr_auto] max-[1100px]:items-end max-[1100px]:gap-4 max-[760px]:block',
  priceLabel: `${utilityLabel} mb-[clamp(4rem,8vw,8rem)] max-[1100px]:col-span-full max-[1100px]:mb-12 max-[760px]:mb-16`,
  price:
    'm-0 text-[clamp(4rem,7.5vw,8rem)] font-[820] leading-[0.8] tracking-[-0.04em] text-[var(--ink)] max-[760px]:text-[4.8rem]',
  priceMeta: 'mt-4 text-[0.95rem] font-bold max-[1100px]:pb-2',
  durationRow:
    'mt-[clamp(3rem,5vw,5rem)] flex items-center justify-between gap-4 border-t border-[color-mix(in_srgb,var(--ink)_35%,transparent)] pt-4 max-[1100px]:col-span-full max-[760px]:mt-12',
  durationLabel: '[font-family:var(--utility)] text-[0.65rem] uppercase',
  deliverablesPanel: 'border border-white/30 p-[clamp(2rem,4vw,4rem)]',
  deliverablesList: 'mt-10 list-none p-0',
  deliverable:
    'grid grid-cols-[2rem_1fr] gap-4 border-t border-white/20 py-4 text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.4]',
  deliverableMark: '[font-family:var(--utility)] text-[var(--accent)]',
  scopeNote:
    'mt-8 border-l-[3px] border-[var(--accent-2)] pl-4 text-[0.87rem] leading-[1.55] text-[var(--surface)] [&>strong]:mb-[0.3rem] [&>strong]:block',
  conversion:
    'sprint-conversion mt-[clamp(1.5rem,3vw,3rem)] grid grid-cols-[minmax(17rem,0.82fr)_minmax(0,1.18fr)] max-[1100px]:grid-cols-1',
  conversionProof:
    'flex flex-col justify-center bg-[var(--ink)] p-[clamp(2rem,4vw,4rem)] text-[var(--surface)]',
  conversionProofLabel:
    'mb-[clamp(2.5rem,5vw,5rem)] [font-family:var(--utility)] text-[0.68rem] tracking-[0.1em] uppercase',
  conversionMetric:
    'text-[clamp(1.8rem,3.4vw,3.6rem)] leading-[1.05] tracking-[-0.04em] text-[var(--accent)]',
  conversionProofNote:
    'mt-6 max-w-[36ch] [font-family:var(--utility)] text-[0.68rem] leading-[1.55] text-[var(--surface)]',
  conversionAction: 'bg-[var(--accent-2)] p-[clamp(2rem,4vw,4rem)] text-[var(--ink)]',
  conversionTitle:
    'm-0 max-w-[14ch] text-[clamp(2rem,4vw,4.4rem)] leading-[0.98] tracking-[-0.04em]',
  conversionCopy: 'mb-8 mt-6 max-w-[48ch] text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.55]',
  directWorkNote:
    'mt-6 max-w-[52ch] border-t border-[color-mix(in_srgb,var(--ink)_28%,transparent)] pt-4 [font-family:var(--utility)] text-[0.68rem] leading-[1.55]',

  buildPackage:
    'mb-8 grid grid-cols-[minmax(0,1.18fr)_minmax(22rem,0.82fr)] border border-[var(--ink)] bg-[var(--ink)] text-[var(--surface)] shadow-[14px_14px_0_var(--accent-2)] max-[900px]:grid-cols-1 max-[760px]:shadow-[8px_8px_0_var(--accent-2)]',
  buildPackagePitch:
    'flex flex-col items-start p-[clamp(2rem,4vw,4.5rem)] max-[900px]:border-b max-[900px]:border-white/20',
  buildPackageTitle:
    'mb-6 mt-[clamp(3rem,6vw,6rem)] max-w-[12ch] text-[clamp(2.5rem,5.5vw,6rem)] font-[790] leading-[0.91] tracking-[-0.05em] max-[760px]:mt-12 max-[760px]:text-[clamp(2.7rem,13vw,4.2rem)]',
  buildPackageCopy:
    'mb-8 max-w-[48rem] text-[clamp(1rem,1.25vw,1.18rem)] leading-[1.6] text-[color-mix(in_srgb,var(--surface)_76%,transparent)]',
  buildPackageScope: 'bg-[var(--accent-2)] p-[clamp(2rem,3.5vw,3.8rem)] text-[var(--ink)]',
  buildPackageList: 'mt-[clamp(3rem,6vw,6rem)] list-none p-0 max-[760px]:mt-10',
  buildPackageItem:
    'grid grid-cols-[2.3rem_1fr] gap-4 border-t border-[color-mix(in_srgb,var(--ink)_35%,transparent)] py-5 text-[clamp(1rem,1.3vw,1.2rem)] font-[680] leading-[1.35] [&>span]:[font-family:var(--utility)] [&>span]:text-[0.62rem] [&>span]:font-normal',
  buildExamplesHeading:
    'mb-4 mt-[clamp(4rem,7vw,7rem)] flex items-end justify-between gap-8 [&>p:last-child]:max-w-sm [&>p:last-child]:text-right [&>p:last-child]:text-[0.9rem] [&>p:last-child]:text-[var(--muted)] max-[760px]:items-start max-[760px]:[&>p:last-child]:text-left',
  buildGrid: 'grid grid-cols-3 border-l border-t border-[var(--line)] max-[760px]:grid-cols-1',
  buildCard:
    'min-h-80 border-b border-r border-[var(--line)] bg-[var(--surface)] p-[clamp(1.5rem,2.8vw,2.8rem)] max-[760px]:min-h-0',
  buildIndex: '[font-family:var(--utility)] text-[0.65rem]',
  buildTitle:
    'mb-4 mt-20 max-w-[13ch] text-[clamp(1.6rem,2.25vw,2.35rem)] leading-[1.05] tracking-[-0.04em] max-[760px]:mt-8',
  buildCopy: 'm-0 max-w-96 leading-[1.55] text-[var(--muted)]',
  buildNote:
    'mt-6 grid grid-cols-[0.8fr_1.2fr] items-center gap-12 border border-[var(--ink)] bg-[var(--accent)] p-[clamp(1.4rem,2.5vw,2.3rem)] max-[760px]:grid-cols-1 max-[760px]:gap-4',
  buildNoteStrong: 'text-[clamp(1.3rem,2.3vw,2rem)] tracking-[-0.04em]',
  buildNoteCopy: 'leading-[1.55]',

  casesSection: `${sectionBase} border-t border-[var(--line)] bg-[var(--paper)]`,
  casesGrid: 'grid grid-cols-2 gap-6 max-[760px]:grid-cols-1',
  caseWrapFeatured: 'col-span-full max-[760px]:col-auto',
  caseCard: 'relative flex flex-col border border-[var(--line)] p-[clamp(1.5rem,3.2vw,3.2rem)]',
  caseCardRegular: 'min-h-[22rem] bg-[var(--surface)] max-[760px]:min-h-72',
  caseCardFeatured: 'min-h-[26rem] bg-[var(--ink)] text-[var(--surface)] max-[760px]:min-h-80',
  caseTopline:
    'flex items-center justify-between [font-family:var(--utility)] text-[0.66rem] tracking-[0.09em] uppercase [&>svg]:aspect-square [&>svg]:w-[1.15rem]',
  caseTitle:
    'mb-4 mt-auto text-[clamp(2.7rem,6vw,6rem)] leading-[0.9] tracking-[-0.04em] max-[760px]:text-[3rem]',
  caseCopy: 'm-0 max-w-[47rem] text-[clamp(0.95rem,1.25vw,1.18rem)] leading-[1.55]',
  caseCopyRegular: 'text-[var(--muted)]',
  caseCopyFeatured: 'text-[color-mix(in_srgb,var(--surface)_72%,transparent)]',
  caseLink:
    'mt-6 [font-family:var(--utility)] text-[0.68rem] font-bold underline underline-offset-[0.3rem]',

  footer:
    'grid min-h-36 grid-cols-[1fr_auto_auto] items-center gap-12 bg-[var(--ink)] px-[var(--page-pad)] py-8 text-[var(--surface)] max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-8',
  footerIdentity: 'flex flex-col gap-1',
  footerName: 'text-[0.95rem]',
  footerRole: 'text-[0.72rem] text-[color-mix(in_srgb,var(--surface)_78%,transparent)]',
  footerLinks: 'flex gap-6 text-[0.8rem] max-[760px]:col-span-full max-[760px]:row-start-2',
  footerLink: 'inline-flex min-h-11 items-center underline-offset-[0.35rem] hover:underline',
  footerYear:
    '[font-family:var(--utility)] text-[0.72rem] text-[color-mix(in_srgb,var(--surface)_78%,transparent)]',
} as const;

export const flowUi = {
  container:
    'decision-flow relative h-[clamp(29rem,36vw,34rem)] w-full max-w-[45rem] justify-self-end overflow-hidden border border-white/40 bg-[color-mix(in_srgb,var(--ink)_86%,white_14%)] shadow-[18px_18px_0_color-mix(in_srgb,var(--accent-3)_76%,transparent)] max-[1100px]:h-[33rem] max-[1100px]:max-w-none max-[1100px]:justify-self-stretch max-[760px]:h-[29rem] max-[760px]:shadow-[9px_9px_0_color-mix(in_srgb,var(--accent-3)_76%,transparent)]',
  nodeContent:
    'flow-node-content flex min-h-[102px] flex-col justify-center p-[0.9rem] max-[760px]:min-h-[72px] max-[760px]:p-[0.65rem]',
  nodeKicker:
    'mb-2 [font-family:var(--utility)] text-[0.54rem] font-bold tracking-[0.1em] uppercase',
  nodeTitle: 'text-base leading-[1.08] tracking-[-0.035em] max-[760px]:text-[0.8rem]',
  nodeDetail:
    'mt-[0.35rem] text-[0.66rem] leading-tight text-[color-mix(in_srgb,currentColor_72%,transparent)] max-[760px]:text-[0.54rem]',
  caption:
    'flow-caption pointer-events-none absolute bottom-4 left-4 z-[5] m-0 [font-family:var(--utility)] text-[0.57rem] tracking-[0.09em] uppercase text-[color-mix(in_srgb,var(--surface)_72%,transparent)] max-[760px]:hidden',
} as const;
