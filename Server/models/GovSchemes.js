const mongoose = require('mongoose');
const { Schema } = mongoose;
const GovSchemesSchema = new Schema({
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

const GovSchemes = mongoose.model("GovSchemes", GovSchemesSchema);
module.exports = GovSchemes;