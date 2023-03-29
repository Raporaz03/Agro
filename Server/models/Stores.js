const mongoose = require('mongoose');
const { Schema } = mongoose;
const StoresSchema = new Schema({
    itemname:{
        type: String,
        min: 3
    },
    sellername:{
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

const Stores = mongoose.model("Stores", StoresSchema);
module.exports = Stores;