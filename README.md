# Weather-Dashboard
### Description
Weather-Dashboard is an application to find a weather condition of a given city both the current and 5-Days forecast at the same time.
The server-side API used was Open Weather APi.


- City, Date, Icon-image
- Temperature
- Humidity
- Wind Speed
- UV index


The local storage is used here to store the previous search city and display them to the user in the left side of the page . The user can also clear the search history by clicking the clear history button.
If the user wants to see the past search city weather condition again, just click the list group item cities under the clear history button.



### Screenshots:

![127 0 0 1_5501_index html](https://user-images.githubusercontent.com/90042533/139939792-593564f5-aab7-4b18-82bb-4cc26bdd7c61.png)



Developed by: Kate Hamilton 



#Requirements 
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
