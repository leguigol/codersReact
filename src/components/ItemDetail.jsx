import React, {useState} from 'react'
import { Box, Image, Badge, Button, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {

    const { id } = useParams()
    
    const [cantidad, setCantidad]=useState(0)

    const incrementar=()=>{
        setCantidad(cantidad+1)
    }

    const decrementar=()=>{
        setCantidad(cantidad-1)
    }
  return (
    <div>
         <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" display="flex" flexDirection="column" justifyContent="center">
      <Image src={product.imagen} alt={product.titulo} boxSize="150px" objectFit="cover" mx="auto" mt={2} />

      <Box p="2" textAlign="center">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.categoria}
          </Badge>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {product.titulo}
        </Box>
        <Box>
          <Text color="gray.500">{`$${product.precio}`}</Text>
        </Box>
        <Box>
          <Button colorScheme="teal" variant="outline" mt={1} size="sm">
            Ver detalle del producto
          </Button>
        </Box>
      </Box>

      <Box borderTopWidth="1px" p="6" mt={2} h="40px" textAlign="center" bg="gray.200">
        <Text fontSize="sm" color="gray.500">Stock: {product.stock}</Text>
      </Box>

      <Box mt={4} display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handleDecrement} variant="outline" size="sm">
          -
        </Button>
        <Text mx={4}>{quantity}</Text>
        <Button onClick={handleIncrement} variant="outline" size="sm">
          +
        </Button>
      </Box>

      <Box mt={4} textAlign="center">
        <Button colorScheme="teal" size="sm">
          Agregar al carrito
        </Button>
      </Box>
    </Box>
    </div>
  )
}

export default ItemDetail
