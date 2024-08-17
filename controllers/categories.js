const category = require('../models/Category');
const Category = require('../models/Category');

exports.createCategory = async (req,res) => {
    try {
        const cat = await Category.create(req.body);
        res.status(201).json({
            category : cat
        });
    }
    catch (error){
        res.status(400).json({
            success: false,
            message : "Something went wrong",
            error : error
        });
    }
}

exports.getAllCategories = async (req,res) => {
    try{
            const categories = await Category.find();
            res.status(200).json({
                count : categories.length,
                success : true,
                categories: categories
            });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message : "Something went wrong",
            error : error
        });
    }
}

exports.getSingleCategory = async(req, res) => {
    try {
        const result = await Category.findById(req.params.id)

        if(!result) {
            res.status(404).json({
                success: false,
                message: "Category not found",
                error: error
            })
        }

        res.status(200).json({
            success: true,
            category: result
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }
}

exports.deleteCategory = async(req, res) => {
    
    try {
        const result = await Category.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            message:  `Category with the ${req.params.id} was deleted`,
            category: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong!",
            error: error
        })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const result = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                runValidators: true,
                new: true
            }
        )

        res.status(200).json({
            success: true,
            category: result
        })
        
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong!",
            error: error
        })
    }
}