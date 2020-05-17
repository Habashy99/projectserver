let pool = require("../../config/databse");
module.exports = {
  getOffersByPoints: (points, callBack) => {
    pool.query(
      `select id,itempicture,itemname,itemprice,itempriceafterdiscount,rangeofprice,points,mypercentage from offers where points = ?`,
      [points],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
