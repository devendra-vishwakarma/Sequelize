import express from "express";
// const cors = require('cors');
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from './model/Login.model.js';
import bodyParser from "body-parser";

const app = express();

const JWT_SECRET = 'devendra';

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user using Sequelize
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Generate JWT token
        const token = jwt.sign({ username: user.username }, JWT_SECRET);

        res.status(201).json({ message: "User signed up successfully", token });
    } catch (error) {
        console.error("Error while signing up:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database
        const user = await User.findOne({ where: { username } });

        if (user && await bcrypt.compare(password, user.password)) {
            // Generate JWT token
            const token = jwt.sign({ username: user.username }, JWT_SECRET);
            res.status(200).json({ login: true, message: "Login successful", token });
        } else {
            res.status(401).json({ login: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error while logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
