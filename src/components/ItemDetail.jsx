import React, { useContext, useState } from 'react'
import { Box,Button,Text,useToast} from '@chakra-ui/react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'
import { dataContext } from '../context/SCartContext';

const ItemDetail = ({items}) => {

    const [cantidad, setCantidad]=useState(1)
    
    const { data, cart, setCart } = useContext(dataContext);
        
    const toast = useToast()

    const incrementar=()=>{
          setCantidad(cantidad+1)
      }
  
      const decrementar=()=>{
        if(cantidad>1)
          setCantidad(cantidad-1)
      }

      const buyProducts=(product,cant)=>{
        setCart([...cart,{...product,cantidad: cant}])
        toast({
          title: 'Producto agregado al carrito',
          status: 'success',
          isClosable: true,
        })
      }
  
  return (
    <>
        <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
            <Box width="75%" bg="purple.50">
                <div style={{ margin: 0, padding: 0 }}>
                    <NavBar />
                    {/* <Products />   */}
                    {items.map((item) => (
                        <div className='card2' key={item.id}>
                            <h1>{item.titulo}</h1>
                            <img src={item.imagen} alt="img-product-card" width={'200px'}/>
                            <h3>{item.descripcion}</h3>
                            <h4><strong>Precio ${item.precio}</strong></h4>
                            <div className='card-footer'>
                                Stock: {item.stock>0 ? item.stock : <strong>SIN STOCK</strong>}
                            </div>          
                            <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                            <Button onClick={decrementar} variant="outline" size="sm">
                            -
                            </Button>
                            <Text mx={4}>{cantidad}</Text>
                            <Button onClick={incrementar} variant="outline" size="sm" isDisabled={cantidad>item.stock-1}>
                                +
                            </Button>
                            </Box>
                            <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                                <Button colorScheme="teal" 
                                    variant="outline" mt={1} size="sm" 
                                    onClick={()=> buyProducts(item,cantidad)} isDisabled={item.stock===0}
                                >
                                    Comprar
                                </Button>
                                <Link to="/">
                                    <Button colorScheme="teal" ml={2} size="sm">
                                        Home
                                    </Button>
                                </Link>
                            </Box>

                        </div>    
                    
                    ))}

                </div>
            </Box>
        </Box>                        
    </>

  )
}

export default ItemDetail

