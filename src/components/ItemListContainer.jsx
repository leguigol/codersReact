import React from 'react'
import { Text, Box, SimpleGrid, Flex, Image, Badge, Button } from '@chakra-ui/react'


const ItemListContainer = ({greeting, selectedCategory, productos}) => {

  //console.log(productos);
  const filteredProducts=productos.filter((p)=> p.categoria===selectedCategory);

  return (
    <div>
        <Box display="flex" justifyContent="center" p={4}>
          <h1>{greeting}</h1>
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
        {filteredProducts.map((p) => (
          <Box key={p.id} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" display="flex" flexDirection="column" justifyContent="center">
              <Image src={p.imagen} alt={p.titulo} boxSize="150px" objectFit="cover" mx="auto" mt={2}/>

                <Box p="2" textAlign="center">
                    <Box d="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        {p.categoria}
                      </Badge>                    
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                      {p.titulo}
                    </Box>
                    <Box>
                      <Text color="gray.500">{`$${p.precio}`}</Text>
                    </Box>
                    <Button colorScheme="teal" variant="outline" mt={1} size="sm">
                        Ver detalle del producto
                    </Button>
                </Box>
                <Box borderTopWidth="1px" p="6" mt={2} h="40px" textAlign="center" bg="gray.200">
                  <Text fontSize="sm" color="gray.500">Stock: {p.stock}</Text>
                </Box>
          </Box>  
        ))}
        </SimpleGrid>
    </div>
  )
}


 
export default ItemListContainer