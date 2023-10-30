import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

const App = () => {

  const productos=[
    { id: 1, titulo: "Producto 1", descripcion:"Descripcion 1", precio: 10, categoria:"Categoria 1"},
    { id: 2, titulo: "Producto 2", descripcion:"Descripcion 2", precio: 20, categoria:"Categoria 2"},
    { id: 3, titulo: "Producto 3", descripcion:"Descripcion 3", precio: 30, categoria:"Categoria 3"},
    { id: 4, titulo: "Producto 4", descripcion:"Descripcion 4", precio: 40, categoria:"Categoria 4"},
    { id: 5, titulo: "Producto 5", descripcion:"Descripcion 5", precio: 50, categoria:"Categoria 5"}
  ]

  const arrayProductos=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(productos.length>0){
        resolve(productos);
      }else{
        reject('Error: no se encontraron productos');
      }
    }, 3000);
  })

  arrayProductos
    .then(res=> {
      console.log('Productos:',res);
    })
    .catch(error=>{
      console.log(error);
    });
  // return (
  //   <div>
  //       <NavBar />
  //       <ItemListContainer greeting="Bienvenidos"/>
  //       <ItemCount />
  //   </div>
  // )
}

export default App