

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
        console.log(makeForecast);
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
        document.getElementById("UV-index").innerHTML = "The UV index is: " + data.current.uvi;
        document.getElementById("wind-span").innerHTML = data.current.wind_speed;
        document.getElementById("humidity-span").innerHTML = data.current.humidity;

        currDate = data.current.dt;
        var dateString = moment.unix(currDate).format("DD");

        var tomorrow = data.daily[0].dt;
        var tomorrowString = moment.unix(tomorrow).format("DD");
        makeForecast(data);

      });
    };
    });
    };

function makeForecast(data) {
  
  let anchorEl = document.getElementById("weather")
  
  for (let i = 0; i < 5; i++) {
    anchorEl.innerHTML += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body" id=${i + 1}">
    <p class="card-text">${data.daily[i]}</p>
    </div>
    </div>`
  };
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
