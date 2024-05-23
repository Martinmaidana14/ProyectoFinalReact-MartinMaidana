
import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
            }
        };

    const handleDecrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(initial);
    };


    return (
        <div className="Counter">
            <div className="d-flex">
                <button type="Button" className="btn btn-dark mx-auto" onClick={handleDecrement}>-</button>
                <h2 className="Number">{quantity}</h2>
                <button type="Button" className="btn btn-dark mx-auto" onClick={handleIncrement}>+</button>
            </div>
            <div className="d-grid gap-3 col-10 mx-auto">
                <button type="Button" className="btn btn-dark" onClick={handleAdd}>
                    Agregar a carrito
                </button>
            </div>
        </div>
    );
};
