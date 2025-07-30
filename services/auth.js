// const sessionIdToUserMap = new Map();  for statefull authentication based on sessions
// function setUser(id, user) {
//     sessionIdToUserMap.set(id, user);
// }
// function getUser(id){
//    return sessionIdToUserMap.get(id);
// }


const  jwt = require("jsonwebtoken"); //for stateless authentication with tokens
const secret = "$ad11151999akdivya2311@$";
function setUser(user){

    return jwt.sign({
        _id : user._id,
        email: user.email,
        role : user.role,
    }, secret);
}
function getUser(token){
    if(!token) return null;
    return jwt.verify(token, secret);
}



module.exports = {
    setUser,
    getUser,
}