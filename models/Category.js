// require mongoose
const mongoose = require('mongoose');

// create schema
const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description: {
        type : String,
        required : [true, "Please provide description"]
    }
},
{
    timestamps : true
});

//create model ( name,schema)
const category = mongoose.model('Category',categorySchema);

module.exports = category;