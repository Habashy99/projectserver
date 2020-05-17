let { createNotes, deleteNotes } = require("./notes.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createNotes);
router.delete("/", checkToken, deleteNotes);
module.exports = router;
