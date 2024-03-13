const car = require('./model')
const jwt = require('jsonwebtoken')

const createCar = async (req,res,next) =>{
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Unauthorized: login first' });
    }
    try{
        const {plateCode} = req.body
        const token = req.headers.authorization.split(' ')[1] 
        const decoded = jwt.verify(token, "process.env.JWT_SECRET")
        const userId = decoded.userId
  
   const plate = await car.create({user:userId,plateCode})
   res.status(200).json({
    message:"car created",
    car:plate
   })

}
    catch(error){
        res.status(500).json({
            status:"fail",
            message:"product not created",
            error:error.message
        })
    }   

}
module.exports = createCar