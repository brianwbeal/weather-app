$(document).ready(() => {

  // api key
  const apiKey = "";
  const cityID = "5746545";  // portland, or, usa

  $.get({
    url: `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&APPID=${apiKey}&units=imperial`,
    success: (result) => {
      console.log(result);
    },
    error: (error) => {
      console.log(error);
    }
  });
});
