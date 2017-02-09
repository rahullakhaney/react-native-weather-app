const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=4b31e7e1ee964469fbc4a1c00f1ffd2e'

export const fetchWeather = (lat, lon) => {
  const url = rootUrl+'&lat='+lat+'&lon='+lon
  console.log(url)

  fetch(url).then(res = console.log(res))
}