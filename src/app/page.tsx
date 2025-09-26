import { Box, Container } from "@mui/material";
import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Container sx={{ maxWidth: '3000px !important', p: 0, m: 0 }}>
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
              alt="Rolamento"
              width={2000}
              height={2000}
            />
          </Box>
        </Box>
        {/* camada do conteudo que deve ficar em cima da outra camada */}
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          zIndex: 1,
        }}>
          <Hero />
        </Box>
      </Box>
    </Container>
  );
}
