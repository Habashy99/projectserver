const {
  getAchievementByAchievementprofile,
  getAchievementByAchievementcongratulations,
  getAchievementByLanguagelogo
} = require("./achievement.service");

module.exports = {
  getAchievementByAchievementprofile: (req, res) => {
    let achievementprofile = req.params.achievementprofile;
    getAchievementByAchievementprofile(achievementprofile, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getAchievementByAchievementcongratulations: (req, res) => {
    let achievementcongratulations = req.params.achievementcongratulations;
    getAchievementByAchievementcongratulations(
      achievementcongratulations,
      (error, results) => {
        if (error) {
          console.log(error);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "record not found"
          });
        }
        return res.json({
          success: 1,
          data: results
        });
      }
    );
  },
  getAchievementByLanguagelogo: (req, res) => {
    let languagelogo = req.params.languagelogo;
    getAchievementByLanguagelogo(languagelogo, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  }
};
