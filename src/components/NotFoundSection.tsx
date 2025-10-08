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


        <Button
          sx={{ ...ctaButtonStyle }}
          component="a"
          href="https://wa.me/5511949820295?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20n%C3%A3o%20encontrei%20o%20que%20procurava%2C%20gostaria%20de%20ajuda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar Com Especialista
        </Button>


      </Box>
    </Box>
  );
}