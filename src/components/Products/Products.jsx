import React from 'react'
import { useContext,useEffect,useState } from 'react'
import { dataContext } from '../Context/Datacontext';
import "./products.css"
import { useParams, Link} from 'react-router-dom';
import { Button, Spinner, useToast, Center, Text, Flex } from '@chakra-ui/react';
import { collection, getFirestore,getDocs } from 'firebase/firestore';

const Products = () => {
    const toast = useToast()
    const [productos,setProductos]=useState([]);
    const { cart, setCart, loading,setLoading } = useContext(dataContext);

    const buyProducts=(product)=>{
      setCart([...cart,product])
      toast({
        title: 'Producto agregado al carrito',
        status: 'success',
        isClosable: true,
      })
    }

    const { categoria } = useParams()

    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        try {
          const snapshot = await getDocs(itemsCollection);
          const productsData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProductos(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchProducts();

    },[]);  

    let filterProducts;

    if(categoria===undefined){
      filterProducts=productos;
    }else{
      filterProducts=productos.filter((p)=> p.categoria_id===parseInt(categoria));
    }

        return (
          <div className='product-container'>
            {loading ? (
              <Center height="200px" spacing={2}>
                <Flex flexDirection="column" alignItems="center">
                  <Spinner size="lg" color="teal" />
                  <Text mt={4} fontSize="lg" fontWeight="medium">
                    Loading...
                  </Text>
                </Flex>
              </Center>
            ) : (  
              filterProducts.map((product)=>(
              <div className='card' key={product.id}>
                  <img src={product.imagen} alt="img-product-card" />
                  <h3>{product.titulo}</h3>
                  <h4>$ {product.precio}</h4>
                  <Button colorScheme="teal" variant="outline" mt={1} size="sm">
                        <Link to={`/ProductDetail/${product.id}`}>
                          Ver detalle del producto
                        </Link>
                  </Button>
                  <div className='card-footer'>Stock: {product.stock}</div>          
              </div>
            ))
          )}
          </div>        
        )
}

export default Products;
