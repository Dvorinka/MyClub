import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Add your header/navigation here */}
      <Box as="main" p={4}>
        {children}
      </Box>
      {/* Add your footer here */}
    </Box>
  );
}
