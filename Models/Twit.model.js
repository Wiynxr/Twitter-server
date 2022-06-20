const mongoose = require("mongoose")


const twitSchema = mongoose.Schema({
    header: String,
    text: String,
    likes: [{
        ref: "user",
        type: mongoose.Schema.Types.ObjectId
    }]
})


const Twit = mongoose.model("Twit", twitSchema)

module.exports = Twit;