var express = require('express');
var router = express.Router();

/* GET users listing. */
const user = {
    userName: 'baituo'
};
router.get('/', function(req, res, next) {
    res.send(user);
});

module.exports = router;
