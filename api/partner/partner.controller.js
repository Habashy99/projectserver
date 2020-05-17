let { create, getPartner } = require("./partner.service");

module.exports = {
  createPartner: (req, res) => {
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
  },
  getPartner: (req, res) => {
    getPartner((error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  }
};
