"use client"

import { useState, useRef } from "react"
import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"

const ctaButtonStyle = {
  opacity: 1,
  padding: { xs: '16px', md: '24px' },
  borderRadius: 2,
  fontWeight: 400,
  fontSize: { xs: '16px', md: '24px' },
  color: 'white',
  background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #FF4D00 0%, #FF8800 100%)'
}

const services = [
  {
    id: "petrolifera",
    title: "PETROLÍFERA",
    description: "Projetados para atender às demandas da indústria petrolífera, nossos rolamentos garantem segurança, durabilidade e performance inigualável, suportando condições máximas de pressão, carga e temperatura.",
    image: "/images/industry.png",
    ctaText: "Falar Com Especialista",
    href: "#contato-petrolifera",
  },
  {
    id: "agro",
    title: "AGRO",
    description: "Soluções robustas para o agronegócio, desenvolvidas para",
    highlights: "máxima eficiência e resistência.",
    details: "Ideais para equipamentos agrícolas e condições severas do campo.",
    image: "/images/industry.png",
    ctaText: "Conhecer Soluções",
    href: "#solucoes-agro",
  },
  {
    id: "automotiva",
    title: "AUTOMOTIVA",
    description: "Rolamentos desenvolvidos para veículos de alta performance, oferecendo",
    highlights: "precisão, velocidade e longa vida útil.",
    details: "Perfeitos para sistemas de transmissão, motores e rodas.",
    image: "/images/industry.png",
    ctaText: "Saiba Mais",
    href: "#solucoes-automotiva",
  },
  {
    id: "siderurgica",
    title: "SIDERÚRGICA",
    description: "Componentes robustos para ambientes extremos, garantindo",
    highlights: "alta resistência a calor e desgaste.",
    details: "Projetados para suportar processos de laminação e fundição.",
    image: "/images/industry.png",
    ctaText: "Ver Detalhes",
    href: "#solucoes-siderurgica",
  },
  {
    id: "mineracao",
    title: "DE MINERAÇÃO",
    description: "Rolamentos criados para condições severas, garantindo",
    highlights: "força, estabilidade e confiabilidade.",
    details: "Resistência superior a poeira, choque e cargas pesadas.",
    image: "/images/industry.png",
    ctaText: "Explorar Soluções",
    href: "#solucoes-mineracao",
  },
  {
    id: "alimenticia",
    title: "ALIMENTÍCIA",
    description: "Projetados para ambientes higiênicos, assegurando",
    highlights: "qualidade, limpeza e durabilidade.",
    details: "Atendem normas sanitárias e suportam lavagens constantes.",
    image: "/images/industry.png",
    ctaText: "Conhecer Aplicações",
    href: "#solucoes-alimenticia",
  },
  {
    id: "energetica",
    title: "ENERGÉTICA",
    description: "Soluções para geração de energia renovável e tradicional, oferecendo",
    highlights: "eficiência, robustez e baixa manutenção.",
    details: "Usados em turbinas eólicas, hidroelétricas e termelétricas.",
    image: "/images/industry.png",
    ctaText: "Ver Soluções",
    href: "#solucoes-energetica",
  },
  {
    id: "quimica",
    title: "QUÍMICA",
    description: "Rolamentos resistentes a agentes químicos, garantindo",
    highlights: "confiabilidade, resistência e segurança.",
    details: "Projetados para operar em contato com substâncias corrosivas.",
    image: "/images/industry.png",
    ctaText: "Falar Com Especialista",
    href: "#solucoes-quimica",
  },
]

export default function IndustryServiceCarousel() {
  const [selected, setSelected] = useState<string>(services[0].id)
  const containerRef = useRef<HTMLElement>(null)

  const handleServiceClick = (serviceId: string, index: number) => {
    setSelected(serviceId)

    // Scroll para o item selecionado
    if (containerRef.current) {
      const itemWidth = window.innerWidth < 600 ? 280 : 450 // minWidth dos items
      const gap = window.innerWidth < 900 ? 16 : 32 // gap entre items
      const marginLeft = window.innerWidth < 900 ? 16 : 32 // margin left do primeiro item

      const scrollPosition = 0 + (index * (itemWidth + gap))

      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "flex-start",
        gap: { xs: 2, md: 4 },
        width: "100%",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {services.map((service, index) => {
        const isActive = selected === service.id

        return (
          <Box
            key={service.id}
            onClick={() => handleServiceClick(service.id, index)}
            sx={{
              minWidth: { xs: "280px", sm: "450px" },
              // height: 400,
              borderRadius: 1,
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
              // scrollSnapAlign: "start",
              backgroundImage: `url(${service.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0px -80px",
              backgroundAttachment: "local",
              backgroundSize: "140% auto",
              filter: isActive ? "none" : "grayscale(1) saturate(0)",
              transition: "all 0.6s ease",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              ...index === 0 ? { ml: { xs: 2, md: 4 } } : {},
              ...index === services.length - 1 ? { mr: { xs: 2, md: 4 } } : {},
            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              p: 2,
              pt: { xs: 6, md: 8 }
            }}>
              <Typography variant="subtitle1" sx={{ color: 'white' }}>INDÚSTRIA</Typography>
              <Typography variant="h2" sx={{ color: 'white' }}>{service.title}</Typography>
            </Box>

            <Box
              aria-hidden={!isActive}
              sx={{
                background: 'color-mix(in srgb, white 32%, transparent 100%)',
                backdropFilter: 'blur(40px)',
                px: 2,
                pt: 0,
                overflow: 'hidden',
                maxHeight: isActive ? '400px' : 0,
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateY(0)' : 'translateY(-6px)',
                transition: 'max-height .3s linear, opacity .3s linear, transform .3s ease',
                willChange: 'max-height, opacity, transform',
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
                {service.description}
              </Typography>

              <Button sx={{ ...ctaButtonStyle, my: 2 }}>
                {service.ctaText}
              </Button>
            </Box>

          </Box>
        )
      })}
    </Box>
  )
}
