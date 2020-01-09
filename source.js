window.onload = function () {
  var searchInput = ["Elmo", "Stich", "Elvis"];
  renderButtons();

  function renderButtons() {
    $("#gifs").empty();

    for (var i = 0; i < searchInput.length; i++) {
      var a = $("<button>");
      a.addClass("gif");
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
      url: queryURL,
      method: "GET"
    }).then(function (results) {
      var gifs = results.data
      console.log(gifs);
      for (var i = 0; i < gifs.length; i++) {
        var gifDiv = $("<div>");
        var gifImage = $("<img>").attr("src", gifs[i].url);

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
