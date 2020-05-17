let { getCodeofdiscountByPartnerId } = require("./codeofdiscount.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.get("/:partnerid", checkToken, getCodeofdiscountByPartnerId);

module.exports = router;
