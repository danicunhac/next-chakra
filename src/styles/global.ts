import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  text: '#252B42',
  background: '#fff',
  gray: {
    100: '#f7fafc',
    200: '#edf2f7',
    300: '#e2e8f0',
    400: '#cbd5e0',
    500: '#a0aec0',
    600: '#718096',
    700: '#4a5568',
    800: '#2d3748',
    900: '#1a202c',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'text',
      },
    },
  },
});
