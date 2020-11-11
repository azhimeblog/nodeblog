var express = require('express');
var router = express.Router();
const Blogs = require('../models/blogs')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('blogs/index', { title: "หน้าบทความทั้งหมด" });
});

router.get('/add', function(req, res, next) {
    res.render('blogs/addblog', { title: "เพิ่มข้อมูลบทความ" });
});

router.post('/add', function(req, res, next) {
    console.log(req.body.title);
});

module.exports = router;