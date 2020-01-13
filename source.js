window.onload = function () {
  var searchInput = ["Elmo", "Stitch", "Cat", "Dog"];

  console.log(searchInput)
  renderButtons();

  function renderButtons() {
    $("#gifs").empty();

    for (var i = 0; i < searchInput.length; i++) {
      var a = $("<button>");
      a.addClass("gif btn btn-outline-secondary font previous");
      a.attr("data-state", searchInput[i]);
      a.attr("data-id", searchInput[i]);
      a.text(searchInput[i]);
      $("#gifs").append(a);
    }
  };


  function gifMe() {
    var key = "WV7Oz1mmHYeSHVQuzqCkedMb1PC9SI2Y";
    var gif = $("#search").val().trim();
    searchInput.push(gif);
    for (var i = 0; i < searchInput.length; i++) {
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + gif + "&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "JSON",
        crossDomain: "True",
      }).then(function (results) {

        var gifs = results.data;

        for (var i = 0; i < gifs.length; i++) {
          var gifDiv = $("<div>");
          var gifImage = $("<img>").attr("src", gifs[i].images.fixed_height.url);
          gifDiv.append(gifImage);
          $("#start").prepend(gifDiv);

        };
      });
    };
  };

  //   var previous =$(".previous").attr("data-id");

  // console.log(previous)

  function previousGif() {
    var key = "WV7Oz1mmHYeSHVQuzqCkedMb1PC9SI2Y";
    var previous = $(this).attr("data-id");

    for (var i = 0; i < searchInput.length; i++) {
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + previous + "&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "JSON",
        crossDomain: "True",
      }).then(function (results) {

        var gifs = results.data;

        for (var i = 0; i < gifs.length; i++) {
          var gifDiv = $("<div>");
          var gifImage = $("<img>").attr("src", gifs[i].images.fixed_height.url);
          gifDiv.append(gifImage);
          $("#start").prepend(gifDiv);

        };
      });
    };

  };

  $(".previous").on("click", function (event) {
    event.preventDefault();

    previousGif();
  });

  $(document).on("click", ".previous", previousGif);

  $("#button").on("click", function (event) {
    event.preventDefault();

    gifMe();
    renderButtons();
  });

};


