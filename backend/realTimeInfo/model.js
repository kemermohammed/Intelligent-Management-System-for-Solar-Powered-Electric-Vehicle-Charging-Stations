const mongooose = require ('mongoose')

const realDataSchema = mongoose.Schema({
    current:Number,
    voltage:Number,
    temprature:Number,
    availableSlot:Boolean,
    voucherEnter:Number
})

const realDataModel = mongoose.model("RealTimeData",realDataSchema)
module.exports = realDataModel