import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
// import ThemeProvider from "../components/ThemeProvider";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import { teachers } from '../fonts';

export const metadata: Metadata = {
  title: "LM Soluções em Rolamentos | Indústria Petrolífera e Agronegócio",
  description: "Especialistas em rolamentos de alta performance para indústria petrolífera e agronegócio. Soluções sob demanda com segurança, durabilidade e eficiência máxima.",
  keywords: [
    "rolamentos industriais",
    "rolamentos petrolífera",
    "rolamentos agronegócio",
    "soluções rolamentos",
    "rolamentos alta pressão",
    "manutenção industrial",
    "consultoria rolamentos",
    "repotencialização equipamentos"
  ],
  authors: [{ name: "LM Soluções em Rolamentos" }],
  creator: "LM Soluções em Rolamentos",
  publisher: "LM Soluções em Rolamentos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "LM Soluções em Rolamentos | Especialistas em Soluções Industriais",
    description: "Atendemos minusciosamente as necessidades da sua indústria com rolamentos de alta qualidade para petrolífera e agronegócio.",
    url: "https://lmsolucoes.com.br",
    siteName: "LM Soluções em Rolamentos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://lmsolucoes.com.br/images/LM_logo1.svg",
        width: 1200,
        height: 630,
        alt: "LM Soluções em Rolamentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LM Soluções em Rolamentos | Especialistas em Soluções Industriais",
    description: "Soluções sob demanda para indústria petrolífera e agronegócio com rolamentos de alta performance.",
    images: ["https://lmsolucoes.com.br/images/LM_logo1.svg"],
  },
  alternates: {
    canonical: "https://lmsolucoes.com.br",
  },
  category: "Indústria e Manufactura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#324592" />
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href="https://lmsolucoes.com.br" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LM Soluções em Rolamentos",
              "description": "Especialistas em rolamentos de alta performance para indústria petrolífera e agronegócio",
              "url": "https://lmsolucoes.com.br",
              "logo": "https://lmsolucoes.com.br/images/LM_logo1.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.linkedin.com/company/lm-solucoes",
                "https://www.instagram.com/lmsolucoes"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressLocality": "São Paulo"
              },
              "areaServed": "BR",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Rolamentos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rolamentos para Indústria Petrolífera",
                      "description": "Rolamentos projetados para alta pressão, carga e temperatura"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Rolamentos para Agronegócio",
                      "description": "Soluções robustas para equipamentos agrícolas"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={teachers.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
