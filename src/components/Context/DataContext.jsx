import { createContext, useState, useEffect } from "react";
//import axios from "axios";
import { auth } from '../../firebase2';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export const dataContext=createContext();

export const DataProvider=({children})=>{

    const savedCart=JSON.parse(localStorage.getItem("cart")) || []

    const [data, setData]=useState([]);
    const [cart, setCart]=useState(savedCart)
    const [user, setUser] = useState(null);
    


    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    useEffect(()=>{
//        axios("https://my-json-server.typicode.com/leguigol/apiProductos/productos").then((res)=> setData(res.data));


        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        const db=getFirestore()

        const itemsCollection=collection(db, "items")

        getDocs(itemsCollection).then((snapshot)=>{
            const docs=snapshot.docs.map((doc)=>doc.data())
            setData(docs)
        })

        return () => unsubscribe();

    },[])

    return <dataContext.Provider value={{ data, setData,cart, setCart, user, setUser }}>{children}</dataContext.Provider>
}

export default DataProvider