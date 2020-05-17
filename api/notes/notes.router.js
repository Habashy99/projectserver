let { createNotes, deleteNotes } = require("./notes.controller");
let router = require("express").Router();

router.post("/", createNotes);
router.delete("/", deleteNotes);
module.exports = router;
