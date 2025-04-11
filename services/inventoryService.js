// Inventory Service
const inventoryItems = []; // In-memory storage for inventory items

exports.getAllItems = () => {
    return inventoryItems;
};

exports.addItem = (item) => {
    inventoryItems.push(item);
};

// Additional inventory logic can be added here
