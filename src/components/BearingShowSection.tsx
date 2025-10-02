import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import BearingShowCard from './BearingShowCard';
import Image from 'next/image';

const ctaButtonStyle = {
  opacity: 1,
  padding: { xs: '16px', md: '24px' },
  borderRadius: 2,
  fontWeight: 400,
  fontSize: { xs: '16px', md: '24px' },
  color: 'white',
  background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #FF4D00 0%, #FF8800 100%)'
}

interface BearingTag {
  icon: string;
  title: string;
}

interface BearingItem {
  imgSrc: string;
  title: string;
  description: string;
  tags: BearingTag[];
}

const bearingData: BearingItem[] = [
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento axial de rolos',
    description: 'Elemento de máquina destinado a suportar cargas axiais elevadas em uma única direção. Utiliza corpos rolantes em forma de cilindros (roletes) dispostos entre pistas planas ou ligeiramente côncavas, garantindo contato linear e maior capacidade de carga em comparação aos rolamentos axiais de esferas.',
    tags: [
      { icon: "ri-weight-line", title: 'Altas cargas' },
      { icon: "ri-shield-line", title: 'Proteção do eixo' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento de Esferas',
    description: 'Ideal para aplicações de alta rotação e baixo atrito.',
    tags: [
      { icon: "ri-weight-line", title: 'Altas cargas' },
      { icon: "ri-shield-line", title: 'Proteção do eixo' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento de Rolos',
    description: 'Projetado para suportar cargas radiais elevadas.',
    tags: [
      { icon: "ri-hourglass-line", title: 'Alta durabilidade' },
      { icon: "ri-target-line", title: 'Alta precisão' },
    ],
  },
];

export default function BearingShowSection() {
  return (
    <Box sx={{ width: '100%' }}>

      <Grid container spacing={4} sx={{ borderRadius: 2, mx: { xs: 2, md: 4 } }}>
        <Grid size={{ xs: 12, md: 6 }}>

          <Image
            src={bearingData[0].imgSrc}
            alt={bearingData[0].title}
            layout="responsive"
            width={500}
            height={300}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 2, md: 4 } }}>
          <Box sx={{ height: '100%', display: "flex", flexDirection: "column", justifyContent: 'space-between', alignItems: 'start', gap: 2 }}>
            <Box>
              <Typography variant="h6" className='gradient-text'>
                {bearingData[0].title.toUpperCase()}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {bearingData[0].description}
              </Typography>
            </Box>
            <Box sx={{
              // display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 4 }
            }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, mb: 2 }}>
                {bearingData[0].tags.map((tag, index) => (
                  <>
                    {index > 0 && (

                      <Divider orientation="vertical" flexItem sx={{ px: 0 }} />
                    )}
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box
                        component="i"
                        className={tag.icon as string}
                        sx={{
                          fontSize: { xs: '20px', md: '28px' },
                          color: 'primary.main'
                        }}
                      />
                      {/* <i className={tag.icon as string} style={{ fontSize: { xs: '16px', md: '24px' }, color: 'rgba(0,0,0,0.4)' }}></i> */}
                      <Typography variant="body1" color="text.secondary">
                        {tag.title}
                      </Typography>

                    </Box>
                  </>
                ))}
              </Box>
              <Button sx={{ ...ctaButtonStyle }}>
                Solicitar orçamento
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <BearingShowCard bearingData={bearingData} />
    </Box>
  );
}
