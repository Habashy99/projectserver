require("dotenv").config();
let express = require("express");
let app = express();
let userRouter = require("./api/users/user.router");
let challengeRouter = require("./api/challenge/challenge.router");
let contactusRouter = require("./api/contactus/contactus.router");
let discountRouter = require("./api/discount/discount.router");
let notesRouter = require("./api/notes/notes.router");
let userskillsRouter = require("./api/userskills/user.skills.router");
let usersachievementRouter = require("./api/usersachievement/usersachievement.router");
let testRouter = require("./api/test/test.router");
let achievementRouter = require("./api/achievement/achievement.router");
let skillsRouter = require("./api/skills/skills.router");
let partnerRouter = require("./api/partner/partner.router");
let offersRouter = require("./api/offers/offers.router");
let questionRouter = require("./api/question/question.router");
let codeofdiscountRouter = require("./api/codeofdiscount/codeofdiscount.router");
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/challenge", challengeRouter);
app.use("/api/contactus", contactusRouter);
app.use("/api/discount", discountRouter);
app.use("/api/notes", notesRouter);
app.use("/api/userskills", userskillsRouter);
app.use("/api/usersachievement", usersachievementRouter);
app.use("/api/test", testRouter);
app.use("/api/achievement", achievementRouter);
app.use("/api/skills", skillsRouter);
app.use("/api/partner", partnerRouter);
app.use("/api/codeofdiscount", codeofdiscountRouter);
app.use("/api/offers", offersRouter);
app.use("/api/question", questionRouter);
app.listen(process.env.APP_PORT, () => {
  //kjabsk;djbvas
  console.log("server up and running on port : ", process.env.APP_PORT);
});
