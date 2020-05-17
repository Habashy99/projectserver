let { createTest } = require("./test.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createTest);
module.exports = router;
