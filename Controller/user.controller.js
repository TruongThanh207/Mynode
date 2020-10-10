var db = require('../db')
const shortid = require('shortid');

module.exports.index = function (req, res) {
    res.render('user/index.ejs', {
       title: 'Username',
       users : db.get('users').value()
    })
}
module.exports.get_create = function (req, res) {
    res.render('user/create.ejs')
}
module.exports.post_create = function (req, res) {
    // if(users.every(v => v.name !== 'Thu')) //so sánh giá tri các phần tử mảng === Thu 
    // {
      req.body.id = shortid.generate()
      db.get('users').push(req.body).write()
    // }
    // else
    // {
    //     if(req.body.name.toLowerCase() == 'thu')
    //     {
    //           users.splice('Thanh',1)    
    //     }
    // }
    res.redirect('/user')

}

module.exports.search = function (req, res) {
    var q = req.query.q
    console.log(q)
    // var users = []
    // users = db.get('users').map('name').value()
    // console.log(users)
    
    var match = db.get('users').value().filter(function(user) { //get array users
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 // use lowdb get array after filter
    })
    // console.log(match)
    res.render('user/index.ejs', {
        title: 'Username',
        users : match
     })
}
module.exports.findid = function (req, res) {
    var id = req.params.id
    var users = db.get('users').find({id:id}).value()
    res.render('user/view.ejs',
    {
      user : users
    })
}