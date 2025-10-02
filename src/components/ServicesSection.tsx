import {
  Box,
  Typography,
} from '@mui/material';
import Navbar from './Navbar';
import IconButton from './IconButton';
import IndustryServiceCarousel from './IndustryServiceCarousel';

export default function ServicesSection() {
  return (
    <Box
      id="servicos"
      sx={{
        bgcolor: 'transparent !important',
        // bgcolor: 'blue !important',
        position: 'relative',
        // boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.1)',
        // minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Navbar Sticky */}
      {/* <Navbar /> */}

      {/* Content */}
      <Box
        sx={{
          // py: { xs: 4, md: 6 },
          // px: { xs: 2, md: 4 },
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(200px)',
          width: '100%',
        }}
      >


        {/* Header Section */}
        <Box sx={{ mb: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, }}>
          <Box sx={{ width: '25%', height: '2px', background: 'linear-gradient(90deg, #FF8800 20%, transparent 100%)', mb: 2 }} >
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <IconButton
              icon="ri-chat-1-line"
              href="#contato"
            />
          </Box>

          <Box>
            {/* MOBILE: duas linhas */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'column',
                lineHeight: 1.1,
              }}
            >
              <Typography variant="h2" className="gradient-text">
                SERVIÇOS
              </Typography>
              <Typography variant="h2" className="gradient-text">
                SOB DEMANDA
              </Typography>
            </Box>

            {/* DESKTOP: uma linha só */}
            <Typography
              variant="h2"
              className="gradient-text"
              sx={{ display: { xs: 'none', md: 'block' }, lineHeight: 1.1 }}
            >
              SERVIÇOS SOB DEMANDA
            </Typography>
          </Box>


          <Typography
            variant="subtitle1"
          >
            Atendemos minusciosamente as necessidades da sua indústria!
          </Typography>
        </Box>

        {/* Service Cards */}
        <IndustryServiceCarousel />

      </Box>
    </Box>
  );
}