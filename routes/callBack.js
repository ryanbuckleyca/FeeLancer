const express = require('express');
let router = express.Router();

router
  .route("/")
  // UPDATE/NEW USER
  .put(async (req, res, next) => {
    console.log('callBack called with POST req.body:', req.body)
    res.send('callBack called with POST req.body:', req.body)
  })
  .get(async (req, res, next) => {
    console.log('callBack called with GET req.body:', req.body)
    res.send('callBack called with POST req.body:', req.body)
  });

module.exports = router;
