import React from 'react'
import CardWidget from './CardWidget'
import { Flex, Spacer, Box, Image, Text, Menu,MenuItem,MenuButton,MenuList } from '@chakra-ui/react'

const NavBar = ({onSelectCategory}) => {

  const handleCategorySelect=(category)=>{
    onSelectCategory(category);
  };

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
            <Text fontSize='3xl'>LUZ DIFUSA Web Site</Text>
            <Menu >
            <MenuButton>
              <Text fontSize='2xl'>Categoria de Producto</Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={()=>handleCategorySelect("Discos")}>Discos</MenuItem>
              <MenuItem onClick={()=>handleCategorySelect("Merchandising")}>Merchandising</MenuItem>
              <MenuItem onClick={()=>handleCategorySelect("Ropa")}>Ropa</MenuItem>
            </MenuList>
          </Menu>        

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