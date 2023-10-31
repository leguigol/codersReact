import React from 'react'
import CardWidget from './CardWidget'
import { Flex, Spacer, Box, Image, Text } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex bg='white' m={0} p={0}>
          <Box p={2}>
            <Image
              boxSize='100px'
              src='images/logoluz.jpg'
              alt='Brand'
            /> 
          </Box>    
          <Spacer />
          <Box p={2}>
            <Text fontSize='4xl'>LUZ DIFUSA Web Site</Text>
          </Box>
          <Spacer />
          <Box mt={6} p={2}>
            <CardWidget />
          </Box>
        </Flex>
    </div>
  )
}
export default NavBar