import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const serviceCards = [
  {
    id: 'petrolífera',
    title: 'INDÚSTRIA PETROLÍFERA',
    description: 'Projetados para atender às demandas da indústria petrolífera, nossos rolamentos garantem',
    highlights: 'segurança, durabilidade e performance inigualável.',
    details: 'Suportando condições máximas de pressão, carga e temperatura.',
    image: '/images/petrolifera-bg.jpg',
    ctaText: 'Falar Com Especialista',
    href: '#contato-petrolifera'
  },
  {
    id: 'agro',
    title: 'INDÚSTRIA AGRO',
    description: 'Soluções robustas para o agronegócio, desenvolvidas para',
    highlights: 'máxima eficiência e resistência.',
    details: 'Ideais para equipamentos agrícolas e condições severas do campo.',
    image: '/images/agro-bg.jpg',
    ctaText: 'Conhecer Soluções',
    href: '#solucoes-agro'
  }
];

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="servicos"
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.1)',
        minHeight: '100vh',
      }}
    >
      {/* Navbar Sticky */}
      <Navbar />

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 }
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: { xs: 4, md: 6 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                backgroundColor: 'secondary.main',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: 'common.white',
                  fontWeight: 700,
                  fontSize: '1.5rem',
                }}
              >
                03
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 700,
              color: 'primary.main',
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            SERVIÇOS
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.2rem', lg: '2.8rem' },
              fontWeight: 700,
              color: 'primary.dark',
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            SOB DEMANDA
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              color: 'text.secondary',
              maxWidth: 600,
              lineHeight: 1.6,
            }}
          >
            Atendemos minusciosamente as necessidades da sua indústria!
          </Typography>
        </Box>

        {/* Service Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {serviceCards.map((service, index) => (
            <Box
              key={service.id}
              sx={{
                flex: 1,
                minWidth: { xs: '100%', md: '48%' },
              }}
            >
              <Card
                sx={{
                  height: { xs: 400, md: 500 },
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 8,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 16,
                  },
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: index === 0 ?
                      'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)' :
                      'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)',
                    }
                  }}
                />

                <CardContent
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: { xs: 3, md: 4 },
                    color: 'common.white',
                  }}
                >
                  {/* Top Content */}
                  <Box>
                    <Typography
                      variant="overline"
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        letterSpacing: 1,
                        mb: 1,
                        display: 'block',
                      }}
                    >
                      INDÚSTRIA
                    </Typography>

                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                        fontWeight: 700,
                        lineHeight: 1.2,
                        mb: 3,
                      }}
                    >
                      {service.title.replace('INDÚSTRIA ', '')}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        lineHeight: 1.6,
                        mb: 2,
                        opacity: 0.95,
                      }}
                    >
                      {service.description}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.95rem', md: '1rem' },
                        fontWeight: 600,
                        lineHeight: 1.6,
                        mb: 1,
                      }}
                    >
                      {service.highlights}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '0.95rem' },
                        lineHeight: 1.5,
                        opacity: 0.9,
                      }}
                    >
                      {service.details}
                    </Typography>
                  </Box>

                  {/* CTA Button */}
                  <Button
                    variant="contained"
                    component={Link}
                    href={service.href}
                    sx={{
                      backgroundColor: 'secondary.main',
                      color: 'common.white',
                      fontWeight: 600,
                      py: 1.5,
                      px: 3,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1rem',
                      alignSelf: 'flex-start',
                      boxShadow: 4,
                      '&:hover': {
                        backgroundColor: 'secondary.dark',
                        boxShadow: 8,
                      },
                    }}
                  >
                    {service.ctaText}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}