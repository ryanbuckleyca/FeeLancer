const express = require('express');
let router = express.Router();

router
  .route("/")
  .post((req, res, next) => {
    console.log('callBack called with POST req.body:', req.body)
  })

module.exports = router;
