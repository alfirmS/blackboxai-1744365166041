const categories = []; // In-memory storage for categories

exports.getAllCategories = (req, res) => {
    res.json(categories);
};

exports.getCategoryById = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.sendStatus(404);
    res.json(category);
};

exports.createCategory = (req, res) => {
    const newCategory = { id: categories.length + 1, ...req.body };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

exports.updateCategory = (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.id));
    if (!category) return res.sendStatus(404);
    
    Object.assign(category, req.body);
    res.json(category);
};

exports.deleteCategory = (req, res) => {
    const index = categories.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.sendStatus(404);
    
    categories.splice(index, 1);
    res.sendStatus(204);
};
