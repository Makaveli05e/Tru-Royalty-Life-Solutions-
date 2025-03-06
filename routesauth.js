const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    res.redirect("http://localhost:3000"); // Redirect to frontend
});

// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("http://localhost:3000");
    });
});

module.exports = router;
