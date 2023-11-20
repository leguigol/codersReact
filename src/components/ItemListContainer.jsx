import React, { useState, useEffect} from 'react'
import { Text, Box, SimpleGrid, Flex, Image, Badge, Button } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const { categoria } = useParams()
  console.log(categoria)
  const [productos, setProductos] = useState([])
/* 
  const getProducts=async(categoria) => {
    const response=await fetch('https://my-json-server.typicode.com/leguigol/apiProductos/productos');
    const result=await response.json();
    return result
  }

  useEffect(()=>{
    getProducts().then((res)=> setProductos(res))
  }, []) */

/*   const filteredProducts = categoria
  ? productos.filter((p) => p.categoria === categoria)
  : productos;
 */
  return (
    <div>
{/*       <Box display="flex" justifyContent="center" p={4}>
      </Box>
 */}      <SimpleGrid columns={[1, 2, 3]} spacing={4} p={4}>
      {filteredProducts.map((p) => (
        <Box key={p.id} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" display="flex" flexDirection="column" justifyContent="center">
            <Image src={p.imagen} alt={p.titulo} boxSize="150px" objectFit="cover" mx="auto" mt={2}/>

              <Box p="2" textAlign="center">
                  <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {p.nomcategoria}
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