let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into partner(name, phone, address, category) values(?,?,?,?)`,
      [data.name, data.phone, data.address, data.category],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPartner: callBack => {
    pool.query(
      `select id,name,phone,address,category from partner`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
