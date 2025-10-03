import { SxProps, Theme } from '@mui/material';

// Estilo global para botões CTA (Call to Action)
export const ctaButtonStyle: SxProps<Theme> = {
  opacity: 1,
  padding: { xs: '16px', md: '24px' },
  borderRadius: {xs: '4px', md: '10px'},
  fontWeight: 400,
  fontSize: { xs: '16px', md: '24px' },
  color: 'white',
  background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #FF4D00 0%, #FF8800 100%)',
  textTransform: 'none',
  '&:hover': {
    background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #E64300 0%, #E67700 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 136, 0, 0.3)',
  },
  transition: 'all 0.3s ease',
};

// Outros estilos globais que podem ser úteis
export const gradientTextStyle: SxProps<Theme> = {
  background: 'linear-gradient(92.99deg, #181A22 2.48%, #324592 103.8%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
};

export const glassStyle: SxProps<Theme> = {
  backgroundColor: 'rgba(255, 255, 255, 0.45)',
  backdropFilter: 'blur(30px)',
};