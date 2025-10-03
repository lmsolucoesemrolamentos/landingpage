'use client';

import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import BearingShowCard from './BearingShowCard';
import Image from 'next/image';
import { useState } from 'react';
import { ctaButtonStyle } from '@/styles/globalStyles';

interface BearingTag {
  icon: string;
  title: string;
}

interface BearingItem {
  imgSrc: string;
  title: string;
  description: string;
  tags: BearingTag[];
  highlight?: boolean;
}

const bearingData: BearingItem[] = [
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento axial de rolos',
    description: 'Elemento de máquina destinado a suportar cargas axiais elevadas em uma única direção. Utiliza corpos rolantes em forma de cilindros (roletes) dispostos entre pistas planas ou ligeiramente côncavas, garantindo contato linear e maior capacidade de carga em comparação aos rolamentos axiais de esferas.',
    highlight: true,
    tags: [
      { icon: "ri-weight-line", title: 'Altas cargas' },
      { icon: "ri-shield-line", title: 'Proteção do eixo' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento de Esferas',
    description: 'Rolamento de esferas de uma carreira com alta capacidade de rotação e baixo atrito. Ideal para aplicações que exigem velocidades elevadas e baixo torque de partida. Oferece excelente resistência ao desgaste e longa vida útil em condições operacionais adequadas.',
    tags: [
      { icon: "ri-speed-line", title: 'Alta rotação' },
      { icon: "ri-flashlight-line", title: 'Baixo atrito' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento de Rolos',
    description: 'Rolamento de rolos cilíndricos projetado para suportar cargas radiais elevadas. Possui maior área de contato entre os elementos rolantes e as pistas, proporcionando superior capacidade de carga e rigidez comparado aos rolamentos de esferas.',
    tags: [
      { icon: "ri-hourglass-line", title: 'Alta durabilidade' },
      { icon: "ri-target-line", title: 'Alta precisão' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento Angular de Contato',
    description: 'Rolamento especialmente desenvolvido para suportar cargas combinadas (radiais e axiais). Possui ângulo de contato otimizado que permite absorção de forças em múltiplas direções, sendo essencial em aplicações como caixas de direção e bombas hidráulicas.',
    tags: [
      { icon: "ri-arrow-up-down-line", title: 'Cargas combinadas' },
      { icon: "ri-settings-line", title: 'Versatilidade' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento Autocompensador',
    description: 'Rolamento de duas carreiras de esferas com pista externa esférica que permite alinhamento automático do eixo. Compensa pequenos desalinhamentos e deflexões do eixo, reduzindo tensões internas e aumentando a vida útil do conjunto.',
    tags: [
      { icon: "ri-refresh-line", title: 'Autoalinhamento' },
      { icon: "ri-tools-line", title: 'Baixa manutenção' },
    ],
  },
  {
    imgSrc: '/images/rolamento_padrao.png',
    title: 'Rolamento de Agulhas',
    description: 'Rolamento compacto com elementos rolantes de pequeno diâmetro (agulhas) e grande comprimento. Oferece alta capacidade de carga radial em espaço reduzido, sendo ideal para aplicações onde o espaço radial é limitado.',
    tags: [
      { icon: "ri-compactdisc-line", title: 'Compacto' },
      { icon: "ri-space-ship-line", title: 'Espaço reduzido' },
    ],
  },
];

export default function BearingShowSection() {
  const [selectedBearingIndex, setSelectedBearingIndex] = useState(0);

  const handleSelectBearing = (index: number) => {
    setSelectedBearingIndex(index);
  };

  return (
    <Box sx={{ width: '100%', }}>

      {/* Renderiza TODOS os dados para SEO - escondidos */}
      <Box sx={{ display: 'none' }}>
        {bearingData.map((bearing, index) => (
          <Box key={`seo-${index}`}>
            <Typography variant="h2">{bearing.title}</Typography>
            <Typography variant="body1">{bearing.description}</Typography>
            {bearing.tags.map((tag, tagIndex) => (
              <Typography key={`tag-${index}-${tagIndex}`} variant="body2">
                {tag.title}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>

      <BearingShowCard
        bearingData={bearingData}
        selectedIndex={selectedBearingIndex}
        onSelectBearing={handleSelectBearing}
      />

      {/* Interface visível - mostra apenas o selecionado */}
      <Grid container spacing={4} sx={{ borderRadius: 2, mx: { xs: 2, md: 4 } }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={bearingData[selectedBearingIndex].imgSrc}
            alt={bearingData[selectedBearingIndex].title}
            layout="responsive"
            width={500}
            height={300}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 2, md: 4 } }}>
          <Box sx={{ height: '100%', display: "flex", flexDirection: "column", justifyContent: 'space-between', alignItems: 'start', gap: 2 }}>
            <Box>
              <Typography variant="h6" className='gradient-text'>
                {bearingData[selectedBearingIndex].title.toUpperCase()}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {bearingData[selectedBearingIndex].description}
              </Typography>
            </Box>
            <Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, mb: 2 }}>
                {bearingData[selectedBearingIndex].tags.map((tag, index) => (
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


    </Box>
  );
}
