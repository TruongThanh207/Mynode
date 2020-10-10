var db = require('../db')
const shortid = require('shortid');

module.exports.index = function (req, res) {
    res.render('home/index.ejs')
}