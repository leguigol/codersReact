import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const dataContext=createContext();

export const DataProvider=({children})=>{

    const [data, setData]=useState([]);
    const [cart, setCart]=useState([])

    useEffect(()=>{
        axios("https://my-json-server.typicode.com/leguigol/apiProductos/productos").then((res)=> setData(res.data));
    },[])

    return <dataContext.Provider value={{ data, cart, setCart }}>{children}</dataContext.Provider>
}

export default DataProvider