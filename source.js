window.onload = function () {
  var searchInput = ["Elmo", "Stich", "Elvis"];
  renderButtons();

  (function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

  function renderButtons() {
    $("#gifs").empty();

    for (var i = 0; i < searchInput.length; i++) {
      var a = $("<button>");
      a.addClass("gif btn btn-outline-secondary font");
      a.attr("data-state", searchInput[i]);
      a.text(searchInput[i]);
      $("#gifs").append(a);
    }
  };

  function gifMe() {
    var key = "WV7Oz1mmHYeSHVQuzqCkedMb1PC9SI2Y";
    var gif = $("#search").val().trim();
    searchInput.push(gif);
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + searchInput + "&limit=10";

    console.log(searchInput);
    console.log("I was clicked " + queryURL)

    $.ajax({
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      url: queryURL,
      method: "GET",
      dataType: "JSON",
      crossDomain: "True"
    }).then(function (results) {
      var gifs = results.data
      console.log(gifs);
      for (var i = 0; i < gifs.length; i++) {
        var gifDiv = $("<div>");
        var gifImage = $("<img>").attr("src", gifs[i].url,S);

        gifDiv.append(gifImage);
        $("#start").append(gifDiv);

      };
    });
  };

  $("#button").on("click", function (event) {
    event.preventDefault();

    gifMe();
    renderButtons();
  });



};
