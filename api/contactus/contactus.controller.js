let { create } = require("./contactus.service");

module.exports = {
  createContactus: (req, res) => {
    let body = req.body;

    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  }
};
