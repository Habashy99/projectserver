let pool = require("../../config/databse");
module.exports = {
  getAchievementByAchievementprofile: (achievementprofile, callBack) => {
    pool.query(
      `select id,image,achievementprofile from achievement where achievementprofile = ?`,
      [achievementprofile],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getAchievementByAchievementcongratulations: (
    achievementcongratulations,
    callBack
  ) => {
    pool.query(
      `select id,image,achievementprofile from achievement where achievementcongratulations = ?`,
      [achievementcongratulations],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getAchievementByLanguagelogo: (languagelogo, callBack) => {
    pool.query(
      `select id,image,achievementprofile from achievement where languagelogo = ?`,
      [languagelogo],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
