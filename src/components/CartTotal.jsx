import React, { useEffect } from 'react'
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../context/SCartContext';
import { Box, Button, Center, FormControl, FormLabel, Input, Text} from '@chakra-ui/react';
import { addDoc,collection, getFirestore } from 'firebase/firestore';
import { serverTimestamp } from "firebase/firestore";

const CartTotal = () => {

    const db=getFirestore();

    const { cart,setCart,user,wasBuying, setWasBuying,orderId,setOrderId } =useContext(dataContext)
    const [email, setEmail]=useState('');

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
        setEmail(orderData.userId);
        setWasBuying(true);
        
      }catch(error){
        console.error('Error al procesar la compra:', error.message);
      }
    };
    
    useEffect(()=>{
      if(user){
        setEmail(user.email);
      }else{
        setEmail('');
      }  
    },[user]);

    const handleClearCart = () => {
      setCart([]); 
    };
    
  return (
    <Box>
      <Center bg='purple' h='60px' color='white' mt={2} mb={4}>
        Total a pagar: $ {total}
      </Center>
      {(cart.length && user) && (
        <Center>
          <Button colorScheme="red" onClick={handleClearCart} mr={4}>
            Vaciar Carrito
          </Button>
        </Center>
      )}
      {
        user && (
          <Box borderWidth="1px" borderRadius="lg" p="4" m="4">
          <Text mb={4} fontSize="lg" fontWeight="bold">
            Formulario de Contacto
          </Text>
          <FormControl>
            <FormLabel>Nombre:</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email:</FormLabel>
            <Input type="email" name="email" defaultValue={email}/>
          </FormControl>
          <Button colorScheme="teal" onClick={handleCheckout} p="2" mt="2">
            Realizar Compra
          </Button>
        </Box>
        )
      }

    </Box>
  )
}

export default CartTotal
