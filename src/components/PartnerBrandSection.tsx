import { Box } from '@mui/material';
import Image from 'next/image';
import { useMemo } from 'react';

const brands = [
  { name: 'FAG', logo: '/images/brands/fag.png' },
  { name: 'INA', logo: '/images/brands/ina.png' },
  { name: 'IKO', logo: '/images/brands/iko.png' },
  { name: 'BGL', logo: '/images/brands/bgl.png' },
  { name: 'TIMKEN', logo: '/images/brands/timken.png' },
  { name: 'NSK', logo: '/images/brands/nsk.png' },
];

export default function PartnerBrandSection() {
  // Criamos múltiplas sequências para garantir scroll infinito em telas muito largas
  // O número de repetições é calculado para cobrir até 4K+ com margem de segurança
  const brandSequences = useMemo(() => {
    const sequences = [];
    const sequenceCount = 4; // 4 sequências para cobrir telas ultra-wide

    for (let i = 0; i < sequenceCount; i++) {
      sequences.push(
        brands.map((brand, index) => (
          <Box
            key={`sequence-${i}-brand-${index}`}
            sx={{
              minWidth: { xs: 150, md: 200 },
              height: { xs: 80, md: 100 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 1,
              position: 'relative',
              flexShrink: 0, // Evita que os itens encolham
            }}
          >
            <Image
              src={brand.logo}
              alt={`${brand.name} - Parceiro oficial de rolamentos industriais`}
              fill
              style={{
                objectFit: 'contain',
                padding: '10px',
              }}
              loading="lazy" // Lazy loading para melhor performance
              sizes="(max-width: 768px) 150px, 200px"
            />
          </Box>
        ))
      );
    }

    return sequences.flat();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'fit-content',
          animation: 'scroll 40s linear infinite', // Animação mais lenta para suavidade
          willChange: 'transform', // Otimização de performance
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-25%)', // Ajustado para 4 sequências (100% / 4 = 25%)
            },
          },
        }}
      >
        {brandSequences}
      </Box>
    </Box>
  );
}