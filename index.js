const express = require("express");
const app = express();
const indexRouter = require("./routers/index");
//const { corsWithOptions } = require("./config/cors");
const db = require("./models");
//var bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }));

(async () => {
  await db.sequelize.sync();
})();

app.set('view engine', 'ejs');

//app.use(corsWithOptions);
app.use(express.json());
app.use("/musics", indexRouter);

app.use(express.static('views'));
app.use(express.static('assets'));
app.use(express.static('style'));


app.listen(process.env.PORT || "3000", () => {
  console.log("Le serveur est à l’écoute sur le port 3000");
});
