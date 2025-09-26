import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid
} from '@mui/material';
import {
  Search as SearchIcon,
  WhatsApp as WhatsAppIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import Image from 'next/image';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
        px: 2,
        py: 2,
        // bgcolor: 'rgba(0,0,0,0.5)',
        // background: 'var(--bg-hero)',
        gap: 2,
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 2,
      }}>
        <Image
          src="/images/LM_logo2.svg"
          alt="LM logo"
          width={40}
          height={40}
        />

        {/* Componente de Search */}
        <SearchBar />
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant='h1'>
            SOLUÇÕES <span style={{ color: 'var(--primary-main)' }}>ESPECIALIZADAS</span> EM ROLAMENTOS
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Conteúdo do segundo grid item */}
          <Card sx={{ flex: 1, width: '100%', minWidth: `100%`, bgcolor: 'rgba(255, 255, 255, 0.35)', backdropFilter: 'blur(20px)' }}>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Atendimento personalizado" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Soluções inovadoras" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WhatsAppIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary="Suporte via WhatsApp" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Hero;