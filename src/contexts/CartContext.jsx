import { createContext, useState } from "react";

export const CartContext = createContext();


export const Provider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const getTotal = () => {
        let totalPrice = cart.reduce(
          (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotal(totalPrice.toLocaleString());
    };

    const addItem = (item, quantity) => {
        const itExist = cart.some((i) => i.id === item.id);
        if (itExist) {
            const updateItem = cart.map((i) => {

                if (i.id === item.id) {
                    return {
                        ...i,
                        quantity: i.quantity + quantity,
                    };
                } else {
                    return i;
                }
            });
            setCart(updateItem);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId, quantityToRemove = 1) => {
        const updatedCart = cart
            .map((i) => {
                if (i.id === itemId) {
                    return {
                        ...i,
                        quantity: i.quantity - quantityToRemove,
                    };
                }
                return i;
            })
            .filter((i) => i.quantity > 0);
    
        setCart(updatedCart);
    };
    
    const clearCart = () => {
        setCart([]);
    };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotal, total }}>
            {children}
        </CartContext.Provider>
    );
};