const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength:[5,"Title can not be less than 5 characters"],
        maxLength:[25,"title can not exceed 25 characters "]
    },
    body:{
        type: String,
        required: [true,"Can not be empty"],
        minLength:[10,"body can not be less than 250 characters"]
    },
    likes:{
        type: Number,
        default: 0,
        required : [true, "Likes can not be empty"]

    },
    status: {
        type: String,
        enum: ["public","private"],
        default: "private"
    },
    hashtag:{
        type: String
    }
    // author: {
    //     type: String,
    //     minLength:[5,"Author name can not be less than 5 characters"],
    //     maxLength: [25,"Author name can not exceed 25 characters "]
    // }
},{
    timestamps : true
})

const blog = mongoose.model('Blog',blogSchema);

module.exports = blog;