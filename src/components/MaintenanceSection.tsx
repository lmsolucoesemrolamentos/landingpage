import {
  Box,
  Button,
  Grid,
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


export default function MaintenanceSection() {
  return (
    <Box
      id="manutencao"
      sx={{
        position: 'relative',
        width: '100%'
      }}
    >

      {/* Content */}
      <Box
        sx={{
          width: '100%',
          px: { xs: 2, md: 4 }
        }}
      >


        {/* Header Section */}
        <Box sx={{ mb: { xs: 2, md: 2 } }}>

          <SectionIcon
            icon="ri-tools-fill"
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
                MANUTENÇÃO
              </Typography>
              <Typography variant="h2" className="gradient-text">
                DE ROLAMENTOS
              </Typography>
            </Box>

            {/* DESKTOP: uma linha só */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                lineHeight: 1.1,
              }}
            >
              <Typography variant="h2" className="gradient-text">
                REPOTENCIALIZAÇÃO/
              </Typography>
              <Typography variant="h2" className="gradient-text">
                MANUTENÇÃO DE ROLAMENTOS
              </Typography>
            </Box>
          </Box>


          <Typography
            variant="subtitle1"
            sx={{ maxWidth: { xs: '100%', md: '60%' } }}
          >
            A repotencialização/manutenção de rolamentos pode ser a solução ideal para aqueles que precisam de rapidez e economia.
          </Typography>
        </Box>

        {/* Bearing show Cards */}
        <Grid container spacing={2}>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                component="i"
                className={'ri-discount-percent-line'}
                sx={{ fontSize: 48, mb: 2, opacity: 0.5 }}
              />
              <Typography variant="h6" className='gradient-text' mb={1} >
                + ECONOMIA
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Reduz custos em até 40–65%</b> em comparação com a compra de rolamentos novos, mantendo desempenho equivalente.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                component="i"
                className={'ri-discount-percent-line'}
                sx={{ fontSize: 48, mb: 2, opacity: 0.5 }}
              />
              <Typography variant="h6" className='gradient-text' mb={1} >
                + ECONOMIA
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Reduz custos em até 40–65%</b> em comparação com a compra de rolamentos novos, mantendo desempenho equivalente.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box
                component="i"
                className={'ri-discount-percent-line'}
                sx={{ fontSize: 48, mb: 2, opacity: 0.5 }}
              />
              <Typography variant="h6" className='gradient-text' mb={1} >
                + ECONOMIA
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <b>Reduz custos em até 40–65%</b> em comparação com a compra de rolamentos novos, mantendo desempenho equivalente.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 8
        }}>
          <Button sx={{ ...ctaButtonStyle }}>
            Fazer Avaliação Técnica
          </Button>
        </Box>

      </Box>
    </Box>
  );
}