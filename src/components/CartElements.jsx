import React, { useEffect } from 'react'
import { useContext } from 'react'
import { dataContext } from '../context/SCartContext'
import { Text, Box, SimpleGrid, Image, Button } from '@chakra-ui/react'


const CartElements = () => {

        const { data, cart, setCart } = useContext(dataContext);

        const removeFromCart=(productId)=>{
            setCart(cart.filter((product)=>product.id !==productId))
        }
 
        const incrementar = (productId) => {
          updateQuantity(productId, cart.find((product) => product.id === productId).cantidad + 1);
        };
      
        const decrementar = (productId) => {
          updateQuantity(productId, cart.find((product) => product.id === productId).cantidad - 1);
        };

        const updateQuantity = (productId, newQuantity) => {
          const updatedCart = cart.map((product) => {
            if (product.id === productId) {
              return { ...product, cantidad: newQuantity };
            }
            return product;
          });
      
          setCart(updatedCart);
        };
      
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
                    <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                      <Button onClick={() => decrementar(product.id)} variant="outline" size="sm" isDisabled={product.cantidad<2}>
                         -
                      </Button>
                      <Text mx={4}>{product.cantidad}</Text>
                    <Button
                      onClick={() => incrementar(product.id)}
                      variant="outline"
                      size="sm"
                      isDisabled={product.cantidad > product.stock - 1}
              >
                +
              </Button>
            </Box>                    
                    {/* <Text fontSize="lg" color="teal.500">
                      Cantidad: {product.cantidad}
                    </Text> */}
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
