const express = require('express')


// create a router using express router

const router = express.Router();

// import all controllers from blog controller

const { createBlog,
        fetchAllBlogs,
        fetchSingleBlog,
        deleteBlog,
        updateBlogById
} = require('../controllers/blog')

// create routes for all http methods

// create single blog using post
router.post('/',createBlog);

// fetch all blogs
router.get('/',fetchAllBlogs)

//fetch single blog by id
router.get('/:id',fetchSingleBlog)

//delete single blog by id
router.delete('/:id',deleteBlog)

//find blog by id and update using put
router.put('/:id',updateBlogById)

//export the router module so that it can be used in index file
module.exports = router;