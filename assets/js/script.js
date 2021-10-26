var citySearchEL = document.getElementById("city-search-form");
var userInputEL = document.getElementById("city");
var clearHistory = document.getElementById("clear-history");
var currentUVEL = document.getElementById("UV-index");

citySearchEL.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submited");
  console.log(userInputEL.value);
  getCityWeather(userInputEL.value);
});

clearHistory.addEventListener("submit", function (event) {
  console.log("clearHistory");
});

var getCityWeather = function (city) {
  var apiKey = "147201a46f94fdc2b6ce9d902d685f99";
  var apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log("display Weather", data);
        getForcast(data.coord.lat, data.coord.lon);
      });
    }
  });
};
var getForcast = function (lat, lon) {
  var apiKey = "147201a46f94fdc2b6ce9d902d685f99";
  var apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log("display Weather", data);
        console.log("uv", data.current.uvi);
        document.getElementById("UV-index").innerHTML =
          "The UV index is:                                                         " +
          data.current.uvi;
        document.getElementById("wind-span").innerHTML =
          data.current.wind_speed;
        document.getElementById("humidity-span").innerHTML =
          data.current.humidity;
        //   document.getElementById("fiveDayCardsRow").innerHTML = data.daily(JSON.stringify({}))
        currDate = data.current.dt;
        var dateString = moment.unix(currDate).format("DD");
        console.log(dateString);
        var tomorrow = data.daily[0].dt;
        var tomorrowString = moment.unix(tomorrow).format("DD");
        console.log(tomorrowString);
        makeForecast ();
      

        // document.getElementById("day1").innerHTML = tomorrowString;

function makeForecast () {
for (let i=0; i<currDate.length; i++) {

  document.getElementById("day1").innerHTML = data.daily[0];
  document.getElementById("day2").innerHTML = data.daily[1];
  document.getElementById("day3").innerHTML = data.daily[2];
  document.getElementById("day4").innerHTML = data.daily[3];
  document.getElementById("day5").innerHTML = data.daily[4];
}
}
      });
    }
  });
};

// Clear search history
function displaySearchHistory() {
  var searchHistory = document.getElementById("search-history");
  console.log("display search");
}

// clear seach history
function clearHistory() {
  console.log("clear seach history");
}
