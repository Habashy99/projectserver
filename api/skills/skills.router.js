let { getSkillBySkillName } = require("./skills.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.get("/:name", checkToken, getSkillBySkillName);

module.exports = router;
