import { Text,Spacer,Button,Flex } from '@chakra-ui/react';
import * as React from 'react';
function Header() {
  return (
    <Flex>
         <Text ps={2} pt={1} as="span" fontSize="2xl" fontWeight="700" color="#fafaff">Dira</Text>
            <Text as="span" pt={1} fontSize="2xl" fontWeight="700" color="#e4d9ff">Car</Text>
            <Spacer/>
            <Button colorScheme='white' pt={1}variant='outline' fontSize='2xl' >About</Button>
        
        </Flex>
      );
    }


export default Header;
