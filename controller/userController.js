exports.getHome=(req,res,next)=>{
    res.render('home')
}

exports.getSignup=(req,res,next)=>{
    res.render('signup')
}

exports.getLogin=(req,res,next)=>{
    res.render('login')
}