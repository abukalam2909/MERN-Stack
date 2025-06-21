import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';


export const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        // Respond with user data and token
        res.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    }
    catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        // Respond with user data and token
        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}