import {
  Box,
  Button,
  Typography,
} from '@mui/material';

const ctaButtonStyle = {
  opacity: 1,
  padding: { xs: '16px', md: '24px' },
  borderRadius: 2,
  fontWeight: 400,
  fontSize: { xs: '16px', md: '24px' },
  color: 'white',
  background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #FF4D00 0%, #FF8800 100%)'
}

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