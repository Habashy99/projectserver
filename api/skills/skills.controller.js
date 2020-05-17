let { getSkillBySkillName } = require("./skills.service");
module.exports = {
  getSkillBySkillName: (req, res) => {
    let name = req.params.name;
    getSkillBySkillName(name, (error, results) => {
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
