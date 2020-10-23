import { ProxyState } from "../AppState.js";
import weatherService from "../Services/WeatherService.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  document.getElementById("temperature").innerHTML = ProxyState.weather.Template
  console.log("THE WEATHER MAN SAYS:", ProxyState.weather);
}
export default class WeatherController {
  constructor() {
    ProxyState.on("weather", drawWeather);
    this.getWeather()
    this.getTime()
    // &#8457; this is how to get degrees f
  }

  getWeather() {
    try {
      weatherService.getWeather()
    }
    catch (e) {
      console.error(e)
    }
  }

  getTime() {
    let d = new Date()
    let minutes = d.getMinutes()
    let hours = d.getHours()
    if (minutes < 10) {
      // @ts-ignore
      minutes = ("0" + minutes)
    }
    if (hours > 12) {
      hours -= 12

      if (hours < 5) {
        document.getElementById("clock").innerHTML = (`<div class="display-1">${hours}:${minutes} p.m.</div><div class=""><h3>Good Afternoon Briston</h3></div>`)

      } else if (hours >= 5 && hours < 8) {
        document.getElementById("clock").innerHTML = (`<div class="display-1">${hours}:${minutes} p.m.</div><div class=""><h3>Good Evening Briston</h3></div>`)

      }
      else {
        document.getElementById("clock").innerHTML = (`<div class="display-1">${hours}:${minutes} p.m.</div><div class=""><h3>Good Night Briston</h3></div>`)

      }
    } else {

      document.getElementById("clock").innerHTML = (`<div class="display-1">${hours}:${minutes} p.m.</div><div class=""><h3>Good Morning Briston</h3></div>`)
    }
  }

}
