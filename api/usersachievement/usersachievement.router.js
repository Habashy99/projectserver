let { createUserachievement } = require("./usersachievement.controller");
let router = require("express").Router();

router.post("/", createUserachievement);
module.exports = router;
