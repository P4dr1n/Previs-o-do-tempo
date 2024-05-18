// d255f62ffba7b8b642230ad48458de07 chave da api

const key = "d255f62ffba7b8b642230ad48458de07"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".forecast").innerHTML = dados.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-sky").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json() )
   
    colocarDadosNaTela(dados)
}

function clickbutton(){
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}