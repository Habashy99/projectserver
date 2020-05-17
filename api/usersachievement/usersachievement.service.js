let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users_achievement(userid, achievementid, takeachievement) values(?,?,?)`,
      [data.userid, data.achievementid, data.takeachievement],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
