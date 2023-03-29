const mongoose = require('mongoose');
const { Schema } = mongoose;
const WorkForceSchema = new Schema({
    itemname:{
        type: String,
        min: 3
    },
    sellerName:{
        type: String,
        min: 3
    },
    url:{
        type: String,
        min: 5
    },
    price:{
        type: String,
    }
}, { timestamps: true });

const WorkForce = mongoose.model("WorkForce", WorkForceSchema);
module.exports = WorkForce;