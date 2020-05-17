let {
  createUser,
  getUserByUserId,
  getUser,
  updateUserPoint,
  updateUserName,
  deleteUser,
  login,
} = require("./user.controller");
let router = require("express").Router();

router.post("/", createUser);
router.get("/:id", getUserByUserId);
router.get("/", getUser);
router.patch("/", updateUserPoint);
router.put("/", updateUserName);
router.delete("/", deleteUser);
router.post("/login", login);
module.exports = router;
