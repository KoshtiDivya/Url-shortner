const mongoose = require("mongoose");

async function connection(url) {
    return  await mongoose.connect(url);
}

module.exports = { connection };