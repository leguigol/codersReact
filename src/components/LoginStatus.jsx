// LoginStatus.jsx
import React, { useContext } from 'react';
import { Box, Button,Spacer } from '@chakra-ui/react';
import { dataContext } from '../context/SCartContext';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom'

const LoginStatus = () => {
  
  const { user,setUser } = useContext(dataContext);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth=getAuth();
      await signInWithPopup(auth, provider);
      setUser(auth.currentUser);
      navigate('/');
    } catch (error) {
      console.error('Error al autenticar con Google:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(false);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <Box display="flex" alignItems="center">
        <Spacer />
      {user ? (
        <span>¡Hola, {user.displayName}! <Button size="sm" variant="ghost" onClick={handleLogout}>Cerrar sesión</Button></span>
      ) : (
        <Button size="sm" colorScheme="teal" variant="ghost" onClick={handleLogin}>Iniciar sesión con Google</Button>
      )}
    </Box>
  );
};

export default LoginStatus;
