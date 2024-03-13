const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    // car:mongoose.Schema.Types.ObjectId,
    time:{
        type:String,
        required:true
    },
    randomNumber:number

})

const bookModel = mongoose.model("Book",bookSchema)

module.exports = bookModel