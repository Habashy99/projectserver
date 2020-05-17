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
let { checkToken } = require("../../auth/token_validation");

router.post("/", createUser);
router.get("/:id", checkToken, getUserByUserId);
router.get("/", checkToken, getUser);
router.patch("/", checkToken, updateUserPoint);
router.put("/", checkToken, updateUserName);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);
module.exports = router;
