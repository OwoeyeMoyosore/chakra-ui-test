import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';

const root = createRoot(document.getElementById('app'));

root.render(
  <ChakraProvider>
    <StrictMode>
      <App name="StackBlitz" />
    </StrictMode>
  </ChakraProvider>
);
