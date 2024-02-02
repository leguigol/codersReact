import CartElements from './CartElements'
import CartTotal from './CartTotal'
import NavBar from './NavBar'
import { useContext } from 'react'
import { dataContext } from '../context/SCartContext'
import EmptyCart from './EmptyCart'
import { Box  } from '@chakra-ui/react'
import Checkout from './Checkout'

const CartContent = () => {

  const { cart,wasBuying } = useContext(dataContext)


  return cart.length > 0 ? (
  <div>
        <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50" >
            <div style={{ margin: 0, padding: 0 }}>
              <NavBar />
              {
                !wasBuying ? 
                (
                  <>
                  <CartElements />
                  <CartTotal />
                  </>
                ) : (
                  <>
                  <Checkout />                  
                  </>
                )
              }
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
