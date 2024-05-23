
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { db } from "../main";
import { addDoc, collection } from "firebase/firestore";
import { Form, Spinner } from "react-bootstrap";

export const Checkout = () => {

    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState("");
    const { items, total, clearItem } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        try {
            const ordersRef = collection(db, "orders");

            const newOrderRef = await addDoc(ordersRef, {
                client: { name, phone, email },
                items: items.map(({ categoryId, title, quantity, price }) => ({
                    categoryId,
                    title,
                    quantity,
                    price,
                })),
                total,
                date: new Date().toISOString(),
            });
            setTimeout(2000);

            setLoading(false);
            setOrderId(newOrderRef.id);
            clearItem();
        } catch (error) {

            console.error("Error creating order:", error);
            setLoading(false);
        }
    };

    return (

        <div className="checkoutSection">
            {loading && (
                <div className="overlay d-flex flex-column">
                    <p className="loadingCheckout">Cargando su compra...</p>{" "}
                    <Spinner animation="border" variant="danger" />
                </div>
            )}
            {orderId && (
                <div
                    className="overlay d-flex flex-column"
                    onClick={() => {
                        setOrderId(null);
                    }}
                >
                    Order ID: {orderId} <p>Gracias por su compra!</p>
                </div>
            )}

            <Form
                className="formCheckout"
                onSubmit={(e) => {

                    e.preventDefault();

                    const formData = new FormData(e.target);

                    createOrder({

                        name: formData.get("name"),
                        phone: formData.get("phone"),
                        email: formData.get("email"),
                    });
                }}
            >
            
            <Form.Group className="mb-3" controlId="name">

                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    name="name"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Teléfono:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su teléfono"
                    name="phone"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    required
                />
            </Form.Group>

            <button className="buttonForm" type="submit" disabled={loading}>
                Comprar
            </button>
        </Form>

        <div className="sectionCartFinal">
            {items.map(({ categoryId, title, quantity }) => (

                <div key={categoryId} className="d-flex gap-3">
                    <p>{title}</p>
                    <p>Cantidad: {quantity}</p>
                </div>
            ))}

            <h2 className="d-flex justify-content-end">Total: ${total}</h2>
        </div>
    </div>
    );
};
