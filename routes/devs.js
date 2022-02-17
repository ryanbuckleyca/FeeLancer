const express = require('express');
let router = express.Router();
const db = require('../models');

router.route("/:dev_id")
  // GET dev's devs - api/devs/dev/:dev_id
  .get(async (req, res) => {
    console.log('GET devs from /api/devs/:dev_id: ', req.params.dev_id)
    try {
      const devs = await db.Dev.findAll({
        where: { dev_id: req.params.dev_id }
      })
      console.log("SUCCESS: found devs by /api/devs/:dev_id where req.params.dev_id = ", devs)
      devs && res.send(devs);
    }
    catch(err) {
      console.log("ERROR: find devs by /api/devs/:dev_id where req.params.id = ", err);
    }
  })

router.route("/")
  // GET ALL devs
  .get(async (req, res) => {
    console.log('/devs called')
    const alldevs = await db.Dev.findAll();
    if (!alldevs)
      res.send({error: 'no devs found'})
    else
      res.send(alldevs)
  });



module.exports = router;
