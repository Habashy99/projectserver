let { getOffersByPoints } = require("./offers.controller");
let router = require("express").Router();

router.get("/:points", getOffersByPoints);

module.exports = router;
