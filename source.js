window.onload = function(){
var searchInput = [];
var key = "WV7Oz1mmHYeSHVQuzqCkedMb1PC9SI2Y";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + key +"&q=" + searchInput + "&limit=20";


$("#button").on("click", function(){
  event.preventDefault();
  var gif = $("#search".trim()).val()
  searchInput.push(gif);
  console.log(searchInput);
  search();
  console.log("I was clicked " + queryURL)
  reset();
});

// $("#button").on("click", function () {
//   event.preventDefault();
//   var gif = $("#search").val().trim();
//       searchInput.push(gif);
//       console.log(searchInput);
//       search();
//       console.log("I was clicked" + queryURL)
//       reset();
// });

function reset(){
  var searchInput =[];
 };

function search(){
   $.ajax({ 
  url: queryURL,
  method: "GET"
}).then(function(results) { 
  console.log(results);
  // $("#gifs").append("<img id = 'image' href = ''>Recipe</a>")
  // $("#image").attr("src", finding)
  
  
})
};

};