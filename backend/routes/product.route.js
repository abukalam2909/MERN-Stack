import express from 'express'
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controller/product.controller.js'
import authMiddleware from '../../middleware/auth.middleware.js';

const router = express.Router();

// Get all products
router.get('/', authMiddleware, getProducts);

// Get a single product by ID
router.get('/:id', authMiddleware, getProductById);

// Create a new product
router.post('/', authMiddleware, createProduct);

// Update a product by ID
router.put('/:id', authMiddleware, updateProduct);

// Delete a product by ID
router.delete('/:id', authMiddleware, deleteProduct);

export default router;