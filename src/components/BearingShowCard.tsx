'use client';

import { Box, TextField, IconButton, Card, CardContent, Typography, Chip } from '@mui/material';
import { ChevronLeft, ChevronRight, Search } from '@mui/icons-material';
import { useState, useRef } from 'react';
import Image from 'next/image';

interface BearingTag {
  icon: string;
  title: string;
}

interface BearingItem {
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
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  // Renderiza todos os items inicialmente para SEO, depois aplica filtro visual
  const itemsToShow = searchTerm ? filteredData : bearingData

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: 2, md: 4 },
        py: { xs: 2, md: 4 },
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
            sx={{
              borderRadius: 0.5,
              backgroundColor: 'rgba(255, 136, 0, 0.1)',
              color: '#FF8800',
              '&:hover': {
                backgroundColor: 'rgba(255, 136, 0, 0.2)',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={scrollRight}
            sx={{
              borderRadius: 0.5,
              backgroundColor: 'rgba(255, 136, 0, 0.1)',
              color: '#FF8800',
              '&:hover': {
                backgroundColor: 'rgba(255, 136, 0, 0.2)',
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
          pb: 2,
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
              onClick={() => onSelectBearing(index)}
              sx={{
                minWidth: 280,
                maxWidth: 280,
                display: isVisible ? 'flex' : 'none', // Esconde visualmente mas mantém no DOM
                flexDirection: 'column',
                bgcolor: isSelected ? 'rgba(255, 136, 0, 0.1)' : 'background.default',
                boxShadow: 0,
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                border: isSelected ? '2px solid #FF8800' : '2px solid transparent',
              }}
            >
              {/* Imagem do rolamento */}
              <Box
                sx={{
                  position: 'relative',
                  height: 200,
                  // backgroundColor: '#f5f5f5',
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
                    padding: '20px',
                  }}
                />
              </Box>

              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {item.tags.map((tag, tagIndex) => (
                    <Chip
                      key={tagIndex}
                      icon={<i className={tag.icon} />}
                      label={tag.title}
                      size="small"
                      sx={{
                        backgroundColor: '#FF8800',
                        color: 'white',
                        fontSize: '0.75rem',
                        '& .MuiChip-icon': {
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Título */}
                <Typography
                  variant="body1"
                  sx={{
                    color: '#181A22',
                  }}
                >
                  {item.title}
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
            Nenhum rolamento encontrado para "{searchTerm}"
          </Typography>
          <Typography variant="body2">
            Tente usar outros termos de busca
          </Typography>
        </Box>
      )}
    </Box>
  );
}