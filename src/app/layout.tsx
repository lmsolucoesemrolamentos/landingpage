import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
// import ThemeProvider from "../components/ThemeProvider";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';

export const metadata: Metadata = {
  title: "LM Soluções em Rolamentos",
  description: "Soluções em Rolamentos de Alta Qualidade para sua Indústria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
