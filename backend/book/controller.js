const book = require('./model')

const createBook = async(req,res) =>{
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Unauthorized: login first' });
    }
    try{
        const {time} = req.body
        const token = req.headers.authorization.split(' ')[1] 
        const decoded = jwt.verify(token, "process.env.JWT_SECRET")
        const userId = decoded.userId
  
   const plate = await car.create({user:userId,time,randomNumber:randomNumber})
   res.status(200).json({
    message:"Booked",
    time:time,
    voucher:randomNumber
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

module.exports = createBook