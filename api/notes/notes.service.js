let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into notes(userid, notes, descriptions) values(?,?,?)`,
      [data.userid, data.notes, data.descriptions],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteNotes: (data, callBack) => {
    pool.query(
      `delete from notes where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
