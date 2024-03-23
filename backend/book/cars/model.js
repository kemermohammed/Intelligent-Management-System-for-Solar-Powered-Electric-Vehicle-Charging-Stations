const  mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    plateCode:{
        type:String,
        required:true,
        length:6,
        unique:true
    }
 
})

const carModel = mongoose.model("Car",carSchema)
module.exports = carModel