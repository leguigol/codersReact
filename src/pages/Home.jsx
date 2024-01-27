import React from 'react'
import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Item from '../components/Item';

const Home = ({products}) => {

  return (
    <>
         <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50">
              <div style={{ margin: 0, padding: 0 }}>
                <NavBar />
                {/* <Products />   */}
                <div className='product-container'>
                   {products.map((item) => (
                    <div className='card' key={item.id}>
                            <Item key={item.id} {...item} />                    
                    </div>    
                    ))}
                </div>        
              </div>
          </Box>
        </Box>
    </>
)
}

export default Home
