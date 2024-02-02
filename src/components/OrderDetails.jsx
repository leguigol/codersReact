import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';
// import { db } from '../firebase/config';
import { Box, Heading, Text, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import Swal from 'sweetalert2';
// import { db } from 'firebase/firestore'

const OrderDetails = () => {
  const { orderid } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  const db=getFirestore();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const orderDocRef = doc(db, 'orders', orderid);
        const orderSnapshot = await getDoc(orderDocRef);

        if (orderSnapshot.exists()) {
          const orderData = orderSnapshot.data();
          setOrderDetails(orderData);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Esa orden no existe !',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          })
        }
      } catch (error) {
        console.error('Error al recuperar los detalles de la orden:', error.message);
      }
    };

    fetchOrderDetails();
  }, [orderid]);

  if (!orderDetails) {
    return <p>Cargando detalles de la orden...</p>;
  }

  return (
    <Box maxW="600px" mx="auto" mt="4">
    <Heading mb="4">Detalles de la Orden #{orderid}</Heading>
    <Text mb="2">Usuario ID: {orderDetails.userId}</Text>
    <Text mb="2">Fecha: {orderDetails.fecha.toDate().toLocaleString()}</Text>

    <Heading mt="4" mb="2" size="md">Ítems de la Orden:</Heading>
    <UnorderedList listStyleType="none" pl="0">
      {orderDetails.items.map((item, index) => (
        <ListItem key={index} mb="2" p="2" borderWidth="1px" borderRadius="md">
          <Image src={item.imagen} alt={`Imagen del producto ${item.productId}`} boxSize="50px" mr="4" />          
          <Text>Producto ID: {item.product}</Text>
          <Text>Cantidad: {item.cantidad}</Text>
          <Text>Precio: $ {item.precio * item.cantidad}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  </Box>    
  );
};

export default OrderDetails;
