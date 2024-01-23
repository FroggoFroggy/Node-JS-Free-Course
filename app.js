const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path')
const app = express();
const PORT = process.env.PORT;
const services = require("./data/services.json");
const ServiceRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/"))) //ถ้าตรงนี้ไม่ทำงาน จะเด้งไปแสดงผลที่ app.get("/",(req,res))

app.set("views", "./src/views");
app.set("view engine", "ejs")

ServiceRouter.route("/").get((req, res) => {
    res.render("products",
        services,
    );
});

ServiceRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.send("Hello this world is Product and Service "+id);
});

app.use("/products", ServiceRouter)

app.get("/", (req, res) => {
    res.render('index', { username: 'MatoomInw', customers: ["Dream", "Poon", "Em"] });

})
app.listen(PORT, () => {
    debug("Listening on port " + chalk.red(PORT));
})