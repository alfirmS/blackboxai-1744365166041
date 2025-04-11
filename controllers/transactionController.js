const transactions = []; // In-memory storage for transactions
const inventoryItems = []; // Reference to inventory items

exports.getAllTransactions = (req, res) => {
    res.json(transactions);
};

exports.createTransaction = (req, res) => {
    const { itemId, quantity, type } = req.body;
    const item = inventoryItems.find(i => i.id === itemId);
    if (!item) return res.sendStatus(404);

    if (type === 'incoming') {
        item.quantity += quantity;
    } else if (type === 'outgoing') {
        item.quantity -= quantity;
    } else {
        return res.status(400).json({ error: 'Invalid transaction type' });
    }

    const newTransaction = { id: transactions.length + 1, itemId, quantity, type, date: new Date() };
    transactions.push(newTransaction);
    res.status(201).json(newTransaction);
};
