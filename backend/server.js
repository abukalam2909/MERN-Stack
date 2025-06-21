import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import productRoutes from './routes/product.route.js'
import authRoutes from './routes/auth.route.js';


const app = express();
const PORT = 5400;
dotenv.config();

//Enable CORS
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on http://localhost:${PORT}`);
});