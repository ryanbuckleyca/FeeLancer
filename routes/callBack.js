const express = require('express');
let router = express.Router();

router
  .route("/")
  // UPDATE/NEW USER
  .put(async (req, res, next) => {
    console.log('callBack called with req.body:', req.body);
  });

module.exports = router;
