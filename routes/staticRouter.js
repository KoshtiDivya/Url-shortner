const express = require("express");
const router = express.Router();
const Url = require("../models/url");
const { restrictTo } = require("../middelwares/auth");

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
    const allUrls =  await Url.find({});
    return res.render("home", {
        urls: allUrls,
    });
})

router.get("/", restrictTo(["NORMAL", "ADMIN"]),  async (req, res) => {
    const allUrls =  await Url.find({ createdBy : req.user._id});
    return res.render("home", {
        urls: allUrls,
    });
});

router.get("/signup", (req, res) => {
    return res.render("signUp");
});
router.get("/login", (req, res) => {
    return res.render("login");
});
module.exports = router;