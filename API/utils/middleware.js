module.exports = {
    ipLogger: function(req, res, next){

        var ip=req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
        console.log("ipAddress : ", ip),
        next();
    }
}