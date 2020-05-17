let { createDiscount } = require("./discount.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createDiscount);
module.exports = router;
