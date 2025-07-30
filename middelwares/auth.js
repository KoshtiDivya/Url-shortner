const { getUser } = require("../services/auth");

function checkForAuthentication(req, res, next) {
    const tokenCookie = req.cookies?.token;
    req.user = null;
    if (!tokenCookie) return next();
    const token = tokenCookie;
    const user = getUser(token);
    req.user = user;
    return next();
}

function restrictTo(roles = []) {
    return function (req, res, next) {
        // console.log("current user", req.user);
        if (!req.user) res.redirect("/login");
        if (!roles.includes(req.user.role)) return res.end("Unauthorised");
        return next();
    };
}
// async function restrictToLoggedinUserOnly(req, res, next) {
//     const userUid = req.cookies?.uid;
//     if (!userUid) return res.redirect("/login");
//     const user = getUser(userUid);
//     if (!user) return res.redirect("/login");

//     req.user = user;
//     next();
// }
// async function checkAuth(req, res, next){
//     const userUid = req.cookies?.uid;
//     const user = getUser(userUid);
//     req.user = user;
//     next();
// }


module.exports = {
    // restrictToLoggedinUserOnly,
    // checkAuth,
    checkForAuthentication,
    restrictTo,
}
