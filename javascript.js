// declare variables for the ajax call
var APIKey = "cbhe5AwSsFySg4FYmflgWQ12Ww7qse4M";

        var xhr = $.get("https://api.giphy.com/v1/gifs/search?&api_key=cbhe5AwSsFySg4FYmflgWQ12Ww7qse4M&limit=5");
        xhr.done(function(data) { console.log("success got data", data); });

        $.ajax({
            url: xhr,
            method: "GET"
        }).then(function(data) {
            console.log(data);
        });

