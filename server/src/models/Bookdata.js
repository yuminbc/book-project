const mongoose = require('mongoose')
// const user = require('./Userdata')//파일명?


const bookSchema = mongoose.Schema({
    title:{type: String, required: true, trim: true},
    author:{type: String, required: true, trim: true},
    summary:{type: String},
    genre:{type: String},
    release:{type: String, required: true, trim: true},
    ISBN:{type: Number, required: true, trim: true}
})

const Book = mongoose.model('Books',bookSchema)
module.exports = Book;
// module.exports = bookSchema;