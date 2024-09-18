import { extendTheme } from '@chakra-ui/react';
import '@fontsource/league-spartan/600.css'; 
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  border: '0px',
  borderRadius: 0,
  _hover : {
     bg:"#e4d9ff",
  },
  fontWeight: 'semibold', 
})

export const buttonTheme = defineStyleConfig({
  variants: { outline },
})
const theme = extendTheme({
    components: { Button: buttonTheme },
    fonts: {
        heading: "'League Spartan', sans-serif",
        body: "'League Spartan', sans-serif",
    },
});

export default theme;