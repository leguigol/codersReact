import React, { useState, useContext,useEffect } from 'react'
import { Box, Text, UnorderedList, ListItem, Button } from '@chakra-ui/react';
import { dataContext } from '../context/SCartContext';
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [purchaseDetails, setPurchaseDetails] = useState(null);    
    const { cart,setCart,user,wasBuying, setWasBuying,orderId,setOrderId } =useContext(dataContext)

    const handleClick=()=>{
        setCart([]);
        setWasBuying(false);
        setOrderId(false);
    };

    useEffect(() => {
        if (wasBuying && orderId) {
          const total = cart.reduce((acu, ele) => acu + ele.precio * ele.cantidad, 0);
    
          const summaryDetails = cart.map(item => ({
            product: item.titulo,
            quantity: item.cantidad,
            total: item.precio * item.cantidad,
          }));
    
          setPurchaseDetails({
            orderId: orderId,
            total: total,
            items: summaryDetails,
          });
        }
      }, [wasBuying, orderId, cart]);

      if (!wasBuying || !orderId || !purchaseDetails) {
        // Si no hay información suficiente, puedes mostrar un mensaje o redirigir al usuario.
        return (
          <Box>
            <Text>Error al cargar la información de la compra.</Text>
          </Box>
        );
      }

    return (
    <Box borderWidth="1px" borderRadius="lg" p="4" m="4">
    <Text fontSize="lg" fontWeight="bold" mb={4}>
      Compra exitosa !
    </Text>
    <Text>
      ID de orden: <strong>{purchaseDetails.orderId}</strong>
      <br />
      Total: <strong>${purchaseDetails.total}</strong>
    </Text>
    <Text mt="2">Detalles de la compra:</Text>
    <UnorderedList ml="4" mt="2">
      {purchaseDetails.items.map((item, index) => (
        <ListItem key={index}>
          {item.product} - Cantidad: {item.quantity} - Total: ${item.total}
        </ListItem>
      ))}
    </UnorderedList>
    <Text fontSize="l" fontWeight="bold" mb={4} mt={3}>
        Muchas gracias por su compra !
    </Text>
    <Link to="/">
        <Button colorScheme="teal" ml={2} size="sm" onClick={handleClick}>
            Home
        </Button>
    </Link>

  </Box>
  
)
}

export default Checkout