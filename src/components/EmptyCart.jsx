import React from 'react'
import Home from './Home'
import { Center } from '@chakra-ui/react'

const EmptyCart = () => {
  return (
    <div>
        
        <Center bg='purple' h='60px' color='white' mt={2}>
          Tu Carrito esta vacio
        </Center>
    </div>
  )
}

export default EmptyCart
