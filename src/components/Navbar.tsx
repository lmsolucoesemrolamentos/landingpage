import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Indústrias', href: '#industrias' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  return (
    <AppBar
      component="nav"
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(20px)',
        border: 'none'
      }}
    >
      <Container maxWidth="xl" sx={{ px: 2, py: 1 }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            // py: theme.spacing(1),
            p: 0,
            border: 'none'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 1 }}>
            <i className="ri-menu-5-fill" style={{ fontSize: '24px', color: 'text.secondary', opacity: 0.4 }}></i>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src="/images/LM_logo2.svg"
                    alt="LM logo"
                    width={40}
                    height={40}
                    style={{ borderRadius: 4 }}
                  />
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontWeight: 700,
                      color: 'primary.main',
                      fontSize: { xs: '1rem', md: '1.25rem', minWidth: 185 },
                    }}
                  >
                    LM SOLUÇÕES <br /> EM ROLAMENTOS
                  </Typography>
                </Box>
              </Link>
            </Box>

          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
            {/* Navigation Items */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'common.white',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* CTA Button */}
            <Button
              variant="contained"
              component={Link}
              href="#contato"
              sx={{
                backgroundColor: 'primary.main',
                color: 'common.white',
                fontWeight: 400,
                width: 42,
                maxWidth: 42,
                height: 42,
                maxHeight: 42,
                minWidth: 0,
                minHeight: 0,
                borderRadius: 0.5,
                p: 0,
                textTransform: 'none',
                fontSize: { xs: '1.2rem', md: '1.2rem' },
                boxShadow: 0,
              }}
            >
              <i className="ri-chat-1-line"></i>
            </Button>

            <Button
              variant="contained"
              component={Link}
              href="#pesquisar"
              sx={{
                backgroundColor: 'background.default',
                color: 'primary.main',
                fontWeight: 400,
                width: 42,
                maxWidth: 42,
                height: 42,
                maxHeight: 42,
                minWidth: 0,
                minHeight: 0,
                borderRadius: 0.5,
                p: 0,
                textTransform: 'none',
                fontSize: { xs: '1.2rem', md: '1.2rem' },
                boxShadow: 0,
              }}
            >
              <i className="ri-search-line" ></i>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}