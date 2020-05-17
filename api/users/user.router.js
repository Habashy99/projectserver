let {
  createUser,
  getUserByUserId,
  getUser,
  updateUserPoint,
  updateUserName,
  deleteUser
} = require("./user.controller");
let router = require("express").Router();

router.post("/", createUser);
router.get("/:id", getUserByUserId);
router.get("/", getUser);
router.patch("/", updateUserPoint);
router.put("/", updateUserName);
router.delete("/", deleteUser);
module.exports = router;
