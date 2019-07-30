// array that will be generated into buttons
var topics = ["The Office", "Friends", "Parks & Recreation", "Michael Scott", "Ron Swanson", "Will Ferrell", "Step Brothers"];    
var APIKey = "cbhe5AwSsFySg4FYmflgWQ12Ww7qse4M"
    
// function is called when form is submitted
    $("#find-gif").on("click", function() {

        $("#image-dump").empty();

    // prevent submit button from submitting a request
    event.preventDefault();

    var input = $("#gif-input").val();

    // variable to hold API key
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + APIKey + "&limit=10");

    xhr.done(function(response) { 
        
        console.log("success got data", response);

        var results = response.data;

        for(var i = 0; i < results.length; i++) {
            var imageURL = results[i].images.fixed_height.url;
            var imageDiv = $("<img>");
            imageDiv.attr("src", imageURL);
            $("#image-dump").prepend(imageDiv);
        }
    
    });

});


