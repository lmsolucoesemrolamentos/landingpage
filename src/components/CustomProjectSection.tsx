import {
  Box,
  Button,
  Typography,
} from '@mui/material';
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


      <Box
        sx={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          transform: 'translate(50%, 25%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
          {/* Ajuste o src depois */}
          <img
            src="/images/LM/rolamentos_skecth.webp"
            alt="Background"
            style={{
              objectFit: 'cover',
              width: '150%',
              height: '150%',
              opacity: 0.5,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Box>
      </Box>

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


        <Button
          sx={{ ...ctaButtonStyle }}
          component="a"
          href="https://wa.me/5511949820295?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20projeto%20personalizado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar Projeto Personalizado
        </Button>


      </Box>
    </Box>
  );
}