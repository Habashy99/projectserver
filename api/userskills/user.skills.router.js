let { createUserskills } = require("./user.skills.controller");
let router = require("express").Router();

router.post("/", createUserskills);
module.exports = router;
