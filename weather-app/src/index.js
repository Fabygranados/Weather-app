function formatDate(date) {
  var hours = date.getHours();

  if (hours < 10) {
    hours = "0".concat(hours);
  }

  var minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }

  var dayIndex = date.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var day = days[dayIndex];
  return "".concat(day, " ").concat(hours, ":").concat(minutes);
}

var dateElement = document.querySelector("#date");
var currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

var searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let weather = response.data.weather[0].description;
  let wind = response.data.wind.speed;
  let humiditiy = response.data.main.humidity;
  let humid = humiditiy;
  let humidid = document.querySelector("#hum");
  humidid.innerHTML = humid;

  let windvar = wind;
  let windid = document.querySelector("#wind");
  windid.innerHTML = windvar;

  let weathervar = weather;
  let weatherclass = document.querySelector("#weather");
  weatherclass.innerHTML = weathervar;

  let temp = temperature;
  let temph3 = document.querySelector("#Temperature");
  temph3.innerHTML = temp;

  let cityInput = city;
  let cityh1 = document.querySelector("h1");
  cityh1.innerHTML = cityInput;
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  let apiKey = "0f8bc384a7c31b717a18cfe38a95ae06";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}
