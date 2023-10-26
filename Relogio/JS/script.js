const hora = document.getElementById('hora')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const relogio =setInterval(function time(){
    let horaAtual = new Date();
    let hr = horaAtual.getHours();
    let min = horaAtual.getMinutes();
    let sec = horaAtual.getSeconds();

    if(hr< 10 )hr = "0"+hr;
    if(min< 10 )min = "0"+min;
    if(sec< 10 )sec = "0"+sec;
    
    hora.innerHTML = hr;
    minutos.innerHTML= min;
    segundos.innerHTML = sec;



},1000)