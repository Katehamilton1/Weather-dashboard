var citySearchEL = document.getElementById("city-search-form");
var userInputEL = document.getElementById("city");
var clearHistory = document.getElementById("clear-history")
var currentUVEL = document.getElementById("UV-index");

citySearchEL.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form submited")
    console.log(userInputEL.value)
    getCityWeather(userInputEL.value);
});


clearHistory.addEventListener("submit", function(event){
    console.log("clearHistory")
})

var getCityWeather = function (city) {
  var apiKey = "147201a46f94fdc2b6ce9d902d685f99";
  var apiURL =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  fetch(apiURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log("display Weather", data);
        getForcast(data.coord.lat, data.coord.lon)
      });
    }
  });
};
var getForcast = function (lat, lon) {
    var apiKey = "147201a46f94fdc2b6ce9d902d685f99";
    var apiURL =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
  
    fetch(apiURL).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log("display Weather", data);
          console.log("uv", data.current.uvi);
          document.getElementById("UV-index").innerHTML = data.current.uvi;
        });
      }
    });
  };


// Clear search history
function displaySearchHistory() {
    var searchHistory= document.getElementById("search-history");
    console.log("display search")
}

// clear seach history 
function clearHistory(){
    console.log("clear seach history")
}
