 const mongoose = require("mongoose")

 const {Schema} = mongoose

 const {serviceSchema} = require ("./services")

 const partySchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    budget:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    services:{
        type: [serviceSchema],
    },
 }, {timestamps: true}
);

const party = mongoose.model("party", partySchema)

module.exports = party;