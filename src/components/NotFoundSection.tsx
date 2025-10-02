import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import Navbar from './Navbar';
import SectionIcon from './SectionIcon';
import IndustryServiceCarousel from './IndustryServiceCarousel';
import BearingShowSection from './BearingShowSection';

const ctaButtonStyle = {
  opacity: 1,
  padding: { xs: '16px', md: '24px' },
  borderRadius: 2,
  fontWeight: 400,
  fontSize: { xs: '16px', md: '24px' },
  color: 'white',
  background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #FF4D00 0%, #FF8800 100%)'
}

export default function NotFoundSection() {
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
      }}
    >

      {/* Content */}
      <Box
        sx={{
          minHeight: '360px',
          width: '100%',
          maxWidth: { xs: '300px', md: '500px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 1
        }}
      >
        <Typography variant="h6" className="gradient-text">
          Não encontrou o que procurava?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, maxWidth: "fit-content" }}>
          Fale com os nossos especialistas para uma busca mais precisa
        </Typography>


        <Button sx={{ ...ctaButtonStyle }}>
          Falar Com Especialista
        </Button>


      </Box>
    </Box>
  );
}