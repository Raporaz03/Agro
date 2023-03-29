const mongoose = require('mongoose');
const { Schema } = mongoose;
const NGOSchema = new Schema({
    name:{
        type: String,
        min: 5
    },
    url:{
        type: String,
        min: 5
    },
    para1:{
        type: String,
        min: 5
    },
    para2:{
        type: String,
        min: 5
    }
}, { timestamps: true });

const NGO = mongoose.model("NGO", NGOSchema);
module.exports = NGO;