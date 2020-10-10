var express = require('express')
var router = express.Router()



var controller = require('../Controller/user.controller')

router.get('/', controller.index)
router.get('/create', controller.get_create)
router.post('/create', controller.post_create)
router.get('/search', controller.search)
router.get('/:id', controller.findid)


module.exports = router