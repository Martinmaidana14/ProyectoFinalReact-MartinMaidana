
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
    const [quantity, setQuantity] = useState(1)

    const handleDecrement = () => {
        if(quantity < 1) setQuantity((prev) => prev - 1)
    };

    const handleIncrement = () => {
        if (stock > quantity) setQuantity((prev) => prev + 1)
        };

    const handleAdd = () => {
        onAdd(quantity);
        setQuantity(1);
    }


    return (
        <div className="Counter">
            <div className="Controls d-flex">
                <button type="Button" className="btn btn-dark" onClick={handleDecrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button type="Button" className="btn btn-dark" onClick={handleIncrement}>+</button>
            </div>
            <div>
                <button type="Button" className="btn btn-dark" onClick={handleAdd}>
                    Agregar a carrito
                </button>
            </div>
        </div>
    )
}
