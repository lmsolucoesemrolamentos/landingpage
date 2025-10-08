'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  isOpen: boolean;
  searchValue: string;
  openSearch: () => void;
  closeSearch: () => void;
  setSearchValue: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const openSearch = () => {
    setIsOpen(true);
  };

  const closeSearch = () => {
    setIsOpen(false);
    setSearchValue('');
  };

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        searchValue,
        openSearch,
        closeSearch,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}