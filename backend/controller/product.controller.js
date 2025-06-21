
import mongoose from "mongoose";
import Product from "../model/product.model.js"

export const getProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const sort = req.query.sort
            ? req.query.sort.split(',').join(' ')
            : '-createdAt'; 

        const keyword = req.query.keyword
            ? {
                  $or: [
                      { title: { $regex: req.query.keyword, $options: 'i' } },
                      { description: { $regex: req.query.keyword, $options: 'i' } },
                  ],
              }
            : {};

        const products = await Product.find(keyword)
            .sort(sort)
            .skip(skip)
            .limit(limit);

        const total = await Product.countDocuments(keyword);

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products,
            pagination: {
                total,
                page,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};


export const getProductById = async (req, res) => {

    const {id} = req.params

    try {
        const products = await Product.findById(id)

        res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: products
        })  
    }
    catch(error){
        console.error ("Error in fetching products:", error.message);
        res.status(500).json({
            success: false, 
            message: "Server Error"
        })
    }
}

export const createProduct = async (req, res) => {

    const product = req.body;

    if(!product.title || !product.image || !product.description || !product.price){
        return res.status(400).json({
            success: false,
            message: "Please provide all fields"
        })
    }

    const newProduct = new Product(product);


    try {
        const products = await Product.save(newProduct)

        res.status(201).json({
        success: true,
        message: "Product Created",
        data: products
        })  
    }
    catch(error){
        console.error ("Error in fetching products:", error.message);
        res.status(500).json({
            success: false, 
            message: "Server Error"
        })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });
    } catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting product:", error.message);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};