let { create, deleteNotes } = require("./notes.service");

module.exports = {
  createNotes: (req, res) => {
    const body = req.body;

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
  deleteNotes: (req, res) => {
    let data = req.body;
    deleteNotes(data, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "user deleted successfully"
      });
    });
  }
};
