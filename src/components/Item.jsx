import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({imagen,titulo,precio,id,stock}) => {

  return (
    <div>
        <img src={imagen} alt="img-product-card" />
        <h3>{titulo}</h3>
        <h4>$ {precio}</h4>
        <Button colorScheme="teal" variant="outline" mt={1} size="sm">
          <Link to={`/Item/${id}`}>
              Ver detalle del producto
          </Link>
        </Button>
        <div className='card-footer'>Stock: {stock}</div>          
    </div>
  )
}

export default Item
