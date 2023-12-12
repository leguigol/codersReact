import React from 'react'
import { useContext } from 'react'
import { dataContext } from './Context/Datacontext'
import { Text, Box, SimpleGrid, Flex, Image, Badge, Button } from '@chakra-ui/react'

const CartElements = () => {

        const { data, cart, setCart } = useContext(dataContext);
        console.log('cart:'+cart)
        const removeFromCart=(productId)=>{
            setCart(cart.filter((product)=>product.id !==productId))
        }
 
        return (
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={4}>

              {cart.map((product, index) => (
                <Box key={product.id || index} borderWidth="1px" borderRadius="lg" overflow="hidden" display="flex" justifyContent="center">
                  <Image src={product.imagen} alt={product.titulo} boxSize="180px"/>
                  <Box p="4">
                    <Text fontSize="l" fontWeight="semibold" mb="2">
                      {product.titulo}
                    </Text>
                    <Text fontSize="l" color="teal.500">
                      Valor Unitario: $ {product.precio}
                    </Text>
                    <Text fontSize="lg" color="teal.500">
                      Cantidad: {product.cantidad}
                    </Text>
                    <Text fontSize="lg" color="teal.500">
                      Total $: {product.precio*product.cantidad}
                    </Text>
                    <Button mt="4" colorScheme="teal" variant="outline" size="sm" onClick={()=> removeFromCart(product.id)}>
                      Retirar del carrito
                    </Button>
                  </Box>
                </Box>
              
              ))}
            </SimpleGrid>
          );
}

export default CartElements
