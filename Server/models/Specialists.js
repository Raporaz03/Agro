const mongoose = require('mongoose');
const { Schema } = mongoose;
const SpecialistsSchema = new Schema({
    itemname:{
        type: String,
        min: 5
    },
    phone:{
        type: String
    },
    url:{
        type: String,
        min: 5
    }
}, { timestamps: true });

const Specialists = mongoose.model("Specialists", SpecialistsSchema);
module.exports = Specialists;