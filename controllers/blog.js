// import the blog model

const { default: mongoose } = require('mongoose');
const Blog = require('../models/Blog');
const { status } = require('express/lib/response');

//----------------------------------------
// blog will have methods like
// Create blog
// delete blog by id(find and delete)
// update blog by id
// find blogs
// find blog by id

//------------------------------------------
//create a blog

exports.createBlog = async (req,res) =>{
    try{

        const blogs = await Blog.create(req.body);
        res.status(201).json({
            success: true,
            message: "Blog created successfully",
            blogs: blogs
        })
    }
    catch(error){
        res.status(400).json({
            success : false,
            message : "Something went wrong",
            error: error
        })
    }

}


//find all blogs in db

exports.fetchAllBlogs = async (req,res) =>{
    try{

    const blogs = await Blog.find();

    if(!blogs){
        res.status(400).json({
            success: false,
            message: "No blog was found"
        })
    }
    res.status(200).json({
        success : true,
        count: blogs.length,
        blogs : blogs
    })
}
catch(error){
    res.status(400).json({
        success: false,
        message: "Something went wrong",
        error: error
    })
}
}

// find a blog by id (single specific blog)

exports.fetchSingleBlog = async (req,res) =>{

    try{
        const oneBlog = await Blog.findById(req.params.id);

        if(!oneBlog){
            res.status(404).json({
                success: false,
                message: "ID not found in db"
            })
        }
        res.status(200).json({
            success: true,
            message: `details for ${req.params.id} was Found`,
            blogs: oneBlog
        })
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error: error
        })
    }



}

// delete blog by id

exports.deleteBlog = async (req,res)=>{

    try{
        let oneBlog = await Blog.findById(req.params.id);

        if(!oneBlog){
            res.status(400).json({
                success: false,
                message: "No such blog exits"
            })
        }
        oneBlog = await Blog.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            message: `Blog ${oneBlog.title} was deleted`,
            blog: oneBlog
        })

    }
    catch(error){
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error:error
        })
    }

}

// update blog by id

exports.updateBlogById = async (req,res)=>{

    try{
        let oneBlog = await Blog.findById(req.params.id);

        if(!oneBlog){
            res.status(400).json({
                success:false,
                message: "Blog Should exist in DB to update"
            })
        }
        // findbyid and update takes 3 parameters (3rd one is optional but usefull)
        oneBlog = await Blog.findByIdAndUpdate(req.params.id, //id to fin the blog
            req.body, // content to replace blog contents
            {
                runValidators : true,
                new: true
            }               // the third parameter for validation //??? get clarity
        );

        res.status(201).json({
            success: true,
            message: `blog ${oneBlog.title} was updated`,
            blog: oneBlog
        })

    }
    catch(error){
        res.status(400).json({
            success: false,
            message: "Something went wrong",
            error:error
        })
    }


}