import {useContext,React,useState, useEffect} from 'react'
import { dataContext } from '../Context/Datacontext';
import NavBar from '../NavBar'
import { Box,Button,Text,useToast  } from '@chakra-ui/react'
import { useParams, Navigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ProductDetail = ({titulo}) => {

    const { data, cart, setCart } = useContext(dataContext);

    const { id } =useParams();
    const toast = useToast()
    
    const [product, setProduct] = useState(null);
    const [cantidad, setCantidad]=useState(0)

    const incrementar=()=>{
      if(cantidad<product.stock)
        setCantidad(cantidad+1)
    }

    const decrementar=()=>{
      if(cantidad>1)
        setCantidad(cantidad-1)
    }

    useEffect(() => {
      const productInContext = data.find((item) => item.id === id);
  
      if (productInContext) {
        setProduct(productInContext);
  
        setCantidad(1);
      } else {
        console.log('No se encontró el producto en el contexto');
      }
    }, [data, id]);

    //console.log(id)

    const buyProducts=(product,cant)=>{
      console.log(product)
      setCart([...cart,{...product,cantidad: cant}])
      toast({
        title: 'Producto agregado al carrito',
        status: 'success',
        isClosable: true,
      })
    }

    const filterProduct=data.find((p)=> p.id===id);
    if(filterProduct===undefined){
      Swal.fire({
        title: 'Error!',
        text: 'Ese articulo no existe !',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
      return <Navigate to="/" />;
    }
    const productInfo=JSON.stringify(filterProduct)
  return (
    <div>
        <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50" >
            <div style={{ margin: 0, padding: 0 }}>
                <NavBar />
                <div className='card2'>
                    <h1>{JSON.parse(productInfo).titulo}</h1>
                    <img src={JSON.parse(productInfo).imagen} alt="img-product-card" width={'200px'}/>
                    <h3>{JSON.parse(productInfo).descripcion}</h3>
                    <h4><strong>Precio ${JSON.parse(productInfo).precio}</strong></h4>
                    <div className='card-footer'>
                        Stock: {JSON.parse(productInfo).stock>0 ? JSON.parse(productInfo).stock : <strong>SIN STOCK</strong>}
                    </div>          
                </div>
                <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                    <Button onClick={decrementar} variant="outline" size="sm">
                      -
                    </Button>
                    <Text mx={4}>{cantidad}</Text>
                    <Button onClick={incrementar} variant="outline" size="sm">
                      +
                    </Button>
                </Box>
                <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                  <Button colorScheme="teal" 
                      variant="outline" mt={1} size="sm" 
                      onClick={()=> buyProducts(filterProduct,cantidad)} isDisabled={filterProduct.stock===0}
                    >
                      Comprar
                  </Button>
                  <Link to="/">
                    <Button colorScheme="teal" ml={2} size="sm">
                      Home
                    </Button>
            </Link>
                </Box>
            </div>
          </Box>
        </Box> 
    </div>
  )
}
export default ProductDetail
