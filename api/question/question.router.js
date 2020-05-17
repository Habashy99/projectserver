let {
  getQuestionByTestName,
  getQuestionChallengeByTestName,
} = require("./question.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");

router.get("/:type/:testname", checkToken, getQuestionByTestName);
router.get(
  "/:type/:period/:testname",
  checkToken,
  getQuestionChallengeByTestName
);

module.exports = router;
