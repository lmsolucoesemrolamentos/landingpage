import { Box } from '@mui/material';
import Image from 'next/image';

const brands = [
  { name: 'FAG', logo: '/images/brands/fag.png' },
  { name: 'INA', logo: '/images/brands/ina.png' },
  { name: 'IKO', logo: '/images/brands/iko.png' },
  { name: 'BGL', logo: '/images/brands/bgl.png' },
  { name: 'TIMKEN', logo: '/images/brands/timken.png' },
  { name: 'NSK', logo: '/images/brands/nsk.png' },
];

export default function PartnerBrandSection() {
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
          animation: 'scroll 30s linear infinite',
          '@keyframes scroll': {
            '0%': {
              transform: 'translateX(0)',
            },
            '100%': {
              transform: 'translateX(-50%)',
            },
          },
        }}
      >
        {/* Primeira sequência das marcas */}
        {brands.map((brand, index) => (
          <Box
            key={`first-${index}`}
            sx={{
              minWidth: { xs: 150, md: 200 },
              height: { xs: 80, md: 100 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 1,
              position: 'relative',
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
            />
          </Box>
        ))}

        {/* Segunda sequência (duplicada para scroll infinito) */}
        {brands.map((brand, index) => (
          <Box
            key={`first-${index}`}
            sx={{
              minWidth: { xs: 150, md: 200 },
              height: { xs: 80, md: 100 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 1,
              position: 'relative',
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
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}