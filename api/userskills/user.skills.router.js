let { createUserskills } = require("./user.skills.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUserskills);
module.exports = router;
