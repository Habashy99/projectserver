let pool = require("../../config/databse");
module.exports = {
  getQuestionByTestName: (testname, type, callBack) => {
    pool.query(
      `select id,question,answer,type,testname,period,level,score from questions where testname = ? and type = ?`,
      [testname, type],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getQuestionChallengeByTestName: (testname, type, period, callBack) => {
    pool.query(
      `select id,question,answer,type,testname,period,level,score from questions where testname = ? and type = ? and period = ?`,
      [testname, type, period],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
