let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into contact_us(userid, name, email, message) values(?,?,?,?)`,
      [data.userid, data.name, data.email, data.message],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
