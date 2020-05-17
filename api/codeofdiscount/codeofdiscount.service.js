let pool = require("../../config/databse");
module.exports = {
  getCodeofdiscountByPartnerId: (partnerid, callBack) => {
    pool.query(
      `select id,partnerid,codeofdiscount,valueofdiscount from code_of_discount where partnerid = ?`,
      [partnerid],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
