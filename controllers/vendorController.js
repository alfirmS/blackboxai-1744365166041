const vendors = []; // In-memory storage for vendors

exports.getAllVendors = (req, res) => {
    res.json(vendors);
};

exports.getVendorById = (req, res) => {
    const vendor = vendors.find(v => v.id === parseInt(req.params.id));
    if (!vendor) return res.sendStatus(404);
    res.json(vendor);
};

exports.createVendor = (req, res) => {
    const newVendor = { id: vendors.length + 1, ...req.body };
    vendors.push(newVendor);
    res.status(201).json(newVendor);
};

exports.updateVendor = (req, res) => {
    const vendor = vendors.find(v => v.id === parseInt(req.params.id));
    if (!vendor) return res.sendStatus(404);
    
    Object.assign(vendor, req.body);
    res.json(vendor);
};

exports.deleteVendor = (req, res) => {
    const index = vendors.findIndex(v => v.id === parseInt(req.params.id));
    if (index === -1) return res.sendStatus(404);
    
    vendors.splice(index, 1);
    res.sendStatus(204);
};
