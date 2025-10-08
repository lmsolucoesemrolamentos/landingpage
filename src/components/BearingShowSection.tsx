'use client';

import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import BearingShowCard from './BearingShowCard';
import Image from 'next/image';
import { useState } from 'react';
import { ctaButtonStyle } from '@/styles/globalStyles';
import { bearingData } from '@/data/bearingData';

// interface BearingTag {
//   icon: string;
//   title: string;
// }

// interface BearingItem {
//   id: string;
//   imgSrc: string;
//   title: string;
//   description: string;
//   tags: BearingTag[];
//   highlight?: boolean;
// }

// const bearingData: BearingItem[] = [
//   {
//     id: 'rolamento-axial-de-rolos',
//     imgSrc: '/images/LM/rolamentos/axial-rolos.webp',
//     title: 'ROLAMENTO AXIAL DE ROLOS',
//     description: 'Elemento de máquina destinado a suportar cargas axiais elevadas em uma única direção. Utiliza corpos rolantes em forma de cilindros (roletes) dispostos entre pistas planas ou ligeiramente côncavas, garantindo contato linear e maior capacidade de carga em comparação aos rolamentos axiais de esferas.',
//     highlight: true,
//     tags: [
//       { icon: "ri-weight-line", title: 'Altas cargas' },
//       { icon: "ri-shield-line", title: 'Proteção do eixo' },
//     ],
//   },
//   {
//     id: 'rolamento-autocompensador-de-rolos',
//     imgSrc: '/images/LM/rolamentos/autocompensador-rolos.webp',
//     title: 'ROLAMENTO AUTOCOMPENSADOR DE ROLOS',
//     description: 'Rolamento projetado para suportar cargas elevadas e se ajustar automaticamente a desalinhamentos entre o eixo e o mancal. Ele é composto por dois anéis, gaiola e rolos em formato de barril, distribuídos simetricamente, o que permite que suporte tanto cargas radiais pesadas quanto cargas axiais moderadas em ambas as direções.',
//     tags: [
//       { icon: "ri-weight-line", title: 'Altas cargas' },
//       { icon: "ri-compasses-line", title: 'Autocompensação ' },
//     ],
//   },
//   {
//     id: 'rolamento-autocompensador-de-esferas',
//     imgSrc: '/images/LM/rolamentos/autocompensador-esferas.webp',
//     title: 'ROLAMENTO AUTOCOMPENSADOR DE ESFERAS',
//     description: 'Esse tipo de rolamento possui duas fileiras de esferas guiadas por uma pista esférica no anel externo. Essa geometria permite que ele compense automaticamente desalinhamentos angulares, tornando-o muito eficiente em situações onde o eixo pode estar ligeiramente torto ou desalinhado em relação ao mancal.',
//     tags: [
//       { icon: "ri-flashlight-line", title: 'Baixa fricção' },
//       { icon: "ri-weight-line", title: 'Carga radial e axial' },
//     ],
//   },
//   {
//     id: 'rolamento-axial-de-esferas',
//     imgSrc: '/images/LM/rolamentos/axial-esferas.webp',
//     title: 'ROLAMENTO AXIAL DE ESFERAS',
//     description: 'Rolamento projetado especificamente para suportar cargas axiais (na direção do eixo), sem ser adequado para cargas radiais significativas.',
//     tags: [
//       { icon: "ri-speed-up-line ", title: 'Velocidade' },
//       { icon: "ri-flashlight-line", title: 'Baixa fricção' },
//     ],
//   },
//   {
//     id: 'rotulas',
//     imgSrc: '/images/LM/rolamentos/rotulas.webp',
//     title: 'RÓTULAS',
//     description: 'As rótulas são tipos especiais de rolamentos que permitem movimento angular entre duas partes, funcionando como uma junta esférica. Elas são usadas em situações em que há necessidade de transmitir força e ao mesmo tempo permitir deslocamentos angulares, acomodando desalinhamentos e vibrações.',
//     tags: [
//       { icon: "ri-equalizer-2-line", title: 'Versátil' },
//       { icon: "ri-time-line", title: 'Durabilidade' },
//     ],
//   },
//   {
//     id: 'rolamento-de-giro-engrenado-externo',
//     imgSrc: '/images/LM/rolamentos/giro_engrenado_externo.webp',
//     title: 'ROLAMENTO DE GIRO ENGRENADO EXTERNO',
//     description: 'Rolamento de grande diâmetro (rolamento de giro ou slewing bearing) que possui dentes de engrenagem na face externa do anel.Isso permite que o giro seja feito por meio do acoplamento direto de um pinhão ao anel externo, transmitindo torque de forma eficiente sem precisar de engrenagens adicionais.',
//     tags: [
//       { icon: "ri-weight-line", title: 'Alta resistência' },
//       { icon: "ri-time-line", title: 'Durabilidade' },
//     ],
//   },
//   {
//     id: 'rolamento-de-giro-engrenado-interno',
//     imgSrc: '/images/LM/rolamentos/giro_engrenado_interno.webp',
//     title: 'ROLAMENTO DE GIRO ENGRENADO INTERNO',
//     description: 'É um tipo de rolamento de giro de grande porte, projetado para suportar cargas combinadas (axiais, radiais e momentos de tombamento).ele possui dentes de engrenagem usinados na pista interna, permitindo que um pinhão se acople por dentro, transmitindo o torque.'
//     , tags: [
//       { icon: "ri-focus-3-line", title: 'Precisão' },
//       { icon: "ri-time-line", title: 'Durabilidade' },
//     ],
//   },
//   {
//     id: 'rolamento-conico',
//     imgSrc: '/images/LM/rolamentos/conico.webp',
//     title: 'ROLAMENTO CÔNICO',
//     description: 'formado por roletes em formato de cone que trabalham entre pistas também cônicas. Essa geometria faz com que ele suporte cargas combinadas (radiais e axiais) de forma eficiente.',
//     tags: [
//       { icon: "ri-weight-line", title: 'Altas cargas' },
//       { icon: "ri-equalizer-2-line", title: 'Versátil' },
//     ],
//   },
// ];

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



      {/* Interface visível - mostra apenas o selecionado */}
      <Container maxWidth="xl" sx={{ padding: '0px !important' }} id={bearingData[selectedBearingIndex].id}>
        <Grid container spacing={{ xs: 0, md: 4 }} sx={{ borderRadius: 2, mx: { xs: 2, md: 4 } }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 4, sm: 8 }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src={bearingData[selectedBearingIndex].imgSrc}
              alt={bearingData[selectedBearingIndex].title}
              layout="responsive"
              width={200}
              height={200}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 2, md: 4 } }}>
            <Box sx={{ height: '100%', display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'start', gap: 2 }}>
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
                <Button
                  href={`https://wa.me/5511949820295?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20or%C3%A7amento%20para%20o%20${encodeURIComponent(bearingData[selectedBearingIndex].title.toLowerCase())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ...ctaButtonStyle }}
                  component="a"
                >
                  Solicitar orçamento
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <BearingShowCard
        bearingData={bearingData}
        selectedIndex={selectedBearingIndex}
        onSelectBearing={handleSelectBearing}
      />

    </Box>
  );
}
