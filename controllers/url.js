
const shortid = require("shortid"); 
const Url = require("../models/url");


async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "Url is required" });
    }
    const shortId = shortid();
    await Url.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitedHistory: [],
        createdBy : req.user._id,
    });
    // return res.json({id : shortId})  with frontend rendering 
       return res.render("home", { id: shortId }); //with ejs rendering 
}

async function handleGetAnayticsHistory(req, res) {
    const shortId = req.params.shortId;
    const result = await Url.findOne({ shortId });
    return res.json({
        totalClicks: result.visitedHistory.length,
        Anaytics: result.visitedHistory
    });
}

async function handleRedirectUrl(req, res){
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitedHistory: {
                timeStamps: Date.now()
            }
        }
    });
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    res.redirect(entry.redirectUrl);
}
module.exports = {
    handleGenerateShortUrl,
    handleGetAnayticsHistory,
    handleRedirectUrl
}