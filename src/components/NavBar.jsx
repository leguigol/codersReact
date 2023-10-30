import React from 'react'
import CardWidget from './CardWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Spacer, Box, Image } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <Flex>
                <Box p={3} bg='white'>
                    <Image
                            boxSize='100px'
                            src='images/logoluz.jpg'
                            alt='Brand'
                    /> 
                </Box>    
                    <Spacer />
                    <Menu>
                        <MenuButton>
                            Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem>A</MenuItem>
                            <MenuItem>B</MenuItem>
                            <MenuItem>C</MenuItem>
                        </MenuList>
                    </Menu>        

                <Spacer />
                <Box p='3' bg='white'>
                    <CardWidget />
                </Box>

        </Flex>

    </div>
  )
}
export default NavBar