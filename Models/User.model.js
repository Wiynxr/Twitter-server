const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: String,
    twits: [{
        ref: "Twit",
        type: mongoose.Schema.Types.ObjectId
    }],
    saves: [{
        ref: "Twit",
        type: mongoose.Schema.Types.ObjectId
    }]
})

const User = mongoose.model("User", userSchema)

module.exports = User;