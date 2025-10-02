import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Sob demanda', href: '#sob-demanda' },
  { label: 'Rolamentos', href: '#rolamentos' },
  { label: 'Projetos', href: '#projetos-personalizados' },
  { label: 'Manutenção', href: '#manutencao' },
  { label: 'Quem somos', href: '#quem-somos' },
];

export default function Navbar() {
  return (
    <>
      {/* Hidden checkbox para controlar o menu - SEO friendly */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="mobile-menu-checkbox"
        aria-hidden="true"
      />

      <AppBar
        component="nav"
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(200px)',
          border: 'none'
        }}
      >
        <Box sx={{ px: { xs: 2, md: 4 }, py: 1, width: '100%' }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              // py: theme.spacing(1),
              p: '0px !important',
              border: 'none'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 1 }}>
              {/* Menu icon only on mobile */}
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <label
                  htmlFor="mobile-menu-toggle"
                  className="mobile-menu-button"
                  aria-label="Abrir menu de navegação"
                >
                  <i className="ri-menu-5-fill" style={{ fontSize: '24px', color: 'rgba(0,0,0,0.4)' }}></i>
                </label>
              </Box>
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
        </Box>
      </AppBar>

      {/* Mobile Menu Overlay */}
      {/* <div className="mobile-menu-overlay" ></div> */}

      <label
        htmlFor="mobile-menu-toggle"
        className="mobile-menu-overlay"
        aria-label="Fechar menu de navegação"
      ></label>

      {/* Mobile Menu Sidebar */}
      <nav className="mobile-menu-sidebar" aria-label="Menu principal mobile">
        <div className="mobile-menu-header">
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
            Menu
          </Typography>
          <label
            htmlFor="mobile-menu-toggle"
            className="mobile-menu-close"
            aria-label="Fechar menu"
          >
            <i className="ri-close-line"></i>
          </label>
        </div>

        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="mobile-menu-link"
            >
              {item.label}
            </Link>
          ))}

          <Link href="#contato" className="mobile-menu-cta">
            Solicitar Orçamento
          </Link>
        </div>
      </nav>
    </>
  );
}