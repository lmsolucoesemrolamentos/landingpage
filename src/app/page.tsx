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
            <Box sx={{
              position: "absolute",
              top: '30%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 0,
            }}>
              <Image
                src="/images/LM/center.webp"
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
          </Box>
          {/* camada do conteudo que deve ficar em cima da outra camada */}
          <Box sx={{
            position: "relative",
            zIndex: 1,
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
              alignItems: 'center',
              gap: { xs: 3, md: 4 }
            }}>
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
