const mongoose = require("mongoose");

const config = new mongoose.Schema({
   guildID: String,
   prefix: String
})

module.exports = mongoose.model("prefix", config);
