const mongoose = require('mongoose');
const { Schema } = mongoose;
const CropsSchema = new Schema({
    name:{
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

const Crops = mongoose.model("Crops", CropsSchema);
module.exports = Crops;