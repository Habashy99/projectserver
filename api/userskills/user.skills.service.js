let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into user_skills(userid, skillid, status) values(?,?,?)`,
      [data.userid, data.skillid, data.status],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
