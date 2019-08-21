// will require express
var express = require('express');
var router = express.Router();
// requiring burger js
var burger = require("../models/burger.js")

//router home redirect to burgers directory
router.get("/", function (req, res) {
   res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    console.log("user connected -- call database")
    burger.selectAll(function (data) {
        console.log(data)
        res.render("index", {"burger":data});
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ['burger_name', 'devoured'],
        [req.body.name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId });
        }
    );
});

router.get('/api/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    //console.log("condition", condition);

    burger.updateOne(
        condition,
        function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});
//export router
module.exports = router;