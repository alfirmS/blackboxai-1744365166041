const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const users = []; // In-memory storage for users

exports.registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword, role };
    users.push(newUser);
    res.status(201).json(newUser);
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.sendStatus(404);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.sendStatus(403);

    // Create a token
    const token = jwt.sign({ username: user.username, role: user.role }, process.env.SECRET_KEY);
    res.json({ token });
};

// Additional user authentication methods can be added here
