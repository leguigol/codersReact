import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Box } from '@chakra-ui/react'

const App = () => {

  return (
    <div>
      <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4}>
        <Box width="75%" bg="purple.50">
            <div style={{ margin: 0, padding: 0 }}>
              <NavBar />
            </div>
            <ItemListContainer greeting="Tienda de Compras de discos de Luz Difusa"/>

        </Box>

      </Box>
    </div>
  )
}

export default App