let {
  getQuestionByTestName,
  getQuestionChallengeByTestName
} = require("./question.controller");
let router = require("express").Router();

router.get("/:type/:testname", getQuestionByTestName);
router.get("/:type/:period/:testname", getQuestionChallengeByTestName);

module.exports = router;
