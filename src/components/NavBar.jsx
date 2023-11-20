import React from 'react'
import CardWidget from './CardWidget'
import { Flex, Spacer, Box, Image, Text, Menu,MenuItem,MenuButton,MenuList, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {


  return (
    <div>

        <Flex bg='white' m={0} p={0}>
          <Link to="/">
            <Box p={2}>
              <Image
                boxSize='100px'
                src='/images/logoluz.jpg'
                alt='Brand'
              /> 
            </Box>    
          </Link>
          <Spacer />
          <Box p={2}>
            <Text fontSize='3xl'>LUZ DIFUSA Web Site</Text>
            <Menu >
              <MenuButton>
                <Text fontSize='2xl'>Categoria de Producto</Text>
              </MenuButton>
              <MenuList>
                <Link to={"/categoria/1"}>
                  <MenuItem>
                      Discos
                  </MenuItem>
                </Link>
                <Link to={"/categoria/2"}>
                  <MenuItem>
                    Merchandising
                  </MenuItem>
                </Link>
                <Link to={"/categoria/3"}>
                  <MenuItem>
                      Ropa
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>        
          </Box>
          <Spacer />
          <Box mt={6} p={2}>
            <Link to={"/cart"}>
              <CardWidget />
            </Link>
          </Box>
        </Flex>

    </div>
  )
}
export default NavBar