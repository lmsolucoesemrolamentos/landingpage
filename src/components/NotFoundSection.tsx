import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import { ctaButtonStyle } from '@/styles/globalStyles';

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
          minHeight: { xs: '200px', md: '360px' },
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