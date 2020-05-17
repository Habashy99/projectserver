let { getOffersByPoints } = require("./offers.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.get("/:points", checkToken, getOffersByPoints);

module.exports = router;
