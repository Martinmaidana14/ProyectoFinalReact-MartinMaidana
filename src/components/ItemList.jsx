
import { Item } from "./Item";
export const ItemList = ({ items }) => {

    return (
        <div className="d-flex">
            {items.map((item) => (
                <div key={item.id}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    );
};