import {React,useState,useEffect, useContext} from 'react'
import CardWidget from './CartWidget'
import { Flex, Spacer, Box, Image, Text, Menu,MenuItem,MenuButton,MenuList, Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { dataContext } from '../context/SCartContext';
import LoginStatus from './LoginStatus';

const NavBar = () => {

  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

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
        <LoginStatus m={1}/>
        <Spacer />
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
          </Box>
        </Flex>

    </div>
  )
}
export default NavBar