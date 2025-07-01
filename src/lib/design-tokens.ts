export const designTokens = {
  
  spacing: {
    section: "gap-16 md:gap-24 lg:gap-32",
    container: "max-w-[960px] mx-auto px-4 sm:px-8 md:px-16",
  },
  typography: {
    hero: "text-[32px] lg:text-[40px] font-normal tracking-tighter leading-9 lg:leading-12",
    section: "text-xl font-medium text-zinc-400",
  },
} as const

export const motion = {
  expressive: {
    spatial: {
      fast: "transition-transform duration-[350ms] ease-[cubic-bezier(0.42,1.67,0.21,0.90)]",
      default: "transition-transform duration-[500ms] ease-[cubic-bezier(0.38,1.21,0.22,1)]",
      slow: "transition-transform duration-[650ms] ease-[cubic-bezier(0.39,1.29,0.35,0.98)]",
    },
    effects: {
      fast: "transition-all duration-[150ms] ease-[cubic-bezier(0.31,0.94,0.34,1)]",
      default: "transition-all duration-[200ms] ease-[cubic-bezier(0.34,0.80,0.34,1)]",
      slow: "transition-all duration-[300ms] ease-[cubic-bezier(0.34,0.88,0.34,1)]",
    },
  },
} as const;


export const color = {
  light: {
  // === PRIMARY: Laranja Neon ===
  primary: '#FF6A00',             // Laranja neon puro, explosivo
  onPrimary: '#FFFFFF',           // Branco, contraste forte
  primaryContainer: '#FFD7AE',    // Laranja pastel, suave pra fundo
  onPrimaryContainer: '#3A1900',  // Marrom escuro, ótimo contraste

  primaryFixed: '#FF9A47',        // Laranja mais claro, fixo
  primaryFixedDim: '#FF8000',     // Laranja vivo para active
  onPrimaryFixed: '#2D1800',
  onPrimaryFixedVariant: '#FFF4E6',

  // === SECONDARY: Peach moderno (harmoniza e suaviza) ===
  secondary: '#FFC07A',           // Peach suave, apoio visual
  onSecondary: '#3B2600',
  secondaryContainer: '#FFF2DD',  // Peach claro para containers
  onSecondaryContainer: '#3C2600',

  secondaryFixed: '#FFD09E',
  secondaryFixedDim: '#FFBE70',
  onSecondaryFixed: '#422E1A',
  onSecondaryFixedVariant: '#FFF8EC',

  // === TERTIARY: Chartreuse Neon ===
  tertiary: '#C5FA00',            // Chartreuse digital, super expressivo
  onTertiary: '#253200',          // Verde oliva escuro, contraste perfeito
  tertiaryContainer: '#F4FFC2',   // Chartreuse pastel, para fundo
  onTertiaryContainer: '#233000',

  tertiaryFixed: '#EAFF83',
  tertiaryFixedDim: '#D3F757',
  onTertiaryFixed: '#253200',
  onTertiaryFixedVariant: '#F9FFEB',

  // === ERROR: Vermelho Material ===
  error: '#D32F2F',
  onError: '#FFFFFF',
  errorContainer: '#FFD7D7',
  onErrorContainer: '#430000',

  // === BACKGROUND / SURFACE ===
  background: '#F7F6F3',         // Off-white quase neutro, equilibra energia
  onBackground: '#161616',       // Quase preto, altíssimo contraste

  surfaceDim: '#ECE8DE',         // Areia sutil, para áreas de menos destaque
  surface: '#FAF7F1',            // Off-white cremoso, levemente quente
  surfaceBright: '#FFFDF9',      // Quase branco, fresco e luminoso

  surfaceContainerLowest: '#FFFFFF', // Branco puro, para floating cards
  surfaceContainerLow: '#F9F3EA',   // Creme delicado, lembra papel claro
  surfaceContainer: '#F3E7D4',      // Creme latte, perfeito pra cards
  surfaceContainerHigh: '#EFE0C8',  // Bege sofisticado
  surfaceContainerHighest: '#EAD3B7', // Creme quase “couro claro”

  onSurface: '#221C15',          // Marrom escuro, contraste ideal nos cremes
  onSurfaceVariant: '#665847',   // Taupe/marrom claro para ícones, divisórias
  outline: '#BCA480',            // Bege médio, elegante pra bordas
  outlineVariant: '#E5DBC5',     // Creme claro pra divisórias mais suaves

  // === INVERSE & EXTRAS ===
  inverseSurface: '#222522',     // Quase preto, para dark-overlays
  inverseOnSurface: '#FFFFFF',
  inversePrimary: '#FFD099',     // Laranja pastel para dark mode

  scrim: '#00000099',
  shadow: '#00000033',
},



  dark: {
    // === PRIMARY: Laranja vivo adaptado ===
    primary: '#ffae60',
    onPrimary: '#331a00',
    primaryContainer: '#ff6a00',
    onPrimaryContainer: '#fff6ec',

    primaryFixed: '#ffb97a',
    primaryFixedDim: '#ff9547',
    onPrimaryFixed: '#140900',
    onPrimaryFixedVariant: '#ffebd1',

    // === SECONDARY: Chartreuse ===
    secondary: '#eaff83',
    onSecondary: '#222d00',
    secondaryContainer: '#c5fa00',
    onSecondaryContainer: '#212800',

    secondaryFixed: '#c5fa00',
    secondaryFixedDim: '#eaff83',
    onSecondaryFixed: '#263800',
    onSecondaryFixedVariant: '#f4ffc2',

    // === TERTIARY: Turquesa/azul ===
    tertiary: '#87ebeb',
    onTertiary: '#002020',
    tertiaryContainer: '#14c9c9',
    onTertiaryContainer: '#e3ffff',

    tertiaryFixed: '#14c9c9',
    tertiaryFixedDim: '#87ebeb',
    onTertiaryFixed: '#002424',
    onTertiaryFixedVariant: '#aef5f5',

    // === ERROR ===
    error: '#ff8a80',
    onError: '#560000',
    errorContainer: '#d32f2f',
    onErrorContainer: '#ffe2e2',

    // === BACKGROUND / SURFACE ===
    background: '#191b14',
    onBackground: '#f7f6f3',

    surface: '#222622',
    surfaceDim: '#17191b',
    surfaceBright: '#232625',

    surfaceContainerLowest: '#141612',
    surfaceContainerLow: '#1e1f1a',
    surfaceContainer: '#232625',
    surfaceContainerHigh: '#282a27',
    surfaceContainerHighest: '#2e302e',

    onSurface: '#e5e4df',
    onSurfaceVariant: '#bdbdbf',

    // === OUTLINE ===
    outline: '#474748',
    outlineVariant: '#232325',

    // === INVERSE & EXTRAS ===
    inverseSurface: '#f7f6f3',
    inverseOnSurface: '#1a1b14',
    inversePrimary: '#ff6a00',

    scrim: '#000000cc',
    shadow: '#00000088',
  }
} as const;