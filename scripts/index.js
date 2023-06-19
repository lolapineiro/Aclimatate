const APIKEY= "99b376da81555207a92af3e04b2c4385";
const ciudad= document.getElementById('city');
const buttonSearch = document.getElementById('buscar');
const resulElement = document.getElementById('resultado');
let info= "";

buttonSearch.addEventListener( 'click', event=> {
event.preventDefault();


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.value}&appid=${APIKEY}&units=metric`)


.then((res) => {
    return res.json();
})
.then((json) => {
        if (json.cod === 200) {
         info += 
         `<h3>${json.name}</h3>
          <ul>
            <li class="list-group-item">Temperatura: ${json.main.temp} </li>
            <li class="list-group-item">Temp MIN: ${json.main.temp_min}º - Temp MÁX: ${json.main.temp_max} </li>
            <li class="list-group-item">Humedad: ${json.main.humidity} %</li>
            <li class="list-group-item">Sensación Térmica: ${json.main.feels_like}º </li>
            <li class="list-group-item">Vientos: ${json.wind.speed} </li>
            <li class="list-group-item">Presión: ${json.main.pressure}</li>
          </ul>`
    }
})
.catch((err) => {
    console.log(`Error: ${err}`);
  })
  .finally((final) => {
    city.value = "";
  });
});
