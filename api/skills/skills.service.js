let pool = require("../../config/databse");
module.exports = {
  getSkillBySkillName: (name, callBack) => {
    pool.query(
      `select id,name,level from skills where name = ?`,
      [name],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
