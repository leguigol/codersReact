import { createContext, useState, useEffect } from "react";
export const dataContext=createContext();

export const DataProvider=({children})=>{

    const savedCart=JSON.parse(localStorage.getItem("cart")) || []

    const [data, setData]=useState([]);
    const [cart, setCart]=useState(savedCart)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    return <dataContext.Provider value={{ data, setData,cart, setCart, user, setUser, loading, setLoading }}>{children}</dataContext.Provider>
}

export default DataProvider