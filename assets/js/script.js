const key = "397105f54c9a134997091776c01fd764"

function dataScreen(data){
    document.querySelector(".city").innerHTML = "Tempo em " + data.name ;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C";
    document.querySelector(".text-previsao").innerHTML = data.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + data.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

}

async function searchCity(city) { //função assincrona
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    dataScreen(data);
    
}

function clickButton() {
    let city = document.querySelector(".input-city").value

    searchCity(city);
}