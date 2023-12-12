import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../Context/Datacontext';
import "./products.css"
import { useParams, Link} from 'react-router-dom';
import { Button, filter, useToast } from '@chakra-ui/react';

const Products = () => {
    const toast = useToast()
    const { data, cart, setCart } = useContext(dataContext);

    const buyProducts=(product)=>{
      //console.log(product)
      setCart([...cart,product])
      toast({
        title: 'Producto agregado al carrito',
        status: 'success',
        isClosable: true,
      })
    }


    const { categoria } = useParams()

    console.log('categoria:'+categoria)
    console.log('data:'+data)

    let filterProducts;

    if(categoria===undefined){
      filterProducts=data;
    }else{
      filterProducts=data.filter((p)=> p.categoria_id===parseInt(categoria));
    }
    console.log("Filtered Products:", filterProducts);
        return (
          <div className='product-container'>
            {filterProducts.map((product)=>(
            <div className='card' key={product.id}>
                <img src={product.imagen} alt="img-product-card" />
                <h3>{product.titulo}</h3>
                <h4>{product.precio}</h4>
                <Button colorScheme="teal" variant="outline" mt={1} size="sm">
                      <Link to={`/ProductDetail/${product.id}`}>
                        Ver detalle del producto
                      </Link>
                </Button>
                  {/* <Button colorScheme="teal" 
                    variant="outline" mt={1} size="sm" 
                    onClick={()=> buyProducts(product)} isDisabled={product.stock===0}
                    >
                    Comprar
                  </Button> */}
                  <div className='card-footer'>
                      Stock: {product.stock}
                  </div>          
            </div>
          ))}
          </div>        
        )
}

export default Products
