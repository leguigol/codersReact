import React from 'react'
import { Text, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'


const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <Box display="flex" justifyContent="center" p={4}>
 
          <Menu>
            <MenuButton>
              <Text fontSize='4xl'>Discos</Text>
            </MenuButton>
            <MenuList>
              <MenuItem>Como una roca</MenuItem>
              <MenuItem>El fin</MenuItem>
              <MenuItem>Live in Wilde</MenuItem>
            </MenuList>
          </Menu>        
        </Box>
    </div>
  )
}


 
export default ItemListContainer