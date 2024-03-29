import { Badge, Flex, Avatar,Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../context/SCartContext'

const CardWidget = () => {

  const { cart } = useContext(dataContext)

  return (
    <div>
        <Flex bg='white'>
          <Avatar src='/images/carrito.jpg' />
          <Box ml='3' bg='white'>
            <Text fontWeight='bold'>
              <Badge ml='1' colorScheme='green'>
              {cart.reduce((total, product) => total + product.cantidad, 0)}
              </Badge>
            </Text>
            <Text fontSize='sm'>Articulos</Text>
          </Box>
        </Flex>
    </div>
  )
}

export default CardWidget