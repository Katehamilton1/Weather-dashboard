var citySearchEL = document.getElementById("city-search-form");
var userInputEL = document.getElementById("city");
var clearHistory = document.getElementById("clear-history");
var currentUVEL = document.getElementById("UV-index");
var fiveDay = [];
//submit button that searches the city
citySearchEL.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submited");
  console.log(userInputEL.value);
  getCityWeather(userInputEL.value);
  citySearch();
  displaySearchHistory()
});

//first api that looks at the daily weather
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
//second api that looks at the daily weather
var getForcast = function (lat, lon) {
  var apiKey = "147201a46f94fdc2b6ce9d902d685f99";
  var apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  fetch(apiURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
       
        document.getElementById("UV-index").innerHTML = "UV index: " + data.current.uvi;
        document.getElementById("wind-span").innerHTML ="Wind: " + data.current.wind_speed + "MPH";
        document.getElementById("humidity-span").innerHTML = "Humidity: " + data.current.humidity + "%";

        currDate = data.current.dt;
        var dateString = moment.unix(currDate).format("DD");

        var tomorrow = data.daily[0].dt;
        var tomorrowString = moment.unix(tomorrow).format("DD");
        makeForecast(data);

      });
    };
  });
};
//creates the weekly forcast using a loop to create the html elements
function makeForecast(data) {

  console.log(data);
  let anchorEl = document.getElementById("weather")
  for (let i = 0; i < 5; i++) {

    anchorEl.innerHTML += `  
  <div class="daily-block"
        id=${i + 1}">
        <p class="date"> ${(data.daily[i].dt)}</p>
        <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png"> </img>
    <p class="temp"> ${Math.floor((data.daily[i].temp.day) - 273.15) * 1.8 + 32}°F</p>
    <p class="wind">Wind:${data.daily[i].wind_speed} MPH </p>
    <p class="icon">  </p> 
    <p class="humidity">Humidity:${data.daily[i].humidity}% </p>
    </div>`
  };
};

// // Clear search history
// function displaySearchHistory() {
//   var searchHistory = document.getElementById("search-history");
//   console.log("display search");
// }

// function citySearch(fiveDay) {
//   var recentCities = userInputEL.value
// //  console.log(recentCities);
// // // fiveDay.push(recentCities); // pushing the recent cities into the fiveday array
// //   var searchHistory ={ 
// //     city: city, 
   
  
// localStorage.setItem('searchHistory', JSON.stringify(fiveDay)); //pushing the fiveday array into the localstorage
// JSON.parse(localStorage.getItem('searchHistory'));



// }


