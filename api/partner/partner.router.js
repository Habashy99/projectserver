let { createPartner, getPartner } = require("./partner.controller");
let router = require("express").Router();

router.post("/", createPartner);
router.get("/", getPartner);

module.exports = router;
