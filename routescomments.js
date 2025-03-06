const express = require("express");
const Comment = require("../models/Comment");
const router = express.Router();

// Get all comments
router.get("/", async (req, res) => {
    const comments = await Comment.find().populate("user", "username");
    res.json(comments);
});

// Post a new comment
router.post("/", async (req, res) => {
    if (!req.user) return res.status(401).json({ message: "Not authenticated" });

    const comment = new Comment({
        user: req.user._id,
        text: req.body.text
    });

    await comment.save();
    res.json(comment);
});

// Delete a comment
router.delete("/:id", async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment deleted" });
});

module.exports = router;
