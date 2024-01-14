const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path')
const app = express();
const PORT = process.env.PORT;
const ServiceRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/"))) //ถ้าตรงนี้ไม่ทำงาน จะเด้งไปแสดงผลที่ app.get("/",(req,res))

app.set("views", "./src/views");
app.set("view engine", "ejs")

ServiceRouter.route("/").get((req, res) => {
    res.render("Serviceka",{
        services : [
            {serviceTitle:'ตบหน้า', serviceDescript: 'ตบด้วยความแรงสูง', servicePrice: '599'},
            {serviceTitle:'โดดถีบ', serviceDescript: 'ถีบด้วยความแรงสูง', servicePrice: '699'},
            {serviceTitle:'ตะโกนเรียก', serviceDescript: 'เรียกด้วยความแรงสูง', servicePrice: '799'},
            {serviceTitle:'รัดคอ', serviceDescript: 'รัดด้วยความแรงสูง', servicePrice: '899'},
            
        ],
    });
});

app.use("/Serviceka", ServiceRouter)

app.get("/", (req, res) => {
    res.render('index', { username: 'MatoomInw', customers: ["Dream", "Poon", "Em"] });

})
app.listen(PORT, () => {
    debug("Listening on port " + chalk.red(PORT));
})