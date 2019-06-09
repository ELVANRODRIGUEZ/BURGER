// ======================================== DEPENDENCIES
var orm = require("../config/orm.js");


// ======================================== CREATE CALLQUERY FUNCTIONS
var burger = {
    allBurgers: function (callback) {

        orm.all("burgers", function (res) {

            callback(res);

        });
    },
    insIntoBurgers: function (columnVal, callback) {

        orm.insert("burgers", columnVal, function(res) {
            
            callback(res);

        });
    },
    updateBurger: function (colVal, id, callback) {

        orm.update("burgers", "devouered", colVal, id, function(res) {

            callback(res);

        }); 

    },
    deleteBurger: function (id, callback) {

        orm.delete("burgers", "id", id, function(res) {

            callback(res);

        }); 

    }
    
}


// ======================================== EXPORT BURGER
module.exports = burger;