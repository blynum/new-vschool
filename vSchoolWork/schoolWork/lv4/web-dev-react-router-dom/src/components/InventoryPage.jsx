import { inventory } from "../inventory";
import InventoryItem from "./InventoryItem";


function InventoryPage() {

    const inventoryElements = inventory.map(item => {
        return(
            <InventoryItem 
                key= {item.id}
                {...item}
            />
        )
    })

    return ( 
        <div className="inventory-home">
            <h1>Inventory</h1>
            {inventoryElements}
        </div>
     );
}

export default InventoryPage;