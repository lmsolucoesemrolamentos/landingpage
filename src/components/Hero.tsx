import {
  Box,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import Image from 'next/image';
import SearchBar from './SearchBar';

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
  height: 112,
  borderRadius: 2,
  bgcolor: 'background.paper',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  p: 2,
  textAlign: 'center',
  boxShadow: '0 1px 0 rgba(0,0,0,0.06) inset, 0 6px 20px rgba(0,0,0,0.06)',
  '& i': { fontSize: 28, color: 'grey.400' },
};

const items = [
  { icon: 'ri-settings-3-line', label: 'Rolamentos Padrões' },
  { icon: 'ri-pencil-ruler-line', label: 'Projetos personalizados' },
  { icon: 'ri-search-line', label: 'Inspeção e manutenção' },
  { icon: 'ri-shape-line', label: 'Substituição de componentes' },
  { icon: 'ri-user-3-line', label: 'Consultoria' },
  { icon: 'ri-tools-line', label: 'Repotencialização' },
];

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
        px: 2,
        py: 2,
        // bgcolor: 'rgba(0,0,0,0.5)',
        // background: 'var(--bg-hero)',
        gap: 2,
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 2,
      }}>
        <Image
          src="/images/LM_logo2.svg"
          alt="LM logo"
          width={40}
          height={40}
        />

        {/* Componente de Search */}
        <SearchBar />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{
              // desliga o grad global deste h1 específico
              background: 'none',
              backgroundClip: 'initial',
              WebkitBackgroundClip: 'initial',
              color: 'text.primary',
              WebkitTextFillColor: 'unset',
            }}
          >
            <Box component="span" sx={gradientText}>SOLUÇÕES</Box>{" "}
            <Box component="span" sx={{ color: 'primary.main' }}>ESPECIALIZADAS</Box>{" "}
            <Box component="span" sx={gradientText}>EM ROLAMENTOS</Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} width={'100%'}>
          {/* Conteúdo do segundo grid item */}
          <Box className='bg-glass' sx={{ width: '100%', minWidth: `100%`, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', p: 2, borderRadius: 2, gap: 2 }}>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h6" >
                NOSSAS ESPECIALIDADES
              </Typography>
              <Typography variant="body2" >
                Com uma ampla variedade de serviços, estamos preparados para atender às demandas rigorozas do mercado, com profissionais altamente qualficados.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
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
            </Box>

          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Hero;