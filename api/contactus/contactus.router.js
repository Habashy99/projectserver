let { createContactus } = require("./contactus.controller");
let router = require("express").Router();

router.post("/", createContactus);
module.exports = router;
