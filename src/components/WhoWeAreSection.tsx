import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import Navbar from './Navbar';
import SectionIcon from './SectionIcon';
import IndustryServiceCarousel from './IndustryServiceCarousel';
import BearingShowSection from './BearingShowSection';
import Image from 'next/image';

const ctaButtonStyle = {
  opacity: 1,
  padding: { xs: '16px', md: '24px' },
  borderRadius: 2,
  fontWeight: 400,
  fontSize: { xs: '16px', md: '24px' },
  color: 'white',
  background: 'radial-gradient(67.91% 128.31% at 54.59% 136.4%, #FF4D00 0%, #FF8800 100%)'
}


export default function WhoWeAreSection() {
  return (
    <Box
      id="quem-somos"
      sx={{
        position: 'relative',
        width: '100%'
      }}
    >

      {/* Content */}
      <Box
        sx={{
          width: '100%',
          px: { xs: 2, md: 4 }
        }}
      >


        {/* Header Section */}
        <Box sx={{ mb: { xs: 2, md: 2 } }}>

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>




              <Typography variant="h3" className="gradient-text" mb={2}>
                PORQUE VOCE DEVERIA DEIXAR O SEU PROJETO EM NOSSAS MÃOS?
              </Typography>


              <Typography
                variant="subtitle1"
                mb={2}
              >
                Mais do que produtos, entregamos <b>confiança e performance.</b>
              </Typography>
              <Typography
                variant="subtitle1"
                mb={2}
              >
                Contamos com uma equipe altamente qualificada de engenheiros, técnicos e projetistas, para garantir resultados superiores e atender aos padrões mais rigorosos do mercado em todo o Brasil.
              </Typography>
              <Typography
                variant="subtitle1"
                mb={2}
              >
                Nosso compromisso é gerar eficiência, agilidade e segurança operacional.
              </Typography>


              <Typography
                variant="subtitle1"
                className="gradient-text"
                my={4}
              >
                - LUIZ MARCIANO
              </Typography>



            </Grid>
            <Grid size={{ xs: 0, md: 6 }}>
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  src="/images/engenheiros.png"
                  alt="Quem Somos"
                  layout="responsive"
                  width={700}
                  height={475}
                  style={{ maxHeight: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Box>
  );
}