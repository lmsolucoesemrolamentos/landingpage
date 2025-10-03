'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  ClickAwayListener,
} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState('');
  const [canClose, setCanClose] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const expandTimeRef = useRef<number | null>(null);

  const handleExpand = () => {
    setExpanded(true);
    setCanClose(false);

    // Marca o tempo de expansão
    expandTimeRef.current = Date.now();

    // Permite fechar após 1 segundo
    setTimeout(() => {
      setCanClose(true);
    }, 1000);

    // Foca o input após um pequeno delay para garantir que funcione no mobile
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        // No mobile, garante que o cursor apareça
        inputRef.current.click();
      }
    }, 100);
  };

  const handleClose = () => {
    setExpanded(false);
    setValue('');
    setCanClose(false);
    expandTimeRef.current = null;
  };

  const handleClickAway = () => {
    if (expanded && canClose && !value.trim()) {
      setExpanded(false);
      setCanClose(false);
      expandTimeRef.current = null;
    }
  };

  // Limpa timers quando o componente é desmontado
  useEffect(() => {
    return () => {
      if (expandTimeRef.current) {
        expandTimeRef.current = null;
      }
    };
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
            sx={{
              cursor: expanded ? 'text' : 'pointer',
              '& .MuiOutlinedInput-root': {
                height: 40,               // altura fixa
                borderRadius: 3,
                backgroundColor: 'background.paper',
                transition: 'border-color .2s ease',
                '& fieldset': { borderColor: 'divider' },
                '&:hover fieldset': { borderColor: 'primary.main' },
                '&.Mui-focused fieldset': { borderColor: 'primary.main' },
              },
              '& .MuiInputBase-input': { py: 0 }, // sem “pulo” vertical
            }}
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
