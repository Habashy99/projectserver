let { getSkillBySkillName } = require("./skills.controller");
let router = require("express").Router();

router.get("/:name", getSkillBySkillName);

module.exports = router;
