
import { useEffect, useContext } from "react";

import { CartContext } from '../contexts/CartContext';
import { Link } from "react-router-dom";
import { CartItem } from './CartItem';

//import { getFirestore, collection, addDoc } from 'firebase/firestore';

/*const initialValues = {
    name: "",
    phone: "",
    email: "",
};*/

export const Cart = () => {

    const { items, clearItem, total, getTotal } = useContext(CartContext);

    useEffect(() => {
        getTotal();
    }, [items, getTotal]);

    return (
        <div className="containerCartItemList">
            {items.length === 0 ? (
            <>
                <h2>El carrito está vacío.</h2>
                <Link to={"/"}>
                    <button className="buttonCart">volver a la home</button>
                </Link>
            </>
        ) : (
            <>
                {items.map((p) => (
                    <CartItem key={p.categoryId} {...p} />
                ))}
                <h4>Subtotal: ${total} </h4>
                <h3>total: ${total}</h3>
                <div className="buttonsCart">
                    <button className="buttonClearCart" onClick={() => clearItem()}>
                        Limpiar carrito
                    </button>

                </div>
            </>
        )}
    </div>
    );
};






/*
                    <Link to={"/Checkout"}>
                        <button className="buttonFinish">Terminar mi compra</button>
                    </Link>
    const [values, setValues] = useState(initialValues);
    const { clearItem, items, removeItem } = useContext(CartContext);

    const total = () => items.reduce((acc, i) => acc + i.quantity * i.price, 0);

    const handleChange = (ev) => {
        setValues((prev) => {

            return {
                ...prev,
                [ev.target.name]: ev.target.value,
            };
        });
    };

    const handleSubmit = () => {
        const order = {
            buyer: values,
            items,
            total: total(),
        };

    //console.log(order);

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
        .then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada!");
            }
        })
        .finally(() => {
        clear();
        setValues(initialValues);
        });
    };

    const handleClear = () => clearItem();
    const handleRemove = (id) => removeItem(id);

    return (
        
        <Container className='mt-4'>

            <h1>Productos</h1>
            {items.map((i) => {

                return (
                    <ul key={i.title}>
                        <li>Prod: {i.title}</li>
                        <li>Cant: {i.quantity}</li>
                        <li>$ {i.price}</li>
                        <li onClick={() => handleRemove(i.id)}>X</li>
                    </ul>
                );
            })}
            <div>Total: {total()}</div>
            <button onClick={handleClear}>Vaciar</button>
            {items?.length > 0 && (
                <form>
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        value={values.name}
                        name="name" 
                        onChange={handleChange}
                    />
                    <label>Celu</label>
                    <input 
                        type="text" 
                        value={values.phone} 
                        name="phone" 
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={values.email} 
                        name="email" 
                        onChange={handleChange}
                    />
                    <button type="button" onClick={handleSubmit}>Enviar</button>
                </form>
            )}
        </Container>
    );
};
*/
