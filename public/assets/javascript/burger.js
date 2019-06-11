// Capture the form inputs


// $(function () {
//     $("#add").on("click", function (event) {

//         // event.preventDefault();

//         // $.ajax("/api/burger/post", {
//         //     type: "POST",
//         //     data: {
//         //         burger: "asdf"
//         //     }
//         // }).then(function () {

//         //     console.log("New Burger Created");

//         // });

//         // var id = 3;
//         // var burgerState = 0;

//         // $.ajax("/api/burger/update/" + id, {
//         //     type: "PUT",
//         //     data: {
//         //         "burgerState": burgerState
//         //     }
//         // }).then(function (data) {

//         //     console.log(data);
//         //     console.log("Burger Updated");

//         // });

//         // var id = 3;

//         // $.ajax("/api/burger/delete/" + id, {
//         //     type: "DELETE",
//         // }).then(function (data) {

//         //     console.log(data);
//         //     console.log("Burger Deleted");

//         // });

//     });

// })

$(function () {

    //  Create burger.
    $("#add").on("click", function (event) {

        var burger = $("#burgerInpArea").val().trim();

        if (!burger || burger.trim() == "") {
            
            return;

        }

        // console.log(burger);

        $.ajax("/api/burger/post", {
            type: "POST",
            data: {
                burger: burger
            }
        }).then(function (data) {

            // console.log(data);
            console.log("New " + burger + " Speciality Created");

            var $burgerOrder = $("#burgerOrder");

            var burgerAppend;
            var burgerCost = Math.floor(Math.random() * 50) + 100;
            burgerCost = burgerCost.toFixed(2);

            burgerAppend = "<i dbId='" + data.insertId + "' class='fas fa-hamburger'></i>";
            burgerAppend += "<p class='burgerCreated' dbId='";
            burgerAppend += data.insertId + "' cost='" + burgerCost + "'";
            burgerAppend += "' name='" + burger + "'>";
            burgerAppend += burger + "&nbsp&nbsp&nbsp$";
            burgerAppend += burgerCost + "&nbsp&nbsp&nbspCheckout!</p><br>";

            $burgerOrder.append(burgerAppend);

            $("#burgerInpArea").val("");

        });

    });

    // Add burger to Checkout and erase it from Order Blackboard.
    $("#burgerOrder").on("click", ".burgerCreated", function (event) {

        var burgerCreatedId = $(this).attr("dbId");
        var burgerName = $(this).attr("name");
        var burgerCost = $(this).attr("cost");
        var $thisBurger = $(this);
        var $burgerIcon = $("#burgerOrder > [dbId='" + burgerCreatedId + "']")

        // console.log("Burger Icon: " + $burgerIcon.attr("class"));
        // console.log("Id: " + $burgerIcon.attr("dbId"));

        $.ajax("/api/burger/update/" + burgerCreatedId, {
            type: "PUT",
            data: {
                burgerState: 1
            }
        }).then(function (data) {

            // console.log(data);
            console.log("Your " + burgerName + " is ready to be paid!");

            var $burgerCheckout = $("#burgerCheckout");

            var burgerAppend;

            burgerAppend = "<i dbId='" + burgerCreatedId + "' class='fas fa-hamburger'></i>";
            burgerAppend += "<p class='burgerCreated' dbId='";
            burgerAppend += burgerCreatedId + "' cost='" + burgerCost + "'";
            burgerAppend += "' name='" + burgerName + "'>";
            burgerAppend += burgerName + "&nbsp&nbsp&nbsp$";
            burgerAppend += burgerCost + "&nbsp&nbsp&nbspPay!</p>";
            burgerAppend += "<p class='buyNot' dbId='" + burgerCreatedId + "'>&nbsp/&nbsp&nbsp&nbspGuess Not!</p><br>";

            $burgerCheckout.append(burgerAppend);
            $thisBurger.remove();
            $burgerIcon.remove();


        });

    });
    
    //  Buy burger and delete it from Checkout Board.
    $("#burgerCheckout").on("click", ".burgerCreated", function (event) {

        var burgerChkOutId = $(this).attr("dbId");
        var burgerName = $(this).attr("name");
        var $thisBurger = $(this);
        var $burgerIcon = $("#burgerCheckout > [dbId='" + burgerChkOutId + "']")

        // console.log(burgerChkOutId);
        // console.log(burgerName);
        // console.log(burgerCost);

        $.ajax("/api/burger/delete/" + burgerChkOutId, {
            type: "DELETE",
        }).then(function (data) {

            // console.log(data);
            console.log("Your " + burgerName + " is ready to go!");

            $thisBurger.remove();
            $burgerIcon.remove();


        });

    });

})