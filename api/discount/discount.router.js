let { createDiscount } = require("./discount.controller");
let router = require("express").Router();

router.post("/", createDiscount);
module.exports = router;
