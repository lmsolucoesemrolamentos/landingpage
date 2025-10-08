'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  ClickAwayListener,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon, ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { useSearch } from '../contexts/SearchContext';
import { searchBearings, BearingItem } from '../data/bearingData';
import { ctaButtonStyle } from '@/styles/globalStyles';

export default function SearchBarGlobal() {
  const { isOpen, searchValue, closeSearch, setSearchValue } = useSearch();
  const [searchResults, setSearchResults] = useState<BearingItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Foca o input quando abre
  useEffect(() => {
    if (isOpen) {
      // Usa requestAnimationFrame para animação mais fluida
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        // Foca o input de forma assíncrona para melhor performance
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
          }
        }, 150); // Delay otimizado para sincronizar com a animação
      });
    }
  }, [isOpen]);

  // Click away otimizado
  const handleClickAway = useCallback(() => {
    if (isOpen && !searchValue.trim()) {
      closeSearch();
    }
  }, [isOpen, searchValue, closeSearch]);

  // Handler de mudança de valor otimizado
  const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);

    // Busca rolamentos quando há texto
    if (newValue.trim()) {
      const results = searchBearings(newValue);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [setSearchValue]);

  // Função para scroll horizontal
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Handler para clique nos labels frequentes
  const handleFrequentClick = useCallback((href: string) => {
    // Fecha o search
    closeSearch();

    // Aguarda um pouco para a animação de fechamento
    setTimeout(() => {
      // Navega para a seção
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 200);
  }, [closeSearch]);

  // Limpa timers e animações quando desmonta
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Não renderiza nada se não estiver aberto
  if (!isOpen) {
    return null;
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      {/* Container global com position fixed */}
      <Box
        sx={(t) => ({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: t.zIndex.modal + 1,
          width: '100vw',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          py: 3,
          px: 3,
        })}
      >
        {/* Container interno centralizado */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            inputRef={inputRef}
            value={searchValue}
            onChange={handleValueChange}
            placeholder="Pesquise por serviços, rolamentos, soluções..."
            variant="outlined"
            size="small"
            InputProps={{
              inputProps: {
                // Propriedades específicas para mobile
                autoComplete: 'off',
                autoCorrect: 'off',
                autoCapitalize: 'off',
                spellCheck: false,
                inputMode: 'search',
              },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={closeSearch} size="small">
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={(t) => ({
              '& .MuiOutlinedInput-root': {
                height: 60,
                borderRadius: 1,
                backgroundColor: 'background.paper',
                transition: 'border-color .2s ease',
                '& fieldset': { border: 'none' },
              },

              /* Texto digitado com as mesmas props do Typography variant="subtitle2" */
              '& .MuiInputBase-input': {
                ...t.typography.subtitle2,
                paddingTop: 0,
                paddingBottom: 0,
              },

              /* Placeholder também com subtitle2 (opcional) */
              '& .MuiInputBase-input::placeholder': {
                ...t.typography.subtitle2,
                opacity: 0.6,
              },

              /* Label do TextField com subtitle2 (se estiver usando label) */
              '& .MuiInputLabel-root': {
                ...t.typography.subtitle2,
              },
            })}
          />

          {/* Resultados da pesquisa ou recomendações */}
          <Box
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <Box sx={{ fontSize: '0.875rem', color: 'text.secondary', mb: 2 }}>
              {searchValue && searchResults.length > 0
                ? `${searchResults.length} rolamentos encontrados para "${searchValue}":`
                : searchValue && searchResults.length === 0
                  ? `Nenhum rolamento encontrado para "${searchValue}"`
                  : 'Pesquisados com frequência'
              }
            </Box>

            {/* Resultados de rolamentos com scroll horizontal */}
            {searchValue && searchResults.length > 0 ? (
              <Box sx={{ position: 'relative' }}>
                {/* Botões de navegação */}
                <IconButton
                  onClick={scrollLeft}
                  sx={{
                    position: 'absolute',
                    left: -8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': { backgroundColor: 'grey.50' },
                  }}
                >
                  <ChevronLeft />
                </IconButton>

                <IconButton
                  onClick={scrollRight}
                  sx={{
                    position: 'absolute',
                    right: -8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': { backgroundColor: 'grey.50' },
                  }}
                >
                  <ChevronRight />
                </IconButton>

                {/* Container de scroll horizontal */}
                <Box
                  ref={scrollContainerRef}
                  sx={{
                    display: 'flex',
                    gap: 2,
                    overflowX: 'auto',
                    pb: 1,
                    px: 1,
                    '&::-webkit-scrollbar': { display: 'none' },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                  }}
                >
                  {searchResults.map((bearing, index) => (
                    <Card
                      key={index}
                      sx={{
                        minWidth: 200,
                        maxWidth: 200,
                        minHeight: 300,
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'background.default',
                        boxShadow: 0,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                        border: '2px solid transparent',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                        },
                      }}
                      onClick={() => {
                        // Fecha o search e navega para a seção de rolamentos
                        closeSearch();

                        // Adiciona querystring com o índice do rolamento selecionado
                        const url = new URL(window.location.href);
                        url.searchParams.set('bearing', index.toString());
                        window.history.pushState({}, '', url.toString());

                        setTimeout(() => {
                          const element = document.querySelector('#rolamentos');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }, 200);
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
                          src={bearing.imgSrc}
                          alt={bearing.title}
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
                            {bearing.highlight && (
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
                            {bearing.tags.map((tag, tagIndex) => (
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
                          {bearing.title.charAt(0).toUpperCase() + bearing.title.slice(1).toLowerCase()}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            ) : !searchValue ? (
              /* Labels frequentes */
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, sm: 4 } }}>
                {[
                  { label: 'Rolamentos Axiais', href: '#rolamentos' },
                  { label: 'Projeto personalizado', href: '#projetos-personalizados' },
                  { label: 'Quem é a LM', href: '#quem-somos' },
                  { label: 'Rolamento', href: '#rolamentos' },
                ].map((s) => (
                  <Box
                    key={s.label}
                    sx={{
                      py: 0.5,
                      backgroundColor: 'transparent',
                      borderRadius: 2,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={() => handleFrequentClick(s.href)}
                  >
                    <i className='ri-search-line' style={{ marginRight: 8 }}></i>
                    {s.label}
                  </Box>
                ))}
              </Box>
            ) : (
              /* Quando não há resultados de pesquisa */
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  py: 4,
                  gap: 2,
                  maxWidth: 500,
                  mx: 'auto',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Não encontrou o que precisa?
                </Typography>

                <Button fullWidth sx={{ ...ctaButtonStyle }} >Falar Com Especialista</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}