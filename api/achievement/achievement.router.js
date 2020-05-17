let {
  getAchievementByAchievementprofile,
  getAchievementByAchievementcongratulations,
  getAchievementByLanguagelogo
} = require("./achievement.controller");
let router = require("express").Router();
router.get(
  "/achievementcongratulations/:achievementcongratulations",
  getAchievementByAchievementcongratulations
);
router.get(
  "/achievementprofile/:achievementprofile",
  getAchievementByAchievementprofile
);
router.get("/languagelogo/:languagelogo", getAchievementByLanguagelogo);
module.exports = router;
