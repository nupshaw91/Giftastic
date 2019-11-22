window.onload = function(){


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
      var gifDiv
    }
    // $("#gifs").append("<img id = 'image' href = ''>Gifs</a>")
    // $("#image").attr("src", finding)
  reset();
});

function reset(){
  searchInput =[];
 };


   
  
  
  
})
};

