const city = "Chicago";
const weatherKey = 'd5788fb67fb1725246d499cf419ea1f2';
const url = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={d5788fb67fb1725246d499cf419ea1f2}`

const convertKelvin = () => {
    var temp = K * (9/5) - 459.67;
    return temp
}

const getWeather = async () => {
    const result = await fetch(url,{
        method: 'POST'
        
        
    })
}
const data = await result.json()

 console.log(data)
 return data
    

  