
import { Item } from "./Item";

export const ItemList = ({ items }) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {items.map((item) => (
                <div className="col mb-3" key={item.id}>
                    <Item item={item} />
                </div>
            ))}
        </div>
    );
};