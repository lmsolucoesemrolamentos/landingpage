'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  ClickAwayListener,
  Grow,
  Fade,
} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState('');
  const [canClose, setCanClose] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const expandTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Função para expandir com animação fluida
  const handleExpand = useCallback(() => {
    if (expanded) return;

    setExpanded(true);
    setCanClose(false);
    expandTimeRef.current = Date.now();

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

    // Permite fechar após animação completa
    setTimeout(() => {
      setCanClose(true);
    }, 500); // Sincronizado com a duração da animação CSS
  }, [expanded]);

  // Função para fechar com animação fluida
  const handleClose = useCallback(() => {
    if (!expanded) return;

    setShowSuggestions(false);

    // Pequeno delay para suavizar o fechamento
    setTimeout(() => {
      setExpanded(false);
      setValue('');
      setCanClose(false);
      expandTimeRef.current = null;

      if (inputRef.current) {
        inputRef.current.blur();
      }
    }, 100);
  }, [expanded]);

  // Click away otimizado
  const handleClickAway = useCallback(() => {
    if (expanded && canClose && !value.trim()) {
      handleClose();
    }
  }, [expanded, canClose, value, handleClose]);

  // Gerenciar hash da URL para #pesquisar
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#pesquisar') {
        handleExpand();
        // Remove o hash após expandir para não afetar o histórico
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    // Verifica hash inicial
    handleHashChange();

    // Escuta mudanças no hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleExpand]);

  // Gerenciar sugestões de forma otimizada
  useEffect(() => {
    if (expanded && value.trim()) {
      const timer = setTimeout(() => {
        setShowSuggestions(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setShowSuggestions(false);
    }
  }, [expanded, value]);

  // Limpa timers e animações quando desmonta
  useEffect(() => {
    return () => {
      if (expandTimeRef.current) {
        expandTimeRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Handler de mudança de valor otimizado
  const handleValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      {/* Container com position absolute quando expandido */}
      <Box
        sx={(t) => ({
          position: expanded ? 'absolute' : 'relative',
          top: expanded ? 0 : 'auto',
          left: expanded ? 0 : 'auto',
          right: expanded ? 0 : 'auto',
          zIndex: expanded ? t.zIndex.modal : 'auto',
          width: expanded ? '100vw' : '100%',
          maxWidth: expanded ? 'none' : 1200,
          backgroundColor: expanded ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: expanded ? 'blur(10px)' : 'none',
          boxShadow: expanded ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          py: expanded ? 3 : 0,
          px: expanded ? 3 : 0,
        })}
      >
        {/* Container interno centralizado */}
        <Box
          sx={{
            maxWidth: expanded ? 1200 : '100%',
            mx: expanded ? 'auto' : 0,
            width: '100%',
          }}
        >
          <TextField
            fullWidth
            inputRef={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClick={!expanded ? handleExpand : undefined}
            onFocus={!expanded ? handleExpand : undefined}
            placeholder="Pesquise por serviços, rolamentos, soluções..."
            variant="outlined"
            size="small" // base pra 40px
            InputProps={{
              readOnly: !expanded, // no compacto, só clica pra expandir
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
              endAdornment: expanded ? (
                <InputAdornment position="end">
                  <IconButton onClick={handleClose} size="small">
                    <CloseIcon />
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
            sx={(t) => ({
              cursor: expanded ? 'text' : 'pointer',
              '& .MuiOutlinedInput-root': {
                height: 60,
                borderRadius: 1,
                backgroundColor: 'background.paper',
                transition: 'border-color .2s ease',
                '& fieldset': { border: 'none' },
                // '&:hover fieldset': { borderColor: 'primary.main' },
                // '&.Mui-focused fieldset': { borderColor: 'primary.main' },
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
          // sx={{
          //   cursor: expanded ? 'text' : 'pointer',
          //   '& .MuiOutlinedInput-root': {
          //     height: 40,               // altura fixa
          //     borderRadius: 3,
          //     backgroundColor: 'background.paper',
          //     transition: 'border-color .2s ease',
          //     '& fieldset': { borderColor: 'divider' },
          //     '&:hover fieldset': { borderColor: 'primary.main' },
          //     '&.Mui-focused fieldset': { borderColor: 'primary.main' },
          //   },
          //   '& .MuiInputBase-input': { py: 0 }, // sem “pulo” vertical
          // }}
          />

          {/* sugestões opcionais (empurram o layout normalmente) */}
          {expanded && value && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              }}
            >
              <Box sx={{ fontSize: '0.875rem', color: 'text.secondary' }}>
                Sugestões para “{value}”:
              </Box>
              <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['Rolamentos', 'Manutenção', 'Consultoria', 'Repotencialização'].map((s) => (
                  <Box
                    key={s}
                    sx={{
                      px: 2,
                      py: 0.5,
                      backgroundColor: 'background.paper',
                      borderRadius: 2,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                    }}
                  >
                    {s}
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </ClickAwayListener>
  );
}
