let pool = require("../../config/databse");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(firstname, lastname, gender, age, eduvation, job, phone, email, password, profilepicture) values(?,?,?,?,?,?,?,?,?,?)`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.age,
        data.eduvation,
        data.job,
        data.phone,
        data.email,
        data.password,
        data.profilepicture,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUser: (callBack) => {
    pool.query(
      `select id,firstname,lastname,gender,age,eduvation,job,phone,email,profilepicture,totalpoints from users`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select id,firstname,lastname,gender,age,eduvation,job,phone,email,profilepicture,totalpoints from users where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUserPoint: (data, callBack) => {
    pool.query(
      `update users set totalpoints=? where id = ?`,
      [data.totalpoints, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        if (!results) {
          return results.json({
            success: 0,
            message: "failed to update user",
          });
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateUserName: (data, callBack) => {
    pool.query(
      `update users set firstname=?, lastname=?  where id = ?`,
      [data.firstname, data.lastname, data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        if (!results) {
          return results.json({
            success: 0,
            message: "failed to update user",
          });
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from users where id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
