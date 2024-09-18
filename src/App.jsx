import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';
import theme from './assets/misc/Theme';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header/>
    </ChakraProvider>
  )
}

export default App;
