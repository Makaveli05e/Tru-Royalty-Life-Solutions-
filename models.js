const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId: String,
    username: String,
    email: String
});

module.exports = mongoose.model("User", UserSchema);
