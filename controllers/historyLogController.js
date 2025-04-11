const historyLogs = []; // In-memory storage for history logs

exports.getAllLogs = (req, res) => {
    res.json(historyLogs);
};

exports.logChange = (req, res) => {
    const { itemId, changeType, quantity } = req.body;
    const newLog = { id: historyLogs.length + 1, itemId, changeType, quantity, date: new Date() };
    historyLogs.push(newLog);
    res.status(201).json(newLog);
};
