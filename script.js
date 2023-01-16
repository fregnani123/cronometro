function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {hour12:false,timeZone:"UTC"})
}

let clock = document.querySelector(".clock");

let segundos = 0 
let timer;

function iniciarRelogio(){
    timer = setInterval(function() {
           segundos++;
           clock.innerHTML = criarHoraDosSegundos(segundos)
       },1000) 
   }

  document.addEventListener('click', function (e) {
    const el= e.target;
    if(el.classList.contains('reset')){ 
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        segundos= 0 
        clock.classList.remove("pausado")
    }

    if(el.classList.contains('start')){ 
        clearInterval(timer);
        iniciarRelogio();
        clock.classList.remove("pausado")
    }

    if(el.classList.contains('stop')){ 
        clearInterval(timer);
        clock.classList.add("pausado")
    }
  })


 















