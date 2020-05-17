let {
  create,
  getUserByUserId,
  getUser,
  updateUserPoint,
  updateUserName,
  updateUserPassword,
  deleteUser,
  getUserByUserEmail,
} = require("./user.service");

let { genSaltSync, hashSync, compareSync } = require("bcrypt");
let { sign } = require("jsonwebtoken");
module.exports = {
  createUser: (req, res) => {
    let body = req.body;
    let salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserByUserId: (req, res) => {
    let id = req.params.id;
    getUserByUserId(id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUser: (req, res) => {
    getUser((error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateUserPoint: (req, res) => {
    let body = req.body;
    updateUserPoint(body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  updateUserName: (req, res) => {
    let body = req.body;
    updateUserName(body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  updateUserPassword: (req, res) => {
    let body = req.body;
    let salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    updateUserPassword(body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    let data = req.body;
    deleteUser(data, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "user deleted successfully",
      });
    });
  },
  login: (req, res) => {
    let body = req.body;
    getUserByUserEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
      let result = compareSync(body.password, results.password);
      if (results) {
        results.password = undefined;
        let jsontoken = sign({ result: results }, "habashy1234", {
          expiresIn: "24h",
        });
        return res.json({
          success: 1,
          message: "login successfully",
          token: jsontoken,
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
};
