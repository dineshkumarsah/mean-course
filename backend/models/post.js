const mongoose = require('mongoose');
const posrSchema = mongoose.Schema(
    {
        title: { type: String, require: true },
        content: { type: String, require: true }
    }
);
module.exports = mongoose.model('Post',posrSchema)