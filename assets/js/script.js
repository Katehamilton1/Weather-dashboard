var citySearchEL = document.getElementById("city-search-form");
var userInputEL = document.getElementById("city");
var clearHistory = document.getElementById("clear-history");
var currentUVEL = document.getElementById("UV-index");
var clearCitiesEl = document.getElementById("clear-cities");
var fiveDay = [];

//submit button that searches the city
citySearchEL.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(userInputEL.value);
  getCityWeather(userInputEL.value);
  save(userInputEL.value);
  userInputEL.value = ""
  // resetDisplay()
  // displaySearchHistory()
});



// Clear search history

clearCitiesEl.addEventListener("click", function () {
  localStorage.clear();
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
        console.log("current data", data)
        var imgContainer = document.getElementById("img");
        console.log(imgContainer);
        var newImg = document.createElement("img");
        console.log(newImg);
        newImg.setAttribute("src",`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`)
        imgContainer.appendChild(newImg);
        document.getElementById("temperature").innerHTML = Math.round((data.current.temp) - 273.15) * 1.8 + 32 + "°F";
        document.getElementById("UV-index").innerHTML = "UV index: " + data.current.uvi;
        document.getElementById("wind-span").innerHTML ="Wind: " + data.current.wind_speed + "MPH";
        document.getElementById("humidity-span").innerHTML = "Humidity: " + data.current.humidity + "%";
        makeForecast(data);
      });
    };
  });
};

if (data.current.uvi <== 2)
{UV-index.setAttribute("class", "favorable")  
}
if (data.current.uvi > 2 && data.current.temp  <= 5)
{UV-index.setAttribute("class","moderate" )
}
if (data.current.uvi > 5){
  UV-index.setAttribute("class", "severe")
}





function makeForecast(data) {

  console.log(data);
  let anchorEl = document.getElementById("weather")
  for (let i = 0; i < 5; i++) {
    let myDate = new Date(data.daily[i].dt*1000).toLocaleDateString("en-us");
  
    anchorEl.innerHTML += `  
  <div class="daily-block"
        id=${i + 1}">
        <p class="date">${myDate} </p>
        <img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png"> </img>
    <p class="temp"> ${Math.round((data.daily[i].temp.day) - 273.15) * 1.8 + 32}°F</p>
    <p class="wind">Wind:${data.daily[i].wind_speed} MPH </p>
    <p class="icon">  </p> 
    <p class="humidity">Humidity:${data.daily[i].humidity}% </p>
    </div>`
  };
};



function save(cityname) {
  var previousSearches = JSON.parse(localStorage.getItem('recentCities')) || [];
  previousSearches.push(cityname);
localStorage.setItem('recentCities', JSON.stringify(previousSearches)); 
renderRecentCities()
cityList()
}

// create a for loop that loops over the array. 


function renderRecentCities() {
  var recentCities = JSON.parse(localStorage.getItem('recentCities')) || [];;
  console.log(recentCities)
  var cityContainerEl = document.getElementById("search-history");
  console.log(cityContainerEl)
  cityContainerEl.innerHTML ="";
}

function cityList(){
  var recentCities = JSON.parse(localStorage.getItem('recentCities'));
  
  for (var i = 0; i < recentCities.length; i++){

var newList  = document.createElement("button");
newList.classList.add("historyButton");

newList.type = "button";
newList.innerHTML = recentCities[i];
document.getElementById("search-history").appendChild(newList);

newList.addEventListener("click", function (event) {
getCityWeather(event.target.innerHTML)
  userInputEL.value = ""
});


}
}

cityList()


// function resetDisplay() {
//   imgContainer.appendChild(newImg)= ""
//   anchorEl = ""
//   cityContainerEl = ""
// }