
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
    const [quantity, setQuantity] = useState(1)

    const handleDecrement = () => {
        if(quantity > 1) setQuantity((prev) => prev - 1)
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
                <button type="Button" className="btn btn-dark mx-auto" onClick={handleDecrement}>-</button>
                <h4 className="Number mx-auto">{quantity}</h4>
                <button type="Button" className="btn btn-dark mx-auto" onClick={handleIncrement}>+</button>
            </div>
            <div className="d-grid gap-3 col-10 mx-auto">
                <button type="Button" className="btn btn-dark" onClick={handleAdd}>
                    Agregar a carrito
                </button>
            </div>
        </div>
    )
}
