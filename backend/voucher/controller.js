const model = require('../book/model');

const createVoucher = async(req, res) => {
    try {
        const { receiveNumber } = req.body;
        
        const search = await model.findOne({ randomNumber: receiveNumber });

        if (search) {
            console.log("right");
            return res.status(200).json({
                message: "successful"
            });
        } else {
            console.log("wrong");
            return res.status(200).json({
                message: "wrong"
            });
        }
    } catch (error) {
        console.error('Error verifying voucher:', error);
        return res.status(500).json({
            status: "fail",
            message: "product not created",
            error: error.message
        });
    }
};

module.exports = createVoucher;
