'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Fade,
  ClickAwayListener,
} from '@mui/material';
import { Search as SearchIcon, Close as CloseIcon } from '@mui/icons-material';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSearchValue('');
  };

  const handleClickAway = () => {
    if (isExpanded && !searchValue.trim()) {
      handleClose();
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        {/* Search compacto */}
        {!isExpanded && (
          <Box
            onClick={handleExpand}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              px: 2,
              py: 1,
              borderRadius: 3,
              backgroundColor: 'var(--bg-search)',
              border: '1px solid var(--icons)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(248, 249, 250, 0.8)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            <SearchIcon
              sx={{
                color: 'var(--icons)',
                fontSize: 20
              }}
            />
            <Box
              component="span"
              sx={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                userSelect: 'none',
              }}
            >
              Pesquise algum serviço
            </Box>
          </Box>
        )}

        {/* Search expandido */}
        <Fade in={isExpanded} timeout={300}>
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid var(--icons)',
              p: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
              <TextField
                fullWidth
                autoFocus
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Pesquise por serviços, rolamentos, soluções..."
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 3,
                    backgroundColor: 'var(--bg-search)',
                    fontSize: '1rem',
                    '& fieldset': {
                      borderColor: 'var(--icons)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--primary-main)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--primary-main)',
                    },
                  },
                  '& .MuiInputBase-input': {
                    py: 1.5,
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'var(--icons)' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClose}
                        size="small"
                        sx={{
                          color: 'var(--icons)',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Sugestões de busca - opcional */}
              {searchValue && (
                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box sx={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    Sugestões para "{searchValue}":
                  </Box>
                  <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['Rolamentos', 'Manutenção', 'Consultoria', 'Regeneração'].map((suggestion) => (
                      <Box
                        key={suggestion}
                        sx={{
                          px: 2,
                          py: 0.5,
                          backgroundColor: 'var(--bg-search)',
                          borderRadius: 2,
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          '&:hover': {
                            backgroundColor: 'var(--primary-main)',
                            color: 'white',
                          },
                        }}
                      >
                        {suggestion}
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Fade>
      </Box>
    </ClickAwayListener>
  );
};

export default SearchBar;