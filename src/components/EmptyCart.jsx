import React from 'react'
import Home from './Home'
import { Button, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div>
        
        <Center bg='purple' h='60px' color='white' mt={2}>
          Tu Carrito esta vacio
        </Center>
        <Center mt={4}>
        <Link to="/">
          <Button colorScheme="teal" variant="outline">
            Volver a la Tienda
          </Button>
        </Link>
      </Center>
    </div>
  )
}

export default EmptyCart
