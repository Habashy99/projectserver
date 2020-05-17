let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into test(userid, questionid, duration, name, score) values(?,?,?,?,?)`,
      [data.userid, data.questionid, data.duration, data.name, data.score],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
