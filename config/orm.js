// ======================================== DEPENDENCIES
var connection = require("./connection.js");


// ======================================== CREATE QUERY FUNCTIONS
var orm = {
    all: function (table, callback) {

        var query;
        query = "SELECT * FROM ??";

        connection.query(query, [table], function (err, result) {

            if (err) {

                console.log("Hey! An error occured: " + err);

            }

            callback(result)

        });
    },
    insert: function (table, columnVal, callback) {

        var query;

        query = "INSERT INTO " + table + " SET ?";

        connection.query(query, columnVal, function (err, result) {
            if (err) {

                console.log("Hey! An error occured: " + err);

            }

            callback(result);

        });
    },
    update: function (table, col, colVal, id, callback) {

        var query;

        query = "UPDATE " + table + " SET ";
        query += "??=? WHERE ?";

        // query = "UPDATE burgers SET burger_name = 'Burger Updated' WHERE id = ? ";

        connection.query(query, [col,colVal, {id:id}], function(err, result) {

            if (err) {
                
                console.log("Hey! An error occured: " + err);

            }

            callback(result);

        });

    },
    delete: function (table, col, id, callback) {

        var query;

        query = "UPDATE " + table + " SET ";
        query += "??=? WHERE ?";

        query = "DELETE FROM " + table + " WHERE ?? = ?";

        connection.query(query, [col,id], function(err, result) {

            if (err) {
                
                console.log("Hey! An error occured: " + err);

            }

            callback(result);

        });

    },
};

// ======================================== EXPORT ORM
module.exports = orm;