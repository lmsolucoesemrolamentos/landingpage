import { Box, Container } from "@mui/material";
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

export default function Home() {
  return (
    <main>
      <Container component="section" sx={{ maxWidth: '3000px !important', p: '0px !important', m: 0 }}>
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
              left: 0,
            }}>
              <Image
                src="/images/rolamento_background.png"
                alt="Rolamento industrial de alta performance para indústria petrolífera e agronegócio - LM Soluções em Rolamentos"
                width={2000}
                height={2000}
                priority
              />
            </Box>
          </Box>
          {/* camada do conteudo que deve ficar em cima da outra camada */}
          <Box sx={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 1,
            // gap: 2
            gap: 0
          }}>
            <Hero />
            <Navbar />
            <Box sx={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(200px)',
            }}>
              <ServicesSection />
              <BearingsSection />
              <NotFoundSection />
              <PartnerBrandSection />
              <CustomProjectSection />
              <MaintenanceSection />
              <WhoWeAreSection />

              <ServicesSection />
              <ServicesSection />
              <ServicesSection />
              <ServicesSection />
            </Box>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
