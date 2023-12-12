import React from 'react'
import { useContext,useState } from 'react'
import { dataContext } from './Context/Datacontext'
import { Box, Button, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { addDoc,collection} from 'firebase/firestore';
import { db } from '../firebase/config';
import { serverTimestamp } from "firebase/firestore";

const CartTotal = () => {
    const { cart,user } =useContext(dataContext)
    const [orderId, setOrderId] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const total=cart.reduce((acu,ele)=> acu+ele.precio*ele.cantidad,0)

    const handleCheckout = async() => {
      try {

        const ordersCollectionRef = collection(db, "orders");

        const orderData={
          id: Date.now(),
          userId: user.email,
          estado_Id: 1,
          items: cart.map(item => ({
            product: item.titulo,
            cantidad: item.cantidad,
            imagen: item.imagen,
            precio: item.precio,
          })),
          fecha: serverTimestamp(),
        }

        console.log(orderData)
        const newOrderRef = await addDoc(ordersCollectionRef, orderData);
        const newOrderId = newOrderRef.id;

        setOrderId(newOrderId);
        onOpen();

      }catch(error){
        console.error('Error al procesar la compra:', error.message);
      }
    };

  return (
    <Box>
      <Center bg='purple' h='60px' color='white' mt={2} mb={4}>
        Total a pagar: $ {total}
      </Center>

      {user && (
        <Center>
          <Button colorScheme="teal" onClick={handleCheckout}>
            Realizar Compra
          </Button>
        </Center>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Compra exitosa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>ID de orden: {orderId}</p>
          </ModalBody>
        </ModalContent>
      </Modal>

    </Box>
  )
}

export default CartTotal
