import React, { useState,useContext } from 'react';
import {auth} from '../firebase2'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { dataContext } from './Context/Datacontext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(dataContext);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setUser(auth.currentUser);
      navigate('/');
    } catch (error) {
      console.error('Error al autenticar con Google:', error.message);
    }
  };

  return (
    <div>
        <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50" >
            <div style={{ margin: 0, padding: 0 }}>
              <NavBar />
              <Box p={4}>
                <Input type="email" placeholder="Correo electrónico" mb={2} onChange={(e) => setEmail(e.target.value)} />
                <Input type="password" placeholder="Contraseña" mb={2} onChange={(e) => setPassword(e.target.value)} />
                  {error && <Text color="red.500" mb={2}>{error}</Text>}
                <Button colorScheme="teal" onClick={handleLogin}>Iniciar sesión con Google</Button>
              </Box>
            </div> 
          </Box>
        </Box>     


    </div>
  );
};

export default Login;
