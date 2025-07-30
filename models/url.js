const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitedHistory: [
        {
            timeStamps: {
                type: Number,
            }
        },
    ],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
    }
}, { timestamps: true });

const Url = mongoose.model("url", urlSchema);
module.exports = Url;