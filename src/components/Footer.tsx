'use client';

import { Box, Typography, IconButton, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const footerNavItems = [
  { label: 'Sob demanda', href: '#sob-demanda' },
  { label: 'Serviços', href: '#sob-demanda' },
  { label: 'Rolamentos', href: '#rolamentos' },
  { label: 'Manutenção', href: '#manutencao' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Fale conosco', href: '#contato' },
];

const socialLinks = [
  { icon: 'ri-whatsapp-line', href: 'https://wa.me/5511999999999', label: 'WhatsApp' },
  { icon: 'ri-instagram-line', href: 'https://instagram.com/lmsolucoes', label: 'Instagram' },
  { icon: 'ri-linkedin-line', href: 'https://linkedin.com/company/lmsolucoes', label: 'LinkedIn' },
  { icon: 'ri-phone-line', href: 'tel:+5511999999999', label: 'Fale conosco' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorativo */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-50%',
          right: '50%',
          transform: 'translateX(50%)',
          width: '120%',
          height: '120%',
          opacity: 0.1,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/rolamento_background.png"
          alt=""
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
      </Box>

      {/* Container principal */}
      <Container maxWidth="xl" sx={{ padding: '0px !important' }}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            height: { xs: 'auto', md: '400px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 6 },
          }}
        >
          {/* Versão Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '100%',
              gap: 4,
            }}
          >
            {/* Logo e descrição - Desktop */}
            <Box sx={{ maxWidth: 400, flex: 1 }}>
              {/* Logo e nome */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Image
                      src="/images/LM_logo2.svg"
                      alt="LM logo"
                      width={40}
                      height={40}
                      style={{ borderRadius: 4 }}
                    />
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        textAlign: 'left',
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: { xs: '1rem', md: '1.25rem', minWidth: 185 },
                      }}
                    >
                      LM SOLUÇÕES <br /> EM ROLAMENTOS
                    </Typography>
                  </Box>
                </Link>
              </Box>

              {/* Descrição da empresa para SEO */}
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{}}
              >
                Contamos com uma equipe altamente qualificada de engenheiros, técnicos e projetistas, para garantir resultados superiores e atender aos padrões mais rigorosos do mercado em todo o Brasil.
              </Typography>
            </Box>

            {/* Links de navegação e redes sociais - Desktop */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 12,
                alignItems: 'flex-start',
                height: '100%',
              }}
            >
              {/* Links de navegação */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                {footerNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          cursor: 'pointer',
                        },
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Box>

              {/* Redes sociais */}
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                        },
                        transition: 'color 0.2s ease',
                      }}
                    >
                      <Box
                        component="i"
                        className={social.icon}
                        sx={{ fontSize: '18px' }}
                      />
                      <Typography variant="body2">
                        {social.label}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Versão Mobile */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              width: '100%',
            }}
          >
            <Box sx={{ textAlign: 'left' }}>
              {/* Logo Mobile */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Image
                      src="/images/LM_logo2.svg"
                      alt="LM logo"
                      width={40}
                      height={40}
                      style={{ borderRadius: 4 }}
                    />
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        textAlign: 'left',
                        fontWeight: 700,
                        color: 'primary.main',
                        fontSize: { xs: '1rem', md: '1.25rem', minWidth: 185 },
                      }}
                    >
                      LM SOLUÇÕES <br /> EM ROLAMENTOS
                    </Typography>
                  </Box>
                </Link>

                {/* Redes sociais - Mobile */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  {socialLinks.slice(0, 3).map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        sx={{
                          color: 'text.secondary',
                          '&:hover': {
                            color: 'primary.main',
                          },
                        }}
                      >
                        <Box
                          component="i"
                          className={social.icon}
                          sx={{ fontSize: '24px' }}
                        />
                      </IconButton>
                    </Link>
                  ))}
                </Box>
              </Box>

              {/* Descrição Mobile */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2,
                }}
              >
                Contamos com uma equipe altamente qualificada de engenheiros, técnicos e projetistas, para garantir resultados superiores e atender aos padrões mais rigorosos do mercado em todo o Brasil.
              </Typography>

              {/* Links de navegação - Mobile */}
              <Box sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['Diferencial', 'Serviços', 'Rolamentos', 'Quem somos', 'Fale conosco'].map((item) => (
                  <Typography
                    key={item}
                    variant="body2"
                    sx={{
                      color: 'text.primary',
                      mb: 1,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Footer bottom */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '14px', md: '20px' }, fontWeight: 400 }}>
              Todos os direitos reservados
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '14px', md: '20px' }, fontWeight: 400 }} >
                Feito por
              </Typography>
              <Link
                href="https://unilune.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="body2" color="#4A67DD" sx={{ fontSize: { xs: '14px', md: '20px' }, fontWeight: 400 }}              >
                  UniLune
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LM Soluções em Rolamentos",
            "description": "Empresa especializada em soluções industriais para rolamentos, com equipe qualificada de engenheiros, técnicos e projetistas.",
            "url": "https://lmsolucoes.com.br",
            "sameAs": [
              "https://instagram.com/lmsolucoes",
              "https://linkedin.com/company/lmsolucoes"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99999-9999",
              "contactType": "customer service",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "BR"
            }
          })
        }}
      />
    </Box>
  );
}