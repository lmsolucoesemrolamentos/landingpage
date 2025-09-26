// app/fonts.ts
import { Teachers } from 'next/font/google';

export const teachers = Teachers({
  subsets: ['latin'],
  weight: ['400','500','700'],
  display: 'swap',
  variable: '--font-teachers',
});
