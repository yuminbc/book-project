const mongoose = require('mongoose')
const book = require('./Bookdata')//파일명?

const userSchema = mongoose.Schema({
    name:{type:String,required: true, trim: true},
    age:{type:Number,required: true, trim: true},
    email:{type:String,required: true, trim: true},
    books:{type:[book],required: true, trim: true}
})
const User = mongoose.model('User',userSchema)
module.exports = User;
