import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CartContent from './components/CartContent'
import DataProvider from './components/Context/Datacontext'
import ProductDetail from './components/Products/ProductDetail'


const App = () => {

  return (
    <DataProvider>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/categoria/:categoria' element={<Home/>} />
            <Route exact path='/cart' element={<CartContent />} />
            <Route exact path='/productDetail/:id' element={<ProductDetail />} />
          </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App