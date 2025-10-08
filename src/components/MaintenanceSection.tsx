import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import SectionIcon from './SectionIcon';
import { ctaButtonStyle } from '@/styles/globalStyles';


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
      <Container maxWidth="xl" sx={{ padding: '0px !important' }}>
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
                  className={'ri-shield-flash-line'}
                  sx={{ fontSize: 48, mb: 2, opacity: 0.5 }}
                />
                <Typography variant="h6" className='gradient-text' mb={1} >
                  + CONFIABILIDADE
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Recupera a performance original por meio de inspeção, usinagem, substituição de componentes e testes rigorosos, <b>garantindo segurança operacional.</b>
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
                  className={'ri-timer-flash-line'}
                  sx={{ fontSize: 48, mb: 2, opacity: 0.5 }}
                />
                <Typography variant="h6" className='gradient-text' mb={1} >
                  + DISPONIBILIDADE
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <b>Reduz prazos</b> em relação à fabricação de peças novas, garantindo <b>retorno rápido</b> dos rolamentos à operação e <b>menor impacto financeiro.</b>
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
            <Button
              sx={{ ...ctaButtonStyle }}
              component="a"
              href="https://wa.me/5511949820295?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer Avaliação Técnica
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}