var express = require('express');
var router = express.Router();

const data = require('./data');

router.use('/data', data);


router.all('*',(req,res)=>{
    res.status(404).send({ success: false , msg: `unknown uri ${req.path}`});
});


module.exports = router;
