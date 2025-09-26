'use client';

import { useEffect } from 'react';
import { injectCSSVariables } from '../theme';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    injectCSSVariables();
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;