const express = require("express");
const router = express.Router();

const { handleGenerateShortUrl , handleGetAnayticsHistory, handleRedirectUrl} = require("../controllers/url");

router.post("/", handleGenerateShortUrl);
router.get("/anaytics/:shortId", handleGetAnayticsHistory);
router.get("/:shortId", handleRedirectUrl);


module.exports = router;