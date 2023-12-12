import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Context/Datacontext'
import { Box, Button, Text, Center } from '@chakra-ui/react';

const CartTotal = () => {
    const { cart,user } =useContext(dataContext)

    const total=cart.reduce((acu,ele)=> acu+ele.precio*ele.cantidad,0)

    const handleCheckout = () => {
      // Lógica para procesar la finalización de la compra
      // Esto podría incluir redireccionar a una página de pago, enviar la información al servidor, etc.
      console.log('Procesando la finalización de la compra...');
    };
  return (
    <Box>
      <Center bg='purple' h='60px' color='white' mt={2} mb={4}>
        Total a pagar: $ {total}
      </Center>

      {user && (
        <Center>
          <Button colorScheme="teal" onClick={handleCheckout}>
            Finalizar Compra
          </Button>
        </Center>
      )}
    </Box>
  )
}

export default CartTotal
