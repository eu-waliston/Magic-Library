const mongoose = require("mongoose");

const NewBook = mongoose.Schema({
    title: { type: String },
    subtitle: { type: String },
    author: { type: String },
    published: { type: Date },
    publisher: { type: String },
    pages: { type: Number },
    description: { type: String },
    website: { type: String },
    category: [String],
})

module.exports = mongoose.model("Book", NewBook);