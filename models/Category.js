// require mongoose
const mongoose = require('mongoose');
const { type } = require('express/lib/response')
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