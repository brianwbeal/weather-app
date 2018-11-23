$(document).ready(() => {

  // api key
  const apiKey = "";
  const cityID = "5746545";  // portland, or, usa

  $.get({
    url: `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${apiKey}&units=imperial`,
    success: (result) => {
      console.log(result);

      // city
      let currentCity = result.name;
      $("#currentCity").text(currentCity);

      // time
      let currentTime = new Date;
      let ampmCurrent = "am"
      let currentHour = currentTime.getHours();
      if (currentHour > 12) {
        currentHour = currentHour - 12;
        ampmCurrent = "pm";
      } else if (currentHour === 12) {
        ampmCurrent = "pm";
      }
      let currentMinute = currentTime.getMinutes();
      if (currentMinute < 10) {
        currentMinute = (`0${currentMinute}`);
      }
      $("#currentTime").text(`${currentHour}:${currentMinute} ${ampmCurrent}`);

      // icon
      // let currentWeatherCode = result.weather[0].id;
      let currentWeatherCode = 321;
      let currentConditions = "";
      if (currentWeatherCode >= 300 && currentWeatherCode <= 321) {
        currentConditions = "drizzle";
      } else if (currentWeatherCode >= 500 && currentWeatherCode <= 531) {
        currentConditions = "rainy";
      } else if (currentWeatherCode >= 600 && currentWeatherCode <= 622) {
        currentConditions = "snow";
      } else if (currentWeatherCode === 800) {
        currentConditions = "sunny";
      } else if (currentWeatherCode >= 801 && currentWeatherCode <= 804) {
        currentConditions = "cloudy";
      }
      $("#weather-image").attr("src", `img/weather-app-${currentConditions}.png`);

      // temperature
      let currentTemp = Math.round(result.main.temp);
      $("#currentTemp").prepend(currentTemp);

      // description
      let currentDescription = result.weather[0].description;
      $("#currentConditions").text(currentDescription);

      // sunrise time
      let ampmRise = "am";
      let sunriseTime = (new Date(result.sys.sunrise * 1000));
      let sunriseHours = sunriseTime.getHours();
      if (sunriseHours > 12) {
        sunriseHours = sunriseHours - 12;
        ampmRise = "pm";
      }
      let sunriseMinutes = sunriseTime.getMinutes();
      let sunrise = `${sunriseHours}:${sunriseMinutes}${ampmRise}`;
      $("#sunriseTime").text(sunrise);

      // sunset time
      let ampmSet = "am";
      let sunsetTime = (new Date(result.sys.sunset * 1000));
      let sunsetHours = sunsetTime.getHours();
      if (sunsetHours > 12) {
        sunsetHours = sunsetHours - 12;
        ampmSet = "pm";
      }
      let sunsetMinutes = sunsetTime.getMinutes();
      let sunset = `${sunsetHours}:${sunsetMinutes}${ampmSet}`;
      $("#sunsetTime").text(sunset);

      // wind
      let windSpeed = Math.round(result.wind.speed);
      $("#currentWind").text(`${windSpeed}mph`);

      // high temperature
      let tempMax = Math.round(result.main.temp_max);
      $("#todayHigh").prepend(tempMax)

      // low temperature
      let tempMin = Math.round(result.main.temp_min);
      $("#todayLow").prepend(tempMin)

    },
    error: (error) => {
      console.log(error);
    }
  });
});
