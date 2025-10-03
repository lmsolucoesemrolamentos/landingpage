import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import Navbar from './Navbar';
import SectionIcon from './SectionIcon';
import IndustryServiceCarousel from './IndustryServiceCarousel';
import BearingShowSection from './BearingShowSection';
import { ctaButtonStyle } from '@/styles/globalStyles';

export default function CustomProjectSection() {
  return (
    <Box
      id='projetos-personalizados'
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
          minHeight: { xs: '300px', md: '600px' },
          width: '100%',
          maxWidth: { xs: '320px', md: '700px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 1
        }}
      >
        <Typography variant="h2" className="gradient-text">
          PROJETOS PERSONALIZADOS
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2, maxWidth: "fit-content" }}>
          Tenha uma equipe de engenheiros altamente qualificados para trabalhar no seu projeto.
        </Typography>


        <Button sx={{ ...ctaButtonStyle }}>
          Solicitar Projeto Personalizado
        </Button>


      </Box>
    </Box>
  );
}