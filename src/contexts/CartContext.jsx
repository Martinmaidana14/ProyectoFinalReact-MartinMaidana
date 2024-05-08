import { createContext, useState } from "react";

export const CartContext = createContext();


export const Provider = ({ children })=>{

    const [items, setItems] = useState([{ chistes: true, id: 1 }]);

    const clear = () => setItems([]);

    const removeItem = (id)=>{
        const filtered = items.filter((item) => item.id !== id);
        setItems(filtered)
    };


    const addItem = (item) =>{
        setItems([...items, item]);
    };

    //const isInCart = (itemId)=>{
        //return cart.some(prod=> prod.id === itemId)
    //}

    //const totalPrecio = ()=>{
        //return cart.reduce((prev, act)=> prev + act.cantidad * act.precio, 0)
    //}
    
    //const totalCantidad = ()=>cart.reduce((acumulador, productosActual)=> acumulador + productosActual.cantidad, 0)

    return(
        <CartContext.Provider value={{ addItem, clear , removeItem }}>
            {children}
        </CartContext.Provider>
    );
};