import {
  Box,
  Container,
  Typography,
} from '@mui/material';
import SectionIcon from './SectionIcon';
import BearingShowSection from './BearingShowSection';

export default function BearingsSection() {
  return (
    <Box
      id="rolamentos"
      sx={{
        position: 'relative',
        width: '100%',
        pt: { xs: 2, md: 4 },
      }}
    >

      {/* Content */}
      <Box
        sx={{
          width: '100%',
        }}
      >


        {/* Header Section */}
        <Container maxWidth="xl" sx={{ padding: '0px !important' }}>
          <Box sx={{ px: { xs: 2, md: 4 }, }}>

            <SectionIcon
              icon="ri-settings-5-line"
            />

            <Box mt={2}>
              {/* MOBILE: duas linhas */}
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                  lineHeight: 1.1,
                }}
              >
                <Typography variant="h2" className="gradient-text">
                  ROLAMENTOS
                </Typography>
                <Typography variant="h2" className="gradient-text">
                  PADRÕES
                </Typography>
              </Box>

              {/* DESKTOP: uma linha só */}
              <Typography
                variant="h2"
                className="gradient-text"
                sx={{ display: { xs: 'none', md: 'block' }, lineHeight: 1.1 }}
              >
                ROLAMENTOS PADRÕES
              </Typography>
            </Box>


            <Typography
              variant="subtitle1"
              sx={{ maxWidth: { xs: '100%', md: '50%' } }}
            >
              Rolamentos padrões de <b>alta qualidade e eficiência,</b> dos distribuidores mais qualificados do mercado.
            </Typography>
          </Box>


          {/* Bearing show Cards */}
          <BearingShowSection />

        </Container>

      </Box>
    </Box>
  );
}