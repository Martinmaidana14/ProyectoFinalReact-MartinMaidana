
import { useState } from "react";

export const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
            }
        };

    const handleDecrement = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    };


    const handleAdd = () => {
        onAdd(count);
        setCount(initial);
    };


    return (
        <div className="Counter">
            <div className="d-flex">
                <button type="Button" className="btn btn-dark mx-auto" onClick={handleDecrement}>-</button>
                <h2 className="Number">{count}</h2>
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
