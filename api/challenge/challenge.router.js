let { createChallenge } = require("./challenge.controller");
let router = require("express").Router();

router.post("/", createChallenge);
module.exports = router;
