let { getCodeofdiscountByPartnerId } = require("./codeofdiscount.service");
module.exports = {
  getCodeofdiscountByPartnerId: (req, res) => {
    let partnerid = req.params.partnerid;
    getCodeofdiscountByPartnerId(partnerid, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  }
};
