$(document).ready(() => {

  // api key
  const apiKey = "";
  const cityID = "5746545";  // portland, or, usa

  $.get({
    url: `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${apiKey}&units=imperial`,
    success: (result) => {
      console.log(result);

      // city
      const currentCity = result.name;
      console.log(currentCity);

      // time

      // icon

      // temperature

      // description

      // sunrise time

      // sunset time

      // wind

      // high temperature

      // low temperature

      // forecast

    },
    error: (error) => {
      console.log(error);
    }
  });
});
