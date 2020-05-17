let { createTest } = require("./test.controller");
let router = require("express").Router();

router.post("/", createTest);
module.exports = router;
