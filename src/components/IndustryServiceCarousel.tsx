"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Box, Button, Typography, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import Link from "next/link"
import { ctaButtonStyle } from "@/styles/globalStyles"

// Número do WhatsApp para contato
const WHATSAPP_NUMBER = "5511949820295"

const services = [
  {
    id: "petrolifera",
    title: "PETROLÍFERA",
    description: "Projetados para atender às demandas da indústria petrolífera, nossos rolamentos garantem segurança, durabilidade e performance inigualável, suportando condições máximas de pressão, carga e temperatura.",
    image: "/images/LM/industrias/petrolifera.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria petrolífera.'
  },
  {
    id: "agricola",
    title: "AGRÍCOLA",
    description: "Desenvolvidos para suportar os desafios do agronegócio, os rolamentos asseguram movimento contínuo, maior vida útil e eficiência em cada safra.",
    image: "/images/LM/industrias/agricola.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria do agronegócio.'
  },
  {
    id: "quimica",
    title: "QUÍMICA",
    description: "Em indústrias químicas onde existem equipamentos como reatores, misturadores e outras máquinas rotativas, é fundamental a aplicação de rolamentos que atuem em ambientes extremamente agressivos.",
    image: "/images/LM/industrias/quimica.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria química.'
  },
  {
    id: "ferroviaria",
    title: "FERROVIÁRIA",
    description: "Na ferrovia, cada quilômetro percorrido exige confiabilidade absoluta. Os rolamentos desempenham um papel crucial, garantindo o movimento contínuo, seguro e eficiente dos trens de carga e passageiros.",
    image: "/images/LM/industrias/ferroviaria.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria ferroviária.'
  },
  {
    id: "manutencao",
    title: "MANUTENÇÃO",
    description: "Os rolamentos para manutenção industrial são desenvolvidos para otimizar processos, reduzir custos e manter sua operação em movimento.",
    image: "/images/LM/industrias/manutencao.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria de manutenção.'
  },
  {
    id: "sulcroalcooleira",
    title: "SULCOALCOOLEIRA",
    description: "Projetados para vencer os desafios do setor, os rolamentos mantêm o ritmo da produção, garantem segurança, confiabilidade, fortalecem a moagem e movem o futuro da energia renovável!",
    image: "/images/LM/industrias/sulcroalcooleira.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria sucroalcooleira.'
  },
  {
    id: "alimenticia",
    title: "ALIMENTÍCIA",
    description: "Na indústria de alimentos, higiene, segurança e confiabilidade são indispensáveis. Os rolamentos garantem o movimento contínuo de linhas de produção, sempre atendendo aos padrões mais rigorosos de qualidade.",
    image: "/images/LM/industrias/alimenticia.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria alimentícia.'
  },
  {
    id: "siderurgica",
    title: "SIDERÚRGICA",
    description: "Desenvolvidos para enfrentar os desafios da siderurgia, os rolamentos asseguram força, precisão e longa vida útil, mantendo a produção em movimento.",
    image: "/images/LM/industrias/siderurgica.webp",
    whatsMessage: 'Olá, gostaria de falar com um especialista sobre soluções em rolamentos para a indústria siderúrgica.'
  },
]

export default function IndustryServiceCarousel() {
  const [selected, setSelected] = useState<string>(services[0].id)
  const containerRef = useRef<HTMLElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isUserScrollingRef = useRef(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Estados para drag scroll
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Função para calcular dimensões baseadas no breakpoint
  const getItemDimensions = useCallback(() => {
    const itemWidth = window.innerWidth < 600 ? 280 : 480 // Ajustado para coincidir com minWidth
    const gap = window.innerWidth < 900 ? 16 : 24 // Ajustado para coincidir com gap do sx
    return { itemWidth, gap }
  }, [])

  // Função para encontrar o item mais próximo do início
  const findClosestItem = useCallback((scrollLeft: number) => {
    const { itemWidth, gap } = getItemDimensions()
    const itemTotalWidth = itemWidth + gap

    // Calcula qual item está mais próximo do início
    const closestIndex = Math.round(scrollLeft / itemTotalWidth)
    return Math.max(0, Math.min(closestIndex, services.length - 1))
  }, [getItemDimensions])

  // Função para verificar se pode fazer scroll
  const checkScrollability = useCallback(() => {
    if (!containerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current

    // Pode fazer scroll para esquerda se não estiver no início
    setCanScrollLeft(scrollLeft > 5) // 5px de tolerância

    // Pode fazer scroll para direita se não estiver no final
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5) // 5px de tolerância
  }, [])

  // Função para fazer scroll até um item específico
  const scrollToItem = useCallback((index: number, smooth = true) => {
    if (!containerRef.current) return

    const { itemWidth, gap } = getItemDimensions()
    const itemTotalWidth = itemWidth + gap
    const scrollPosition = index * itemTotalWidth

    containerRef.current.scrollTo({
      left: scrollPosition,
      behavior: smooth ? 'smooth' : 'auto'
    })
  }, [getItemDimensions])

  // Handler para quando o scroll parar
  const handleScrollEnd = useCallback(() => {
    if (!containerRef.current || isUserScrollingRef.current) return

    const currentScrollLeft = containerRef.current.scrollLeft
    const closestIndex = findClosestItem(currentScrollLeft)
    const closestService = services[closestIndex]

    // Só atualiza se mudou o item ativo
    if (closestService.id !== selected) {
      setSelected(closestService.id)
    }

    // Sempre faz scroll para garantir posicionamento correto
    scrollToItem(closestIndex, true)
  }, [findClosestItem, scrollToItem, selected])

  // Handler para evento de scroll
  const handleScroll = useCallback(() => {
    // Verifica se pode fazer scroll em cada direção
    checkScrollability()

    if (isUserScrollingRef.current) return

    // Limpa timeout anterior
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    // Define novo timeout para detectar fim do scroll
    scrollTimeoutRef.current = setTimeout(() => {
      handleScrollEnd()
    }, 200) // 200ms para evitar múltiplas chamadas
  }, [handleScrollEnd, checkScrollability])

  const handleServiceClick = (serviceId: string, index: number) => {
    // Só executa se não estiver fazendo drag
    if (isDragging) return

    isUserScrollingRef.current = true
    setSelected(serviceId)
    scrollToItem(index, true)

    // Permite scroll automático novamente após a animação
    setTimeout(() => {
      isUserScrollingRef.current = false
    }, 600) // 600ms para garantir que a animação termine
  }

  // Navegação por setas
  const scrollLeftButton = () => {
    if (containerRef.current && canScrollLeft) {
      const { itemWidth, gap } = getItemDimensions()
      const scrollAmount = itemWidth + gap
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })

      // Verifica após um pequeno delay
      setTimeout(() => checkScrollability(), 300)
    }
  }

  const scrollRightButton = () => {
    if (containerRef.current && canScrollRight) {
      const { itemWidth, gap } = getItemDimensions()
      const scrollAmount = itemWidth + gap
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })

      // Verifica após um pequeno delay
      setTimeout(() => checkScrollability(), 300)
    }
  }

  // Handlers para drag scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)

    // Previne seleção de texto durante o drag
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Multiplica por 2 para scroll mais rápido
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
      // Força a seleção do item mais próximo após soltar o drag
      setTimeout(() => {
        handleScrollEnd()
      }, 50) // Delay menor para resposta mais rápida
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      // Força a seleção do item mais próximo após sair do container
      setTimeout(() => {
        handleScrollEnd()
      }, 50) // Delay menor para resposta mais rápida
    }
  }

  // Effect para adicionar/remover event listeners
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [handleScroll])

  // Effect para lidar com resize da tela
  useEffect(() => {
    const handleResize = () => {
      const currentIndex = services.findIndex(service => service.id === selected)
      if (currentIndex !== -1) {
        // Reposiciona sem animação após resize
        setTimeout(() => {
          scrollToItem(currentIndex, false)
          checkScrollability()
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [selected, scrollToItem, checkScrollability])

  // Effect para verificar scrollabilidade inicial
  useEffect(() => {
    // Verifica scrollabilidade após componente montar
    setTimeout(() => checkScrollability(), 100)
  }, [checkScrollability])

  return (
    <Box sx={{ width: '100%' }}>
      {/* Header com navegação */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 2,
          px: { xs: 2, md: 4 },
          mb: { xs: 2, md: 3 },
        }}
      >
        {/* Setas de navegação */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={scrollLeftButton}
            disabled={!canScrollLeft}
            sx={{
              borderRadius: 0.5,
              backgroundColor: canScrollLeft ? 'rgba(255, 136, 0, 0.1)' : 'rgba(169, 173, 190, 0.1)',
              color: canScrollLeft ? '#FF8800' : '#A9ADBE',
              '&:hover': {
                backgroundColor: canScrollLeft ? 'rgba(255, 136, 0, 0.2)' : 'rgba(169, 173, 190, 0.1)',
              },
              '&.Mui-disabled': {
                color: '#A9ADBE',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={scrollRightButton}
            disabled={!canScrollRight}
            sx={{
              borderRadius: 0.5,
              backgroundColor: canScrollRight ? 'rgba(255, 136, 0, 0.1)' : 'rgba(169, 173, 190, 0.1)',
              color: canScrollRight ? '#FF8800' : '#A9ADBE',
              '&:hover': {
                backgroundColor: canScrollRight ? 'rgba(255, 136, 0, 0.2)' : 'rgba(169, 173, 190, 0.1)',
              },
              '&.Mui-disabled': {
                color: '#A9ADBE',
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      {/* Carrossel das indústrias */}
      <Box
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "flex-start",
          gap: { xs: 2, md: 3 },
          width: "100%",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollPaddingInline: { xs: 16, md: 32 },
          scrollBehavior: "smooth",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none", // Previne seleção de texto durante o drag
          // Remove scrollbar customizada para melhor UX
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
        }}
      >
        {services.map((service, index) => {
          const isActive = selected === service.id

          return (
            <Box
              key={service.id}
              onClick={() => handleServiceClick(service.id, index)}
              sx={{
                minWidth: { xs: "280px", sm: "480px" },
                // height: 400,
                borderRadius: 1,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                scrollSnapAlign: "start", // Ativa snap scrolling
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // backgroundPosition: "0px -80px",
                backgroundAttachment: "local",
                // backgroundSize: "140% auto",
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
                minHeight: { xs: 124, md: 190 },
                p: 2,
                pt: { xs: 6, md: 8 }
              }}>
                <Typography sx={{ color: 'white', fontWeight: '600', fontSize: { xs: '20px', md: '32px' } }}>
                  {service.id === 'manutencao' ? 'INDÚSTRIA DE' : 'INDÚSTRIA'}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: 'white',
                    fontSize: service.id === 'sulcroalcooleira' ? { xs: '24px', md: '46px' } : undefined
                  }}
                >
                  {service.title}
                </Typography>
              </Box>

              <Box
                aria-hidden={!isActive}
                sx={{
                  background: 'color-mix(in srgb, white 32%, transparent 100%)',
                  backdropFilter: 'blur(40px)',
                  px: { xs: 2, md: 3 },
                  pt: 0,
                  overflow: 'hidden',
                  maxHeight: isActive ? '400px' : 0,
                  minHeight: isActive ? { xs: '230px', md: '315px' } : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'start',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'max-height .3s linear, opacity .3s linear, transform .3s ease',
                  willChange: 'max-height, opacity, transform',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <Typography variant="body1" sx={{ color: 'white', mt: { xs: 2, md: 3 } }}>
                  {service.description}
                </Typography>

                <Button
                  component={Link}
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.whatsMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ ...ctaButtonStyle, my: { xs: 2, md: 3 } }}
                >
                  Falar Com Especialista
                </Button>
              </Box>

            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
