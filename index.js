const express = require('express');
const connectDB = require('./mongos.js');
const Category = require('./models/Category.js');

connectDB();

const app = express();

// it is very very important and it
// allows us to read the request body

app.use(express.json())
//home route
app.post('/categories',async (req,res) => {
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
});

app.get('/categories',async(req,res) => {
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
});



const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Running server at ${PORT} `)
});




