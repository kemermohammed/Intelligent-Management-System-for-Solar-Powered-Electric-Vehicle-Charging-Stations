const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    // user: mongoose.Schema.Types.ObjectId,
    // car:mongoose.Schema.Types.ObjectId,
    targaNumber:String,
    time:{
        type:String,
        required:true
    },
    randomNumber:String

})

const bookModel = mongoose.model("Book",bookSchema)

module.exports = bookModel