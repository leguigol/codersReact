import React from 'react'
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/SCartContext';
import { Box, Button, Center, FormControl, FormLabel, Input, Text, SimpleGrid } from '@chakra-ui/react';
import { addDoc,collection, getFirestore } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";

const CartTotal = () => {

    const db=getFirestore();

    const { cart,setCart,user } =useContext(dataContext)
    const [orderId, setOrderId] = useState(null);
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [showForm, setShowForm] = useState(false);

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

        const newOrderRef = await addDoc(ordersCollectionRef, orderData);
        const newOrderId = newOrderRef.id;

        setOrderId(newOrderId);
        setShowForm(true);
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
  
    const handleCloseForm = () => {
      setShowForm(false);
      setCart([]);
      navigate('/');
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
        </Center>
      )}

      {/* Modal */}
      {/* <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Compra exitosa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>ID de orden: {orderId}</p>
          </ModalBody>
        </ModalContent>
      </Modal> */}
      {showForm && (
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Text mb={4} fontSize="lg" fontWeight="bold">
            Formulario de Contacto
          </Text>
          <FormControl>
            <FormLabel>Nombre:</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email:</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          {/* Agrega más campos según tus necesidades */}
          <Button colorScheme="teal" onClick={handleCheckout}>
            Realizar Compra
          </Button>

          {/* <Button mt={4} colorScheme="teal" onClick={handleCloseForm}>
            Enviar Formulario
          </Button> */}
        </Box>
      )}

      {orderId && (
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Compra exitosa
          </Text>
          <p>ID de orden: {orderId}</p>
        </Box>
      )}
    </Box>
  )
}

export default CartTotal
