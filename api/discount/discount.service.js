let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into discount(userid, partnerid, offersid, date, time, codeofdiscount, mypercentage) values(?,?,?,?,?,?,?)`,
      [
        data.userid,
        data.partnerid,
        data.offersid,
        data.date,
        data.time,
        data.codeofdiscount,
        data.mypercentage
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
