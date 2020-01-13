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
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + searchInput[i] + "&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "JSON",
        crossDomain: "True",
      }).then(function (results) {

        var gifs = results.data;

        console.log("gifs", gifs);

        for (var i = 0; i < gifs.length; i++) {
          var gifDiv = $("<div>");
          var gifImage = $("<img>").attr("src", gifs[i].images.fixed_height.url);
          gifDiv.append(gifImage);
          $("#start").prepend(gifDiv);

        };
      });
    };
  };

  $(".previous").on("click", function (event){
    event.preventDefault();
    Previous();
  // console.log(searchInput)
  function Previous(){
    var key = "WV7Oz1mmHYeSHVQuzqCkedMb1PC9SI2Y";
    
console.log(previous)
    for (var i = 0; i < searchInput.length; i++) {
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=" + previous + "&limit=10";
      console.log(searchInput[i])
      
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
  
  });
  $("#button").on("click", function (event) {
    event.preventDefault();

    gifMe();
    renderButtons();
  });



};
