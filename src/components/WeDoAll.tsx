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
        backgroundImage: 'url(/images/industrymetal.png)',
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


        <Button sx={{ ...ctaButtonStyle }}>
          Falar Com Especialista
        </Button>


      </Box>
    </Box>
  );
}