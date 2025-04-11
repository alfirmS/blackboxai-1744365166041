const inventoryItems = []; // In-memory storage for inventory items

exports.getAllItems = (req, res) => {
    res.json(inventoryItems);
};

exports.getItemById = (req, res) => {
    const item = inventoryItems.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.sendStatus(404);
    res.json(item);
};

exports.createItem = (req, res) => {
    const newItem = { id: inventoryItems.length + 1, ...req.body };
    inventoryItems.push(newItem);
    res.status(201).json(newItem);
};

exports.updateItem = (req, res) => {
    const item = inventoryItems.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.sendStatus(404);
    
    Object.assign(item, req.body);
    res.json(item);
};

exports.deleteItem = (req, res) => {
    const index = inventoryItems.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.sendStatus(404);
    
    inventoryItems.splice(index, 1);
    res.sendStatus(204);
};
