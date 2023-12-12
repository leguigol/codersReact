import CartElements from './CartElements'
import CartTotal from './CartTotal'
import NavBar from './NavBar'
import { useContext } from 'react'
import { dataContext } from './Context/Datacontext'
import EmptyCart from './EmptyCart'
import { Box  } from '@chakra-ui/react'

const CartContent = () => {

  const { cart } = useContext(dataContext)

  return cart.length > 0 ? (
  <div>
        <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50" >
            <div style={{ margin: 0, padding: 0 }}>
              <NavBar />
              <CartElements />
              <CartTotal />
            </div>
          </Box> 
        </Box>   
  </div>
  ) : ( 
    <div>
      <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
        <Box width="75%" bg="purple.50" >
          <div style={{ margin: 0, padding: 10 }}>
            <NavBar />
            <EmptyCart />  
          </div> 
        </Box> 
      </Box>      
    </div>
 
      )
}

export default CartContent
