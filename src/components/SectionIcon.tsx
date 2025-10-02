import { Box, Button } from '@mui/material';
import Link from 'next/link';

interface SectionIconProps {
  icon: string;
}

export default function SectionIcon({ icon }: SectionIconProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'text.secondary',
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
    </Box>
  );
}