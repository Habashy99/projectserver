let {
  getAchievementByAchievementprofile,
  getAchievementByAchievementcongratulations,
  getAchievementByLanguagelogo,
} = require("./achievement.controller");
let router = require("express").Router();
let { checkToken } = require("../../auth/token_validation");
router.get(
  "/achievementcongratulations/:achievementcongratulations",
  checkToken,
  getAchievementByAchievementcongratulations
);
router.get(
  "/achievementprofile/:achievementprofile",
  checkToken,
  getAchievementByAchievementprofile
);
router.get(
  "/languagelogo/:languagelogo",
  checkToken,
  getAchievementByLanguagelogo
);
module.exports = router;
