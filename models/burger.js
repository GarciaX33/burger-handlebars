// require orm js
var orm = require("../config/orm.js");

// will call the ORM functions using burger specific input for the ORM.
var burger = {
    //select all
    selectAll: function (cb) {
        console.log("selectAll in burgers.js")
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    //insert one
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    //update one
    updateOne: function (condition, cb) {
        orm.updateOne("burgers", "devoured = 1", condition, function (res) {
            cb(res);
        });
    }
};

// export burger
module.exports = burger;