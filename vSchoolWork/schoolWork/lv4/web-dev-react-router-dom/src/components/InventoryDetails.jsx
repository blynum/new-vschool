import { useParams } from "react-router-dom";
import { inventory } from "../inventory";

function InventoryDetails() {
  const { id } = useParams();
  const item = inventory.find((i) => i.id === id);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>Item Details</h1>
      <p>Item ID: {item.id}</p>
      <h2>Item Name: {item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default InventoryDetails;
