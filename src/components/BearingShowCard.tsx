import { Box } from '@mui/material';

interface BearingShowCardProps {
  children?: React.ReactNode;
}

export default function BearingShowCard({ children }: BearingShowCardProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  );
}