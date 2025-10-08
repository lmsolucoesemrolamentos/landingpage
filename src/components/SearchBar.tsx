'use client';

import { useEffect } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useSearch } from '../contexts/SearchContext';

export default function SearchBar() {
  const { openSearch } = useSearch();

  // Gerenciar hash da URL para #pesquisar
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#pesquisar') {
        openSearch();
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
  }, [openSearch]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <TextField
        fullWidth
        onClick={openSearch}
        // onFocus={openSearch}
        placeholder="Pesquise por serviços, rolamentos, soluções..."
        variant="outlined"
        size="small"
        InputProps={{
          readOnly: true, // Apenas trigger, não editável
          inputProps: {
            style: { cursor: 'pointer' }
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'primary.main' }} />
            </InputAdornment>
          ),
        }}
        sx={(t) => ({
          cursor: 'pointer',
          '& .MuiOutlinedInput-root': {
            height: { xs: 40, sm: 60 },
            borderRadius: 1,
            backgroundColor: 'background.paper',
            transition: 'border-color .2s ease',
            '& fieldset': { border: 'none' },
            '&:hover': {
              backgroundColor: 'grey.50',
            },
          },

          /* Placeholder com subtitle2 */
          '& .MuiInputBase-input': {
            ...t.typography.subtitle2,
            paddingTop: 0,
            paddingBottom: 0,
            cursor: 'pointer',
          },

          '& .MuiInputBase-input::placeholder': {
            ...t.typography.subtitle2,
            opacity: 0.6,
          },
        })}
      />
    </Box>
  );
}