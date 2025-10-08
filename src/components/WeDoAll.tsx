import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { ctaButtonStyle } from '@/styles/globalStyles';

export default function WeDoAllSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'url(/images/LM/industria_bg.webp)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >

      {/* Content */}
      <Box
        sx={{
          minHeight: { xs: '200px', md: '360px' },
          width: '100%',
          maxWidth: { xs: '350px', md: '900px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: { xs: 2, md: 4 },
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: { xs: '24px', md: '64px', color: 'white' } }} >
          Não há o que não possamos fazer por você!
        </Typography>


        <Button
          sx={{ ...ctaButtonStyle }}
          component="a"
          href="https://wa.me/5511949820295?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20sobre%20suas%20solu%C3%A7%C3%B5es%20personalizadas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar Com Especialista
        </Button>


      </Box>
    </Box>
  );
}