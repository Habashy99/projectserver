let { createChallenge } = require("./challenge.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createChallenge);
module.exports = router;
