import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CartContent from './components/CartContent'
// import Login from './components/Login'
import OrderDetails from './components/OrderDetails'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer' 
import DataProvider from './context/SCartContext'
import './assets/css/estilos.css'

const App = () => {

  return (
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/categoria/:catId' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<CartContent />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            {/* <Route exact path='/login' element={<Login />} /> */}
            <Route exact path='/orders/:orderid' element={<OrderDetails />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
  )
}

export default App