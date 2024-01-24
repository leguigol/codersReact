import React from 'react'
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataContext } from './Context/Datacontext'
import { Box, Button, Center, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { addDoc,collection} from 'firebase/firestore';
import { db } from '../firebase/config';
import { serverTimestamp } from "firebase/firestore";

const CartTotal = () => {
    const { cart,setCart,user } =useContext(dataContext)
    const [orderId, setOrderId] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();
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
    
    const handleCloseModal = () => {
      onClose();
      setCart([]);
      navigate('/');
    };

    const handleClearCart = () => {
      setCart([]); 
    };
  
  return (
    <Box>
      <Center bg='purple' h='60px' color='white' mt={2} mb={4}>
        Total a pagar: $ {total}
      </Center>
      {console.log('largo: ',cart.length)}
      {(cart.length && user) && (
        <Center>
          <Button colorScheme="red" onClick={handleClearCart} mr={4}>
            Vaciar Carrito
          </Button>
          <Button colorScheme="teal" onClick={handleCheckout}>
            Realizar Compra
          </Button>
        </Center>
      )}

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
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
