import { Link } from "react-router-dom";

function InventoryItem(props) {
  const { id, name, category, price, quantity } = props;

  return (
    <div className="inventory-item">
      <h3>{name}</h3>
      <h4>{category}</h4>
      <p>
        <b>Price:</b> ${price}
      </p>
      <p>{quantity} left</p>
      <Link to={`/inventory/${id}`}>View Details</Link>
    </div>
  );
}

export default InventoryItem;
