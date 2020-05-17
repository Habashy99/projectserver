let { createContactus } = require("./contactus.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createContactus);
module.exports = router;
