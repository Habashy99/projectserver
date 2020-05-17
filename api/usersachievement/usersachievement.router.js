let { createUserachievement } = require("./usersachievement.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUserachievement);
module.exports = router;
