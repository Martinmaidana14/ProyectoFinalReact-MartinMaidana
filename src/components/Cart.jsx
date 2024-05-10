
import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';

import { CartContext } from '../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValues = {
    name: "",
    phone: "",
    email: "",
};

export const Cart = () => {

    const [values, setValues] = useState(initialValues);
    const { clear, items, removeItem } = useContext(CartContext);

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

    const handleClear = () => clear();
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

