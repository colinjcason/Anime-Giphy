// array that will be generated into buttons
var topics = ["Saturday Night Live", "Jimmy Fallon", "Kristen Wig", "Andy Sanberg", "Amy Poehler",
    "Will Ferrell", "Bill Hader", "Adam Sandler"];

// function is called when form is submitted
function displayGif() {

    var gif = $(this).attr("data-name");
    var query = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + APIKey + "&limit=10";
    
    $.ajax({
        url: query,
        method: "GET"
    }).then(function(response) {

        console.log("success got data", response);

        $("#image-dump").empty();

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var imageURL = results[i].images.fixed_height.url;
            var imageStill = results[i].images.fixed_height_still.url;
            var imageDiv = $("<img class='new-gif'>");
            imageDiv.attr("src", imageURL);
            imageDiv.attr("data-still", imageStill);
            imageDiv.attr("data-moving", imageURL);
            imageDiv.attr("data-pause", false);
            $("#image-dump").prepend(imageDiv);
        }
    });
};


function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        var button = $("<button>");
        button.addClass("topics-button");
        button.attr("data-name", topics[i]);
        button.text(topics[i]);
        $("#buttons").append(button);
    }
};

$("#find-gif").on("click", function () {

    event.preventDefault();

    $("#buttons").empty();

    var newGif = $("#gif-input").val();
    topics.push(newGif);

    renderButtons();
});

$("#image-dump").on("click", ".new-gif", function () {
    var paused = $(this).attr("data-pause");
    if (paused === "true") {
        $(this).attr("data-pause", false);
        var movingURL = $(this).attr("data-moving");
        $(this).attr("src", movingURL);
    } else {
        $(this).attr("data-pause", true);
        var stillURL = $(this).attr("data-still");
        $(this).attr("src", stillURL);
    }
});

$(document).on("click", ".topics-button", displayGif);

renderButtons();