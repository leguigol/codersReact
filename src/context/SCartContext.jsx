import { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const dataContext=createContext();

export const DataProvider=({children})=>{

    const savedCart=JSON.parse(localStorage.getItem("cart")) || []

    const [data, setData]=useState([]);
    const [cart, setCart]=useState(savedCart)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [wasBuying, setWasBuying]=useState(null);
    const [orderId, setOrderId]=useState(null);

    const auth = getAuth();

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
    
        return () => unsubscribe(); // Cleanup subscription on component unmount
      }, [auth]);
    
    return <dataContext.Provider value={{ data, setData,cart, setCart, user, setUser, loading, setLoading, wasBuying, setWasBuying, orderId, setOrderId }}>{children}</dataContext.Provider>
}

export default DataProvider