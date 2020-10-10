var express = require('express')
var router = express.Router()



var controller = require('../Controller/home.controller')

router.get('/', controller.index)



module.exports = router