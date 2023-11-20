import CartElements from './CartElements'
import CartTotal from './CartTotal'
import NavBar from './NavBar'
import { useContext } from 'react'
import { dataContext } from './Context/Datacontext'
import EmptyCart from './EmptyCart'

const CartContent = () => {

  const { cart } = useContext(dataContext)

  return cart.length > 0 ? (
  <>
    <NavBar />
    <CartElements />
    <CartTotal />
  </>
  ) : ( <EmptyCart />
 
      )
}

export default CartContent
