import { Button } from '@mui/material';
import Link from 'next/link';

interface IconButtonProps {
  icon: string;
  href: string;
}

export default function IconButton({ icon, href }: IconButtonProps) {
  return (
    <Button
      variant="contained"
      component={Link}
      href={href}
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
      <i className={icon}></i>
    </Button>
  );
}