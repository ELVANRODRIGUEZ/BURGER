// ======================================== DEPENDENCIES
var mysql = require("mysql");


// ======================================== CONNECTION OBJECT
connection = mysql.createConnection({

    host: "izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",port: 3306,
    user: "nce14o8q5ttfep6k",
    password: "ps7wx5qrovjnkklp",
    database: "ko0493p1zln7buwz"
    
})


// ======================================== CREATE CONNECTION
connection.connect(function(err) {
    
    if (err) {
        
        console.log("Hey! Error occured: " + err.stack);
        return;
        
    }
    
    console.log("Hey! Connected as id: " + connection.threadId);
    
});


// ======================================== EXPORT CONNECTION
module.exports = connection;
