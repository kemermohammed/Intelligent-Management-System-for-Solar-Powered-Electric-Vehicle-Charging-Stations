const router = express.Router();
const RealData = require('./model');
const vouchBook= require('../book/model')
// Route to receive real-time data from the microcontroller
const realData =  async (req, res) => {
    try {
        // Assuming the data is received in the request body
        const { current, voltage, temperature, availableSlot } = req.body;

        // Perform calculations
        const totalPower = current * voltage;
        

        // Save the received data to the database
        const realData = await RealData.create({
            temperature,
            availableSlot,
            totalPower
        });

        res.status(200).json({
            message: "Real-time data received and saved successfully",
            data: realData
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Failed to receive and save real-time data",
            error: error.message
        });
    }
};

const vouchurCheck = async (req,res) =>{
    try{
    const {voucherEnter} = req.body
    const vouchEnter = await {voucherEnter}
    const vouchBooked = vouchBook.findByOne({randomNumber})
    const nowTime = date.now()
    for(i=nowTime;nowTime+10;i++){
        timeInRangePlus = i
    }
    for(i=nowTime;nowTime-10;i--){
        timeInRangeMinus = i
    }
    if (vouchSent === vouchEnter && timeInRangeMinus < nowTime <timeInRangePlus){
            res.status(200).json({
                message:"pass"
            })
    }
    res.statu(500).json({
        message:"pass"
    })
        

}
catch{

}
}

module.exports = realData;
