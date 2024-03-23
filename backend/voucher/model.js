const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    // user: mongoose.Schema.Types.ObjectId,
    // car:mongoose.Schema.Types.ObjectId,
    receiveNumber:String
})

const bookModel = mongoose.model("Book",bookSchema)

module.exports = bookModel