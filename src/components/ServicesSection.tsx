import {
  Box,
  Typography,
} from '@mui/material';
import SectionIcon from './SectionIcon';
import IndustryServiceCarousel from './IndustryServiceCarousel';

export default function ServicesSection() {
  return (
    <Box
      id="sob-demanda"
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >

      {/* Content */}
      <Box
        sx={{
          width: '100%',
          mb: { xs: 2, md: 4 }
        }}
      >


        {/* Header Section */}
        <Box sx={{ mb: { xs: 4, md: 6 }, px: { xs: 2, md: 4 }, }}>
          <Box sx={{ width: '25%', height: '2px', background: 'linear-gradient(90deg, #FF8800 20%, transparent 100%)', mb: 2 }} >
          </Box>

          <SectionIcon
            icon="ri-chat-1-line"
          />

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
            sx={{ maxWidth: { xs: '100%', md: '50%' } }}
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