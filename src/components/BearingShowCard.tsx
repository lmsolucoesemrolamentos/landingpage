'use client';

import { Box, TextField, IconButton, Card, CardContent, Typography, Chip } from '@mui/material';
import { ChevronLeft, ChevronRight, Search } from '@mui/icons-material';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BearingTag {
  icon: string;
  title: string;
}

interface BearingItem {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  tags: BearingTag[];
  highlight?: boolean;
}


interface BearingShowCardProps {
  bearingData: BearingItem[];
  selectedIndex: number;
  onSelectBearing: (index: number) => void;
}


export default function BearingShowCard({ bearingData, selectedIndex, onSelectBearing }: BearingShowCardProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(bearingData)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Função para verificar se pode fazer scroll
  const checkScrollability = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current

    // Pode fazer scroll para esquerda se não estiver no início
    setCanScrollLeft(scrollLeft > 5) // 5px de tolerância

    // Pode fazer scroll para direita se não estiver no final
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5) // 5px de tolerância
  }

  // Função para fazer scroll até o rolamento selecionado
  const scrollToSelectedBearing = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 200; // minWidth do card
      const gap = 16; // gap entre cards (4 * 4px = 16px no tema)
      const containerPadding = 32; // px das laterais (4 * 8px = 32px no tema md)
      const cardTotalWidth = cardWidth + gap;

      // Calcula a posição do card selecionado
      const scrollPosition = index * cardTotalWidth - containerPadding;

      // Faz scroll suave até a posição
      scrollContainerRef.current.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  // useEffect para fazer scroll quando selectedIndex mudar
  useEffect(() => {
    if (selectedIndex >= 0) {
      // Pequeno delay para garantir que o DOM foi atualizado
      setTimeout(() => {
        scrollToSelectedBearing(selectedIndex);
      }, 100);
    }
  }, [selectedIndex]);

  // useEffect para verificar scrollabilidade inicial e adicionar listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Verifica scrollabilidade inicial
    setTimeout(() => checkScrollability(), 100);

    // Adiciona listener para mudanças de scroll
    const handleScroll = () => {
      checkScrollability();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Verifica querystring ao montar o componente e observa mudanças
  useEffect(() => {
    const checkBearingParam = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const bearingParam = urlParams.get('bearing');

      if (bearingParam) {
        const bearingIndex = parseInt(bearingParam, 10);

        // Verifica se o índice é válido
        if (!isNaN(bearingIndex) && bearingIndex >= 0 && bearingIndex < bearingData.length) {
          // Chama a função de seleção se o índice for diferente do atual
          if (bearingIndex !== selectedIndex) {
            onSelectBearing(bearingIndex);
          }

          // Remove a querystring após processar
          const url = new URL(window.location.href);
          url.searchParams.delete('bearing');
          window.history.replaceState({}, '', url.toString());
        }
      }
    };

    // Verifica na montagem
    checkBearingParam();

    // Escuta mudanças na URL (botão voltar/avançar do navegador)
    const handlePopState = () => {
      checkBearingParam();
    };

    window.addEventListener('popstate', handlePopState);

    // Observa mudanças na URL usando MutationObserver para capturar mudanças via JavaScript
    let lastUrl = window.location.href;
    const urlObserver = new MutationObserver(() => {
      const currentUrl = window.location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        checkBearingParam();
      }
    });

    // Observa mudanças no documento (para capturar mudanças de URL via JavaScript)
    urlObserver.observe(document, { subtree: true, childList: true });

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState);
      urlObserver.disconnect();
    };
  }, [bearingData.length, selectedIndex, onSelectBearing]);

  // Filtra os dados baseado no termo de busca (apenas após primeira renderização para SEO)
  const handleSearch = (term: string) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setFilteredData(bearingData)
    } else {
      const filtered = bearingData.filter(item =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()) ||
        item.tags.some(tag => tag.title.toLowerCase().includes(term.toLowerCase()))
      )
      setFilteredData(filtered)
    }
  }

  // Navegação por setas
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 200; // minWidth do card
      const gap = 16; // gap entre cards (xs: 2 = 16px)
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 200; // minWidth do card
      const gap = 16; // gap entre cards (xs: 2 = 16px)
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }

  // Função para fazer scroll para baixo quando um card é clicado
  const handleCardClick = (index: number) => {
    // Chama a função original de seleção
    onSelectBearing(index);

    // Adiciona hash na URL com o id do rolamento
    setTimeout(() => {
      const bearingId = bearingData[index].id;
      window.location.hash = bearingId;
    }, 500); // Delay para esperar a rolagem

    // // Remove querystring se existir (para limpar estado)
    // const url = new URL(window.location.href);
    // if (url.searchParams.has('bearing')) {
    //   url.searchParams.delete('bearing');
    //   window.history.replaceState({}, '', url.toString());
    // }

    // // Detecta se é mobile ou desktop e faz scroll apropriado
    // const isMobile = window.innerWidth < 768;
    // const scrollDistance = isMobile ? 400 : 500;

    // // Faz scroll suave para baixo
    // window.scrollBy({
    //   top: scrollDistance,
    //   behavior: 'smooth'
    // });
  };

  // Renderiza todos os items inicialmente para SEO, depois aplica filtro visual
  const itemsToShow = searchTerm ? filteredData : bearingData

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 0, md: 2 },
        py: { xs: 4, md: 4 },
        width: '100%',
      }}
    >
      {/* Header com pesquisa e navegação */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          px: { xs: 2, md: 4 },
        }}
      >
        {/* Campo de pesquisa */}
        <TextField
          placeholder="Procurando por algo específico?"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ color: '#FF8800', mr: 1 }} />,
            sx: {
              borderRadius: '25px',
              border: 'none !important',
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '0px',
                border: 'none',
                borderBottom: '1px solid #A9ADBE',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FF8800',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FF8800',
              },
            }
          }}
          sx={{
            flexGrow: 1,
            maxWidth: '400px',
          }}
        />

        {/* Setas de navegação */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            sx={{
              borderRadius: 0.5,
              backgroundColor: !canScrollLeft ? 'rgba(169, 173, 190, 0.1)' : 'rgba(255, 136, 0, 0.1)',
              color: !canScrollLeft ? '#A9ADBE' : '#FF8800',
              '&:hover': {
                backgroundColor: !canScrollLeft ? 'rgba(169, 173, 190, 0.1)' : 'rgba(255, 136, 0, 0.2)',
              },
              '&.Mui-disabled': {
                backgroundColor: 'rgba(169, 173, 190, 0.1)',
                color: '#A9ADBE',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={scrollRight}
            disabled={!canScrollRight}
            sx={{
              borderRadius: 0.5,
              backgroundColor: !canScrollRight ? 'rgba(169, 173, 190, 0.1)' : 'rgba(255, 136, 0, 0.1)',
              color: !canScrollRight ? '#A9ADBE' : '#FF8800',
              '&:hover': {
                backgroundColor: !canScrollRight ? 'rgba(169, 173, 190, 0.1)' : 'rgba(255, 136, 0, 0.2)',
              },
              '&.Mui-disabled': {
                backgroundColor: 'rgba(169, 173, 190, 0.1)',
                color: '#A9ADBE',
              },
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>

      {/* Content - Scroll horizontal com cards */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: { xs: 2, md: 4 },
          pt: { xs: 2, md: 2 },
          // pb: 2,
          px: { xs: 2, md: 4 },
          scrollBehavior: 'smooth',
          scrollSnapType: "x mandatory",
          '&::-webkit-scrollbar': {
            height: 8,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#FF8800',
            borderRadius: 4,
            '&:hover': {
              backgroundColor: '#E67700',
            },
          },
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "flex-start",
          width: "100%",
          userSelect: "none", // Previne seleção de texto durante o drag
          // Remove scrollbar customizada para melhor UX
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
        }}
      >
        {/* Renderiza todos os items para SEO, mas esconde os filtrados */}
        {bearingData.map((item, index) => {
          const isVisible = itemsToShow.includes(item)
          const isSelected = index === selectedIndex

          return (
            <Card
              key={index}
              onClick={() => handleCardClick(index)}
              sx={{
                minWidth: 200,
                maxWidth: 200,
                minHeight: 300,
                display: isVisible ? 'flex' : 'none',
                flexDirection: 'column',
                bgcolor: isSelected ? 'rgba(255, 136, 0, 0.1)' : 'background.default',
                boxShadow: 0,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                border: isSelected ? '2px solid #FF8800' : '2px solid transparent',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 0px 20px rgba(30, 31, 41, 0.06)',
                },
              }}
            >
              {/* Imagem do rolamento */}
              <Box
                sx={{
                  position: 'relative',
                  height: 200,
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: 'contain',
                    padding: '16px',
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 1, pb: '8px !important' }}>
                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: 0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    {item.highlight && (
                      <Chip
                        label="Mais buscados"
                        size="small"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'white',
                          fontSize: { xs: '12px', md: '20px' },
                          borderRadius: 0.5,
                          '& .MuiChip-icon': {
                            color: 'white',
                          },
                        }}
                      />
                    )}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0 }}>
                    {item.tags.map((tag, tagIndex) => (
                      <i className={tag.icon} key={tagIndex} style={{ fontSize: '20px', color: '#A9ADBE' }}></i>
                    ))}
                  </Box>
                </Box>

                {/* Título */}
                <Typography
                  variant="body2"
                  sx={{
                    color: '#181A22',
                  }}
                >
                  {item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}
                </Typography>

              </CardContent>
            </Card>
          )
        })}
      </Box>

      {/* Mensagem quando não há resultados */}
      {searchTerm && filteredData.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
            py: 4,
            color: 'text.secondary',
          }}
        >
          <Typography variant="h6">
            Nenhum rolamento encontrado para &quot;{searchTerm}&quot;
          </Typography>
          <Typography variant="body2">
            Tente usar outros termos de busca
          </Typography>
        </Box>
      )}
    </Box>
  );
}