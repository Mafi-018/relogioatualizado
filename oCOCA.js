


let app = document.querySelector('.app');

let divContainer = document.createElement('div');
divContainer.setAttribute('class', 'container');

let divHora = document.createElement('div');
let hoje = document.createElement('p');

let btnTema = document.createElement('a');
btnTema.innerHTML = '<i class="fas fa-adjust"></i>';

btnTema.addEventListener('click', () => {
    return app.classList.toggle('light');
});


function verificaHora(hora){
    return hora < 10 ? hora = "0" + hora : hora;
}

function horaAtual(){
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    
    divHora.innerHTML = `
        <div class="hora">
            <span>${hora}</span> 
            <span>:</span>
            <span>${verificaHora(minuto)}</span>
            <span>:</span>
            <span>${verificaHora(segundo)}</span>
        </div>
    `;
    
    diaAtual(data);
}

function diaAtual(data){
    const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado",];
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",];
    
    hoje.innerHTML = `${diasDaSemana[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
}

app.appendChild(divContainer);
divContainer.appendChild(btnTema)
divContainer.appendChild(divHora);
divContainer.appendChild(hoje);

setInterval(horaAtual, 1000);
