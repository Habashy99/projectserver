let { getOffersByPoints } = require("./offers.service");
module.exports = {
  getOffersByPoints: (req, res) => {
    let points = req.params.points;
    getOffersByPoints(points, (error, results) => {
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
