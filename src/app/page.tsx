import { Box } from "@mui/material";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Navbar from "@/components/Navbar";
import BearingsSection from "@/components/BearingsSection";
import NotFoundSection from "@/components/NotFoundSection";
import PartnerBrandSection from "@/components/PartnerBrandSection";
import CustomProjectSection from "@/components/CustomProjectSection";
import MaintenanceSection from "@/components/MaintenanceSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WeDoAllSection from "@/components/WeDoAll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
      >
        Ir para o conteúdo principal
      </a>

      <main id="main-content">
        <Box sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
        }}>
          {/* camada de fundo */}
          <Box>
            {/* imagem do rolamento inicial */}
            <Box sx={{
              position: "absolute",
              top: { xs: '60vh', md: '30%' },
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 0,
            }}>
              <Box sx={{ display: { xs: 'none', md: 'block' }, maxWidth: '100%', overflow: 'hidden' }}>
                <Image
                  src='/images/center.webp'
                  alt="Rolamento industrial de alta performance para indústria petrolífera e agronegócio - LM Soluções em Rolamentos"
                  width={2000}
                  height={2000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '2000px',
                  }}
                />
              </Box>
              <Box sx={{ display: { xs: 'block', md: 'none' }, maxWidth: '100%', overflow: 'hidden' }}>
                <Image
                  src='/images/mobile.webp'
                  alt="Rolamento industrial de alta performance para indústria petrolífera e agronegócio - LM Soluções em Rolamentos"
                  width={2000}
                  height={2000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  style={{
                    width: '160%',
                    transform: 'translateX(-20%)',
                    height: 'auto',
                    maxWidth: '2000px',
                  }}
                />
              </Box>
            </Box>
          </Box>
          {/* camada do conteudo que deve ficar em cima da outra camada */}
          <Box sx={{
            position: "relative",
            // zIndex: 1,
          }}>
            <Hero />
            <Navbar />
            <Box sx={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(200px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              // overflow: 'hidden',
              alignItems: 'center',
              gap: { xs: 3, md: 4 },
              position: 'relative',
              overflow: 'clip',
              clipPath: 'inset(0)',
              contain: 'paint',
              isolation: 'isolate',
            }}>

              {/* imagem de efeito de cor */}
              <Box sx={{
                position: "absolute",
                top: { xs: '11%', md: '8%' },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 0,
              }}>
                <Image
                  src="/images/LM/multicolor.svg"
                  alt='efeito de cor - LM Soluções em Rolamentos'
                  width={2000}
                  height={2000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  style={{
                    opacity: 0.8,
                    width: '100%',
                    height: 'auto',
                    maxWidth: '2000px',
                  }}
                />
              </Box>
              <Box sx={{
                position: "absolute",
                top: { xs: '45%', md: '40%' },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 0,
              }}>
                <Image
                  src="/images/LM/multicolor.svg"
                  alt='efeito de cor - LM Soluções em Rolamentos'
                  width={2000}
                  height={2000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  style={{
                    opacity: 0.8,
                    width: '100%',
                    height: 'auto',
                    maxWidth: '2000px',
                  }}
                />
              </Box>
              <Box sx={{
                position: "absolute",
                bottom: { xs: '1%', md: '-3%' },
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 0,
              }}>
                <Image
                  src="/images/LM/multicolor.svg"
                  alt='efeito de cor - LM Soluções em Rolamentos'
                  width={2000}
                  height={2000}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  style={{
                    opacity: 0.8,
                    width: '100%',
                    height: 'auto',
                    maxWidth: '2000px',
                  }}
                />
              </Box>

              {/* Seções */}
              <ServicesSection />
              <BearingsSection />
              <NotFoundSection />
              <PartnerBrandSection />
              <CustomProjectSection />
              <MaintenanceSection />
              <WhoWeAreSection />
              <WeDoAllSection />

              <Footer />
            </Box>
          </Box>
        </Box>
      </main>
    </>
  );
}
