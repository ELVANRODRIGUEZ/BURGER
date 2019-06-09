// ======================================== DEPENDENCIES
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// ======================================== ROUTES
router.get("/", function (req, res) {
    // burger.allBurgers(function (data) {
    //     res.json(data);
    // });
    res.render("home");
});

router.post("/api/burger/post", function (req, res) {
    var newBurger = req.body.burger;
    console.log(newBurger);
    var columnVal = {
        burger_name: newBurger,
        devouered: false
    };

    burger.insIntoBurgers(columnVal, function (data) {

        console.log(data);

    })

});

router.put("/api/burger/update/:id", function (req, res) {

    var burgerToUpdate = req.params.id;
    var burgerState = req.body.burgerState;

    console.log(burgerToUpdate);
    console.log(burgerState);

    burger.updateBurger(burgerState, burgerToUpdate, function (data) {

        res.send(data);

    });

})

router.delete("/api/burger/delete/:id", function (req, res) {

    var burgerToDelete = req.params.id;

    console.log(burgerToDelete);

    burger.deleteBurger(burgerToDelete, function (data) {

        res.send(data);

    });

})

// ======================================== ROUTES
module.exports = router;