// src/theme.ts
'use client';

import { createTheme } from '@mui/material/styles';
import { teachers } from './fonts';

// Estendendo o tema do Material-UI para incluir cores customizadas
declare module '@mui/material/styles' {
  interface Theme {
    customColors: {
      bgBody: string;
      bgSearch: string;
      bgHero: string;
      bgServicos: string;
      bgCards: string;
      bgRolamentos: string;
      iconsServicos: string;
      icons: string;
      buttons: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      bgBody?: string;
      bgSearch?: string;
      bgHero?: string;
      bgServicos?: string;
      bgCards?: string;
      bgRolamentos?: string;
      iconsServicos?: string;
      icons?: string;
      buttons?: string;
    };
  }
}

// Dica: instale a fonte se for usar Google Fonts:
// npm i @fontsource/teachers
// e importe o(s) peso(s) que precisa (ex.: 400/500/600/700):
// import '@fontsource/teachers/400.css';
// import '@fontsource/teachers/500.css';
// import '@fontsource/teachers/600.css';
// import '@fontsource/teachers/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8800', // Primary - laranja
    },
    secondary: {
      main: '#3F4A5C', // H1, H2, H4 semibold - azul escuro
    },
    background: {
      default: '#FFFFFF', // Fundo principal
      paper: '#F8F9FA', // BG SEARCH - cinza claro
    },
    text: {
      primary: '#3F4A5C', // H4 REGULAR - azul escuro
      secondary: '#6C757D', // Subtitle, Caption - cinza médio
    },
    grey: {
      50: '#F8F9FA', // BG SEARCH
      100: '#E9ECEF', // BG SERVIÇOS
      200: '#DEE2E6',
      300: '#CED4DA',
      400: '#ADB5BD', // Icons
      500: '#6C757D', // Subtitle, Caption
      600: '#495057',
      700: '#343A40',
      800: '#212529', // H4 REGULAR
      900: '#3F4A5C', // H1, H2, H4 semibold
    },
    info: {
      main: '#C8D1E0', // BG HERO, ICONS SERVIÇOS - azul claro
      light: '#E6EBF4', // Tom mais claro
      dark: '#A8B5C8',
    },
    warning: {
      main: '#FF8800', // Primary - laranja
      light: '#FF9933',
      dark: '#E67700',
    },
    success: {
      main: '#28A745',
      light: '#4CBB69',
      dark: '#1E7E34',
    },
    error: {
      main: '#DC3545',
      light: '#E85563',
      dark: '#C82333',
    },
  },
  typography: {
    fontFamily: 'var(--font-teachers), system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji"',
    // H1 — Bold 40px / 106% / 0%
    h1: {
      fontFamily: 'var(--font-teachers)',
      fontWeight: 700,
      fontStyle: 'normal', // Bold é peso, não estilo
      fontSize: '40px',      // 40px
      lineHeight: 1.06,        // 106%
      letterSpacing: '0%',
    },
    // H2 — Semi Bold 160px / 114% / 0
    h2: {
      fontWeight: 600,
      fontSize: '32px', 
       '@media (min-width:600px)': {
        fontSize: '64px',
      },         
      lineHeight: 1.14,
      letterSpacing: 0,
    },
    // H3 (usei pra “H4 Semi Bold” da tua tabela) — 64px / 114% / 0
    h3: {
      fontWeight: 600,
      fontSize: '2rem',        // 32px
      lineHeight: 1.14,
      letterSpacing: 0,
    },
    // H4 (usei pra “H4 Regular” da tua tabela) — 64px / 114% / 0
    h4: {
      fontWeight: 400,
      // 24px
      lineHeight: 1.14,
      letterSpacing: 0,
      fontSize: '20px',
    },
    h6: {
      fontWeight: 600,
      fontSize: '20px',
      '@media (min-width:600px)': {
        fontSize: '30px',
      },     
      lineHeight: 1.14,
      letterSpacing: 0,
        },
    // Subtitle 1 — Mixed 64px / 99% / 0  (usei 500 de peso)
    subtitle1: {
        fontWeight: 400,
      fontSize: '20px', 
       '@media (min-width:600px)': {
        fontSize: '42px',
      },     
      lineHeight: 1.14,
      letterSpacing: 0,
      color: '#5D606E'
    },
    // Subtitle 2 — Mixed 48px / 114% / 0 (peso 500)
    subtitle2: {
       fontWeight: 400,
      fontSize: '16px', 
       '@media (min-width:600px)': {
        fontSize: '20px',
      },     
      lineHeight: 1.14,
      letterSpacing: 0,
      color: '#5D606E'
    },

    // body
    body1: {
      fontWeight: 400,
      fontSize: '16px', 
       '@media (min-width:600px)': {
        fontSize: '24px',
      },     
      lineHeight: 1.14,
      letterSpacing: 0,
      color: '#5D606E'
    },
    body2: {
      fontWeight: 400,
      fontSize: '16px', 
       '@media (min-width:600px)': {
        fontSize: '20px',
      },     
      lineHeight: 1.14,
      letterSpacing: 0,
      color: '#5D606E'
    },
    // Button — Medium 48px / 114% / 0
    button: {
      fontWeight: 500,
      fontSize: '1rem',        // 16px
      lineHeight: 1.14,
      letterSpacing: 0,
      textTransform: 'none',
    },
    // Caption — Regular 40px / 114% / 0
    caption: {
      fontWeight: 400,
      fontSize: '0.875rem',    // 14px
      lineHeight: 1.14,
      letterSpacing: 0,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
     MuiTypography: {
    styleOverrides: {
      h1: {        
        background: 'linear-gradient(92.99deg, #181A22 2.48%, #324592 103.8%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      },
      h6: {        
        background: 'linear-gradient(92.99deg, #181A22 2.48%, #324592 103.8%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  },
  // Cores customizadas baseadas na documentação
  customColors: {
    bgBody: '#FFFFFF', // BG BODY
    bgSearch: '#fbfcff', // BG SEARCH
    bgHero: '#C8D1E0', // BG HERO, ICONS SERVIÇOS
    bgServicos: '#E9ECEF', // BG SERVIÇOS
    bgCards: '#FFFFFF', // BG CARDS
    bgRolamentos: 'linear-gradient(270deg, #E67D57 -70.08%, #FA3EFF 99.92%)', // BG ROLAMENTOS - gradiente
    iconsServicos: '#C8D1E0', // ICONS SERVIÇOS
    icons: '#ADB5BD', // Icons
    buttons: 'radial-gradient(70.7% 70.7%, rgba(255, 136, 0, 0.74) 13.53%, rgba(255, 136, 0, 0.64) 54.39%, #FF8800 100%)', // Buttons - gradiente radial
  },
});

// Função para injetar variáveis CSS no documento
export const injectCSSVariables = () => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    
    // Cores da paleta principal
    root.style.setProperty('--primary-main', theme.palette.primary.main);
    root.style.setProperty('--secondary-main', theme.palette.secondary.main);
    root.style.setProperty('--warning-main', theme.palette.warning.main);
    root.style.setProperty('--text-primary', theme.palette.text.primary);
    root.style.setProperty('--text-secondary', theme.palette.text.secondary);
    root.style.setProperty('--background-default', theme.palette.background.default);
    root.style.setProperty('--background-paper', theme.palette.background.paper);
    
    // Cores customizadas
    root.style.setProperty('--bg-body', theme.customColors.bgBody);
    root.style.setProperty('--bg-search', theme.customColors.bgSearch);
    root.style.setProperty('--bg-hero', theme.customColors.bgHero);
    root.style.setProperty('--bg-servicos', theme.customColors.bgServicos);
    root.style.setProperty('--bg-cards', theme.customColors.bgCards);
    root.style.setProperty('--bg-rolamentos', theme.customColors.bgRolamentos);
    root.style.setProperty('--icons-servicos', theme.customColors.iconsServicos);
    root.style.setProperty('--icons', theme.customColors.icons);
    root.style.setProperty('--buttons', theme.customColors.buttons);
  }
};

export default theme;
