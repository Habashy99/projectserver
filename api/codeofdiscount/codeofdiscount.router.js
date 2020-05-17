let { getCodeofdiscountByPartnerId } = require("./codeofdiscount.controller");
let router = require("express").Router();

router.get("/:partnerid", getCodeofdiscountByPartnerId);

module.exports = router;
