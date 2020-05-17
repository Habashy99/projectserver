let {
  getQuestionByTestName,
  getQuestionChallengeByTestName
} = require("./question.service");
module.exports = {
  getQuestionByTestName: (req, res) => {
    let testname = req.params.testname;
    let type = req.params.type;
    getQuestionByTestName(testname, type, (error, results) => {
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
  },
  getQuestionChallengeByTestName: (req, res) => {
    let testname = req.params.testname;
    let type = req.params.type;
    let period = req.params.period;
    getQuestionChallengeByTestName(testname, type, period, (error, results) => {
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
