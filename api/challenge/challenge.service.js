let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into challenge(userid, questionid, skillid, score, timestamp, type) values(?,?,?,?,?,?)`,
      [
        data.userid,
        data.questionid,
        data.skillid,
        data.score,
        data.timestamp,
        type,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
