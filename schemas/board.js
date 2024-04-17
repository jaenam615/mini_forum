const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    Types: { ObjectId }
} = Schema;

const boardSchema = new Schema({
    writer: {
        type: ObjectId,
    },
    title: {
        type: String, 
    },
    content: {
        type: String, 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Board", boardSchema);