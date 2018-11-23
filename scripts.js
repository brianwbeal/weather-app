$(document).ready(() => {

  // api key
  const apiKey = "9d0c147959c5e885689aaabd07e7b3ff";
  const cityID = "5746545";  // portland, or, usa

  $.get({
    url: `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${apiKey}&units=imperial`,
    success: (result) => {
      console.log(result);

      // city
      let currentCity = result.name;
      console.log(currentCity);

      // time
      let currentTime = new Date;
      let ampmCurrent = "am"
      let currentHour = currentTime.getHours();
      if (currentHour > 12) {
        currentHour = currentHour - 12;
        ampmCurrent = "pm";
      }
      let currentMinute = currentTime.getMinutes();
      console.log(`${currentHour}:${currentMinute} ${ampmCurrent}`);


      // icon

      // temperature
      let currentTemp = Math.round(result.main.temp);
      console.log(currentTemp);

      // description
      let currentDescription = result.weather[0].description;
      console.log(currentDescription);

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
      console.log(sunrise);

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
      console.log(sunset);

      // wind
      let windSpeed = Math.round(result.wind.speed);
      console.log(windSpeed, "mph");

      // high temperature
      let tempMax = Math.round(result.main.temp_max);
      console.log(tempMax);

      // low temperature
      let tempMin = Math.round(result.main.temp_min);
      console.log(tempMin);

    },
    error: (error) => {
      console.log(error);
    }
  });
});
