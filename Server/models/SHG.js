const mongoose = require('mongoose');
const { Schema } = mongoose;
const SHGSchema = new Schema({
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

const SHG = mongoose.model("SHG", SHGSchema);
module.exports = SHG;