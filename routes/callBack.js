const express = require('express');
let router = express.Router();

router
  .route("/")
  .put((req, res, next) => {
    console.log('callBack called with POST req.body:', req.body)
  })
  .get((req, res, next) => {
    console.log('callBack called with GET req.body:', req.body)
  });

module.exports = router;
