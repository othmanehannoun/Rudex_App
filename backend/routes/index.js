var express = require('express');
var router = express.Router();

// -------- ----------//
router.get('/', (req, res)=>{
    res.send('OKAY BRO')
})




module.exports = router;
