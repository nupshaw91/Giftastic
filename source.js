window.onload = function(){

  var searched = [];

$("#button").on("click", function(){
  event.preventDefault();
 var key = "WV7Oz1mmHYeSHVQuzqCkedMb1PC9SI2Y";
 var gif = $("#search").val().trim();
 var searchInput = [];
 searchInput.push(gif);
 var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key +"&q=" + searchInput + "&limit=20";
 
  console.log(searchInput);
  console.log("I was clicked " + queryURL)
  $.ajax({ 
    url: queryURL,
    method: "GET"
  }).then(function(results) { 
    console.log(results);
    for (var i = 0; i < results.length; i++){

      var gifDiv = $("<div>");
      var gifImage = $("<img>");

              gifImage.attr("src", results[i].url);
              gifDiv.append(gifImage);

              $("#start").prepend(gifDiv);
    };
    
  reset();
});

function reset(){
  searchInput =[];
 };

 
 function renderButtons() {
     for (var i = 0; i < searched.length; i++) {
         var a = $("<button>");
         a.addClass("");
         a.attr("data-state", searched[i]);
         a.text(searched[i]);
         $("#").append(a);
     }
   
  
  
  
}
});
}