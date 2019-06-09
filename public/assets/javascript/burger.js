// Capture the form inputs


$(function () {
    $("#submit").on("click", function (event) {

        event.preventDefault();

        // $.ajax("/api/burger/post", {
        //     type: "POST",
        //     data: {
        //         burger: "asdf"
        //     }
        // }).then(function () {

        //     console.log("New Burger Created");

        // });
        
        // var id = 3;
        // var burgerState = 0;

        // $.ajax("/api/burger/update/" + id, {
        //     type: "PUT",
        //     data: {
        //         "burgerState": burgerState
        //     }
        // }).then(function (data) {

        //     console.log(data);
        //     console.log("Burger Updated");

        // });
       
        var id = 3;

        $.ajax("/api/burger/delete/" + id, {
            type: "DELETE",
        }).then(function (data) {

            console.log(data);
            console.log("Burger Deleted");

        });

    });

})