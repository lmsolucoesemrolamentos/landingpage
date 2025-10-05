import {
  Box,
  Typography,
  Grid,
  Container
} from '@mui/material';
import Image from 'next/image';
// import { link } from 'fs';
import Link from 'next/link';

const gradientText = {
  background: 'linear-gradient(92.99deg, #181A22 2.48%, #324592 103.8%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
};

const tileSx = {
  flex: 1,
  minWidth: 0,
  height: { xs: 112, sm: 80 },
  borderRadius: 2,
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center',
  justifyContent: { xs: 'center', sm: 'flex-start' },
  gap: { xs: 0, sm: 2 },
  p: 2,
  textAlign: 'center',
  boxShadow: '0 1px 0 rgba(0,0,0,0.06) inset, 0 6px 20px rgba(0,0,0,0.06)',
  '& i': { fontSize: 28, color: 'grey.400' },
};

const items = [
  { icon: 'ri-settings-3-line', label: 'Rolamentos Padrões', link: '#rolamentos' },
  { icon: 'ri-pencil-ruler-line', label: 'Projetos personalizados', link: '#projetos-personalizados' },
  { icon: 'ri-search-line', label: 'Inspeção e manutenção', link: '#manutencao' },
  { icon: 'ri-shape-line', label: 'Substituição de componentes', link: 'manutencao' },
  { icon: 'ri-user-3-line', label: 'Consultoria', link: "https://wa.me/5511949820295?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento" },
  { icon: 'ri-tools-line', label: 'Repotencialização', link: '#manutencao' },
];

const Hero = () => {
  return (
    <Container maxWidth="xl" sx={{ padding: '0px !important' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          width: '100%',
          minHeight: { xs: '0px', sm: '60vh', md: '90vh' },
          px: { xs: 2, sm: 4 },
          py: { xs: 2, sm: 4 },
          gap: 2,
        }}
      >
        {/* <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 2,
      }}>
              <Image
              src="/images/LM_logo2.svg"
              alt="LM Soluções em Rolamentos - Logo"
              width={40}
              height={40}
              priority
              style={{ borderRadius: 4 }}
            />        <SearchBar />
      </Box> */}

        <Grid container spacing={{ xs: 2, sm: 10 }} sx={{ width: '100%' }}>
          <Grid size={{ xs: 3, sm: 7 }}>
            <Image
              src="/images/LM_logo2.svg"
              alt="LM Soluções em Rolamentos - Logo"
              width={40}
              height={40}
              priority
              style={{ borderRadius: 4 }}
            />
          </Grid>

          <Grid size={{ xs: 9, sm: 5 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {/* <SearchBar /> */}
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, sm: 10 }} sx={{ width: '100%' }}>
          {/* <Grid size={{ xs: 12, sm: 6 }}>
          <Typography
            variant="h1"
            sx={{
              background: 'none',
              backgroundClip: 'initial',
              WebkitBackgroundClip: 'initial',
              color: 'text.primary',
              WebkitTextFillColor: 'unset',
              fontSize: {
                xs: '2.125rem', // padrão do h1
                sm: '3rem',
                md: '4.25rem', // dobra o tamanho no desktop (md+)
              },
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            <Box component="span" sx={gradientText}>SOLUÇÕES</Box>{" "}
            <Box component="span" sx={{ color: 'primary.main' }}>ESPECIALIZADAS</Box>{" "}
            <Box
              component="span"
              sx={{
                ...gradientText,
                whiteSpace: 'nowrap',
                display: 'inline-block',
              }}
            >
              EM ROLAMENTOS
            </Box>
          </Typography>
        </Grid> */}

          <Grid size={{ xs: 12, sm: 7 }}>
            <Box
              sx={{
                containerType: 'inline-size',
                minWidth: 0, // evita overflow em grids
              }}
            >
              <Box
                sx={{
                  color: 'text.primary',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  // escala entre 1.75rem e 4.25rem, guiado pela largura do container (cqi)
                  fontSize: 'clamp(1rem, 11cqi, 10.25rem)',
                }}
              >
                <Box
                  sx={{
                    ...gradientText,
                    whiteSpace: { xs: 'nowrap', sm: 'nowrap' },
                    display: 'inline-block',
                    flexWrap: 'nowrap'
                  }}
                >
                  SOLUÇÕES
                </Box>
                <Box
                  sx={{
                    color: 'primary.main',
                    whiteSpace: { xs: 'nowrap', sm: 'nowrap' },
                    display: 'inline-block',
                    flexWrap: 'nowrap'
                  }}>
                  ESPECIALIZADAS
                </Box>
                <Box
                  sx={{
                    ...gradientText,
                    whiteSpace: { xs: 'nowrap', sm: 'nowrap' },
                    display: 'inline-block',
                    flexWrap: 'nowrap'
                  }}
                >
                  EM ROLAMENTOS
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 5 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            {/* Conteúdo do segundo grid item */}
            <Box className='bg-glass' sx={{ width: { xs: '100%', sm: 'auto' }, minWidth: { xs: '100%', sm: 'auto' }, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', p: 2, borderRadius: 2, gap: 2 }}>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6" sx={{ ...gradientText }}>
                  NOSSAS ESPECIALIDADES
                </Typography>
                <Typography variant="body2" >
                  Com uma ampla variedade de serviços, estamos preparados para atender às demandas rigorozas do mercado, com profissionais altamente qualficados.
                </Typography>
              </Box>
              {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              {[0, 2, 4].map((start) => (
                <Box key={start} sx={{ display: 'flex', gap: 0.5 }}>
                  {[items[start], items[start + 1]].map((item) => (
                    <Paper key={item.label} sx={tileSx}>
                      <Box component="i" className={item.icon} />
                      <Typography variant="body2">{item.label}</Typography>
                    </Paper>
                  ))}
                </Box>
              ))}
            </Box> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 0.5, sm: 1 } }}>
                {[0, 2, 4].map((start) => (
                  <Box key={start} sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 } }}>
                    {[items[start], items[start + 1]].map((item) => (
                      <Box
                        key={item.label}
                        component={Link}
                        href={item.link}
                        sx={{ ...tileSx, cursor: 'pointer' }}
                      // onClick={() => {
                      // const el = document.querySelector(item.link);
                      // if (el) {
                      //   el.scrollIntoView({ behavior: 'smooth' });
                      // }
                      // }}
                      >
                        <Box component="i" className={item.icon} />
                        <Typography variant="body2" textAlign={{ xs: 'center', sm: 'left' }}>
                          {item.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>

            </Box>
          </Grid>
        </Grid>

      </Box>
    </Container>
  );
};

export default Hero;