import {useContext,React} from 'react'
import { dataContext } from '../Context/Datacontext';
import NavBar from '../NavBar'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({titulo}) => {

    const { data } = useContext(dataContext);
    const { id } =useParams();

//    console.log(data)
//    console.log(id)

    const filterProduct=data.find((p)=> p.id===id);
    const productInfo=JSON.stringify(filterProduct)
  return (
    <div>
        <Box bg="gray.200" minHeight="100vh" display="flex" justifyContent="center" p={4} bgGradient="linear(to-t, teal.200, teal.500)" boxShadow="md">
          <Box width="75%" bg="purple.50" >
            <div style={{ margin: 0, padding: 0 }}>
                <NavBar />
                <div className='card2'>
                    <h1>{JSON.parse(productInfo).titulo}</h1>
                    <img src={JSON.parse(productInfo).imagen} alt="img-product-card" />
                    <h3>{JSON.parse(productInfo).descripcion}</h3>
                    <h4><strong>Precio ${JSON.parse(productInfo).precio}</strong></h4>
                    <div className='card-footer'>
                        Stock: {JSON.parse(productInfo).stock>0 ? JSON.parse(productInfo).stock : <strong>SIN STOCK</strong>}
                    </div>          
                </div>
            </div>
          </Box>
        </Box> 
    </div>
  )
}
export default ProductDetail
