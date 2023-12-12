import {React,useState,useEffect} from 'react'
import CardWidget from './CardWidget'
import { Flex, Spacer, Box, Image, Text, Menu,MenuItem,MenuButton,MenuList, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import useAuth from '../hooks/auth';

const NavBar = () => {

  const [categorias, setCategorias] = useState([]);
  const { user, logout } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      const db = getFirestore();
      const categoriasCollection = collection(db, 'categorias');

      try {
        const categoriasSnapshot = await getDocs(categoriasCollection);
        const categoriasData = categoriasSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategorias(categoriasData);
      } catch (error) {
        console.error('Error al obtener categorías:', error);
      }
    };

    fetchCategories();
  }, []);


  return (
    <div>

        <Flex bg='white' m={0} p={0}>
          <Link to="/">
            <Box p={2}>
              <Image
                boxSize='100px'
                src='/images/logoluz.jpg'
                alt='Brand'
              /> 
            </Box>    
          </Link>
          <Spacer />
          <Box p={2}>
            <Text fontSize='3xl'>LUZ DIFUSA Web Site</Text>
            <Menu >
              <MenuButton>
                <Text fontSize='2xl'>Categoria de Producto</Text>
              </MenuButton>
              <MenuList>
                <Link to={"/"}>
                  <MenuItem>
                      Todos
                  </MenuItem>
                </Link>
                {categorias.map((categoria) => (
                <Link key={categoria.id} to={`/categoria/${categoria.id}`}>
                  <MenuItem>{categoria.categoria}</MenuItem>
                </Link>
                ))}
              </MenuList>
            </Menu>        
          </Box>
          <Spacer />
          <Box mt={6} p={2}>
            <Link to={"/cart"}>
              <CardWidget />
            </Link>
            <div>
              {user ? (
                 <span>Comprar como: {user.displayName} | <button onClick={logout}>Cerrar sesión</button></span>
              ) : (
                    <span><Link to="/login">Iniciar sesión</Link></span>
                  )}
            </div>
          </Box>
        </Flex>

    </div>
  )
}
export default NavBar