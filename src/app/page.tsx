import { Box, Container } from "@mui/material";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";

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
            gap: 2
          }}>
            <Hero />
            <ServicesSection />
          </Box>
        </Box>
      </Container>
    </main>
  );
}
