const mongoose = require('mongoose');
const { Schema } = mongoose;
const FinanceSchema = new Schema({
    title:{
        type: String,
        min: 5
    },
    url:{
        type: String,
        min: 5
    },
    text:{
        type: String,
        min: 5
    }
}, { timestamps: true });

const Finance = mongoose.model("Finance", FinanceSchema);
module.exports = Finance;