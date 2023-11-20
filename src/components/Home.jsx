import React from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from './NavBar'
import Products from './Products/Products'

const Home = () => {
  return (
    <>
         <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50">
              <div style={{ margin: 0, padding: 0 }}>
                <NavBar />
                <Products />  
              </div>
          </Box>
        </Box>
    </>
)
}

export default Home
