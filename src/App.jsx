import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Box } from '@chakra-ui/react'
import { useEffect,useState } from 'react'

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData]=useState([])

  // const productos= [
  //   { id: 1, titulo: "Como una roca", descripcion: "Primer album de la exitosa banda de Wilde", precio: 39000, categoria: "Discos"},
  //   { id: 2, titulo: "Cegar", descripcion: "Ultimo single de Luz difusa", precio: 10000, categoria: "Discos"},
  //   { id: 3, titulo: "Llavero dark", descripcion: "llaverito hecho de acero inoxidable", precio: 2500, categoria: "Merchandising"},
  //   { id: 4, titulo: "Remera negra", descripcion: "Remera negra con letras blancas", precio: 9500, categoria: "Ropa"},
  //   { id: 5, titulo: "Corazon delator", descripcion: "Cover de Soda Stereo", precio: 15000, categoria: "Discos"},
  //   { id: 6, titulo: "El rito", descripcion: "Cover de Soda Stereo", precio: 15001, categoria: "Discos"},

  // ]

  useEffect(()=>{
    fetchData();
  }, [data]);

  const fetchData=async()=>{
    try {
      const response=await fetch('https://my-json-server.typicode.com/leguigol/apiProductos/productos');
      const result=await response.json();
      setData(result);
      console.log(result)
    }catch(error){
      console.log('Error en el fetch');
    }
  }
  return (
    <div>
      <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
        <Box width="75%" bg="purple.50">
            <div style={{ margin: 0, padding: 0 }}>
              <NavBar onSelectCategory={setSelectedCategory}/>
            </div>
            <ItemListContainer greeting={"Tienda de Compras de discos de Luz Difusa"} selectedCategory={selectedCategory} productos={data}/>
        </Box>

      </Box>
    </div>
  )
}

export default App