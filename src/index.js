import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const theme = extendTheme({
  initialColorMode: 'light',
  colors: {
    ruby: '#A00320',
    onyx: '#353B3C'
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif'
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'normal'
      },
      variants: {
        'ruby-solid': {
          bg: 'ruby',
          color: 'white',
          _hover: {
            bg: '#c80428'
          }
        },
        'ruby-outline': {
          bg: 'transparent',
          color: 'ruby',
          border: '1px',
          borderColor: 'ruby',
          _hover: {
            bg: '#ffebef'
          }
        }
      }
    }
  }
});

ReactDOM.render(
  <ChakraProvider resetCSS={true} theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
