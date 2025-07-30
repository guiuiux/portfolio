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
    primary: '#FF6A00',             // Botões principais, CTAs, ações principais
    onPrimary: '#FFFFFF',           // Texto/ícones sobre cor primary
    primaryContainer: '#FFD7AE',   // Fundo de cards, botões secundários, backgrounds de componentes
    onPrimaryContainer: '#3A1900', // Texto/ícones sobre primaryContainer

    primaryFixed: '#FF9A47',        // Estados fixos, hover, foco em primary
    primaryFixedDim: '#FF8000',     // Estado ativo / pressed de primary
    onPrimaryFixed: '#2D1800',      // Texto sobre primaryFixed
    onPrimaryFixedVariant: '#FFF4E6', // Texto sobre primaryFixed com contraste variante

    // === SECONDARY: Peach moderno ===
    secondary: '#FFAD60',           // Ações secundárias, links, botões alternativos
    onSecondary: '#442600',         // Texto/ícones em secondary
    secondaryContainer: '#FFF2DD',  // Fundo para cards ou backgrounds secundários
    onSecondaryContainer: '#3C2600',// Texto sobre secondaryContainer

    secondaryFixed: '#FFD09E',      // Estados fixos secundários
    secondaryFixedDim: '#FFBE70',   // Estado ativo secundário
    onSecondaryFixed: '#422E1A',    // Texto sobre secondaryFixed
    onSecondaryFixedVariant: '#FFF8EC', // Variante para texto sobre secondaryFixed

    // === TERTIARY: Chartreuse Neon ===
    tertiary: '#C5FA00',            // Detalhes, ícones, alertas leves, ações terciárias
    onTertiary: '#253200',          // Texto/ícones sobre tertiary
    tertiaryContainer: '#F4FFC2',   // Fundo de elementos terciários
    onTertiaryContainer: '#233000', // Texto sobre tertiaryContainer
    tertiaryFixed: '#EAFF83',       // Estado fixo terciário
    tertiaryFixedDim: '#D3F757',    // Estado ativo terciário
    onTertiaryFixed: '#253200',     // Texto sobre tertiaryFixed
    onTertiaryFixedVariant: '#F9FFEB', // Variante para texto terciário fixo

    // === ERROR ===
    error: '#D32F2F',               // Mensagens de erro, alertas
    onError: '#FFFFFF',             // Texto sobre error
    errorContainer: '#FFD7D7',      // Fundo para mensagens de erro
    onErrorContainer: '#430000',    // Texto sobre errorContainer

    // === BACKGROUND / SURFACE ===
    background: '#F7F6F3',          // Fundo geral da tela
    onBackground: '#161616',        // Texto primário em background

    surfaceDim: '#ECE8DE',          // Áreas menos importantes (cards menos destacados)
    surface: '#FAF7F1',             // Cards, superfícies principais
    surfaceBright: '#FFFDF9',       // Áreas mais claras, destaques sutis

    surfaceContainerLowest: '#FFFFFF', // Cards flutuantes, modal backgrounds
    surfaceContainerLow: '#F9F4EC',     // Containers de conteúdo
    surfaceContainer: '#F3E7D4',        // Cards e superfícies principais
    surfaceContainerHigh: '#EFE0C8',    // Áreas destacadas
    surfaceContainerHighest: '#EAD3B7', // Áreas com maior destaque visual

    onSurface: '#221C15',          // Texto em superfícies
    onSurfaceVariant: '#665847',   // Ícones, divisórias, textos secundários
    outline: '#BCA480',            // Bordas, contornos
    outlineVariant: '#E5DBC5',     // Divisórias suaves

    // === INVERSE & EXTRAS ===
    inverseSurface: '#222522',     // Sobreposições escuras, dark overlays
    inverseOnSurface: '#FFFFFF',   // Texto em inverseSurface
    inversePrimary: '#FFD099',     // Primary para dark mode

    scrim: '#00000099',            // Máscaras e overlays translucidos
    shadow: '#00000033',           // Sombras leves
  },

  dark: {
    // === PRIMARY: Laranja vivo adaptado ===
    primary: '#FF6A00',             // Usar cor primary clara e vibrante para CTAs e botões principais
    onPrimary: '#FFF4E6',           // Texto suave, para contrastar com primary vibrante
    primaryContainer: '#331A00',   // Fundo para botões/containers primários (escuro para dark)
    onPrimaryContainer: '#FFD7AE', // Texto sobre primaryContainer para leitura

    primaryFixed: '#FF9547',        // Estado fixo do primary (hover/focus)
    primaryFixedDim: '#FF8000',     // Estado ativo (pressed) do primary
    onPrimaryFixed: '#FFF4E6',      // Texto sobre primaryFixed para contraste suave
    onPrimaryFixedVariant: '#FFB97A', // Variante para texto em primaryFixed

    // === SECONDARY: Peach adaptado para dark ===
    secondary: '#FFD09E',           // Ações secundárias, botões alternativos
    onSecondary: '#442600',         // Texto sobre secondary
    secondaryContainer: '#442600',  // Fundo para containers secundários (escuro)
    onSecondaryContainer: '#FFF2DD',// Texto claro para contraste

    secondaryFixed: '#FFBE70',      // Estado fixo secundário
    secondaryFixedDim: '#FFAD60',   // Estado ativo secundário
    onSecondaryFixed: '#442600',    // Texto sobre secondaryFixed
    onSecondaryFixedVariant: '#FFF8EC', // Variante para texto secundário fixo

    // === TERTIARY: Chartreuse para dark ===
    tertiary: '#D3F757',            // Ícones, alertas leves terciários
    onTertiary: '#233000',          // Texto sobre tertiary (escuro)
    tertiaryContainer: '#233000',   // Fundo escuro para elementos terciários
    onTertiaryContainer: '#EAFF83', // Texto claro em tertiaryContainer

    tertiaryFixed: '#EAFF83',       // Estado fixo terciário
    tertiaryFixedDim: '#C5FA00',    // Estado ativo terciário
    onTertiaryFixed: '#233000',     // Texto sobre tertiaryFixed
    onTertiaryFixedVariant: '#F4FFC2', // Variante para texto terciário fixo

    // === ERROR ===
    error: '#D32F2F',               // Erro, alertas
    onError: '#FFE2E2',             // Texto em erro (mais suave para dark)
    errorContainer: '#560000',      // Fundo para mensagens de erro escuras
    onErrorContainer: '#FFD7D7',    // Texto sobre fundo erro container

    // === BACKGROUND / SURFACE ===
    background: '#161616',          // Fundo geral escuro
    onBackground: '#F7F6F3',        // Texto principal claro sobre fundo escuro

    surface: '#222522',             // Cartões e superfícies principais escuras
    surfaceDim: '#0D0F0B',          // Áreas menos importantes, mais escuras
    surfaceBright: '#2E302E',       // Áreas mais claras dentro do dark mode

    surfaceContainerLowest: '#1A1C18', // Fundo para cards flutuantes escuros
    surfaceContainerLow: '#242824',     // Containers escuros
    surfaceContainer: '#2E302E',        // Cards e superfícies principais
    surfaceContainerHigh: '#3B3E3B',    // Áreas destacadas dentro do dark mode
    surfaceContainerHighest: '#454945', // Áreas com maior destaque escuro

    onSurface: '#E5E4DF',          // Texto em superfícies escuras
    onSurfaceVariant: '#BDBDBF',   // Ícones, divisórias, textos secundários
    outline: '#474748',            // Bordas e contornos
    outlineVariant: '#232325',     // Divisórias suaves escuras

    // === INVERSE & EXTRAS ===
    inverseSurface: '#F7F6F3',     // Fundo claro para sobreposição inversa
    inverseOnSurface: '#161616',   // Texto escuro para inverseSurface
    inversePrimary: '#FF9A47',     // Primary para sobreposição inversa

    scrim: '#000000CC',            // Máscaras opacas escuras
    shadow: '#00000088',           // Sombras mais fortes
  }
} as const;
