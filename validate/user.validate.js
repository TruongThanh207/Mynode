module.exports.post_create = function (req, res, next){
    var error = []
    if(!req.body.name)
    { 
        error.push('No name')
    }
    if(!req.body.phone)
    { 
        error.push('No phone')
    }
    if(error.length)
    {
        res.render('user/create.ejs',{
            errors: error
        })
       
    }
    next()
}

