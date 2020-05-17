let { createPartner, getPartner } = require("./partner.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createPartner);
router.get("/", checkToken, getPartner);

module.exports = router;
