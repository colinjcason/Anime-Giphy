// array that will be generated into buttons
var topics = ["The Office", "Friends", "Parks & Recreation", "Michael Scott", "Ron Swanson", "Will Ferrell", "Step Brothers"];    
var APIKey = "cbhe5AwSsFySg4FYmflgWQ12Ww7qse4M"

    
// function is called when form is submitted
function displayGif() {    

var gif = $(this).attr("data-name");
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + APIKey + "&limit=10");

    xhr.done(function(response) {
        
        console.log("success got data", response);

        $("#image-dump").empty();

        var results = response.data;

        for(var i = 0; i < results.length; i++) {
            var imageURL = results[i].images.fixed_height.url;
            var imageDiv = $("<img class='new-gif'>");
            imageDiv.attr("src", imageURL);
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

$("#find-gif").on("click", function() {

    event.preventDefault();

    $("#buttons").empty();

    var newGif = $("#gif-input").val();
    topics.push(newGif);

    renderButtons();
});

$(document).on("click", ".topics-button", displayGif);

renderButtons();



