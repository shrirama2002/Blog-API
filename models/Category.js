// require mongoose
const mongoose = require('mongoose');

// create schema
const categorySchema = mongoose.Schema({
    name : String,
    description : String
},{
    timestamps : true
});

//create model ( name,schema)
const category = mongoose.model('Category',categorySchema);

module.exports = category;