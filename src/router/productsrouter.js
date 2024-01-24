const express = require('express');
const ServicesRouter = express.Router();
const services = require("../data/services.json");

ServicesRouter.route("/").get((req, res) => {
    debugger;
    res.render("products",{
            services,
    }
    );
});

ServicesRouter.route("/:id").get((req, res) => {
    debugger;
    const id = req.params.id;
    res.render("product",{
        product: services[id],
    })
});

module.exports = ServicesRouter;