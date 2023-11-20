import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Context/Datacontext'
import { Center } from '@chakra-ui/react'
const CartTotal = () => {
    const { cart } =useContext(dataContext)

    const total=cart.reduce((acu,ele)=> acu+ele.precio,0)
    
  return (
    <div>
        <Center bg='purple' h='60px' color='white' mt={2}>
            Total a pagar: $ {total}
        </Center>

    </div>
  )
}

export default CartTotal
