module.exports = function(req,res,next){
    if(!req.user.isBlock){
        return res.status(403).send('You don\'t have permission to access this resource');
    }
    next();
}