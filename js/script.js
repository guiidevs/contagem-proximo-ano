
//seletores contagem
class painelcontagem{
    constructor(meses, dias, horas, minutos, segundos, milisegundos){
        this.meses = meses;
        this.dias = dias;
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        this.milisegundos = milisegundos;
    }
    mudarcontagem(){
        var getTempo = new Date();

        this.meses.innerText = (getTempo.getMonth() +1 -12) * -1;
        this.dias.innerText = (getTempo.getDate() -31) * -1;
        this.horas.innerText = (getTempo.getHours() -24) * -1;
        this.minutos.innerText = ((getTempo.getMinutes() - 60) * -1) < 10 ? '0' + ((getTempo.getMinutes() - 60) * -1) : ((getTempo.getMinutes() - 60) * -1);
        this.segundos.innerText = ((getTempo.getSeconds() - 60) * -1) < 10 ? '0' + ((getTempo.getSeconds() - 60) * -1) : ((getTempo.getSeconds() - 60) * -1);
        this.milisegundos.innerText = getTempo.getMilliseconds();
    }
}

    const meses = document.querySelector('#meses span');
    const dias = document.querySelector('#dias span');
    const horas = document.querySelector('#horas span');
    const minutos = document.querySelector('#minutos span');
    const segundos = document.querySelector('#segundos span');
    const milisegundos = document.querySelector('#milisegundos span');

const contagem = new painelcontagem(
    meses, dias, horas, minutos, segundos, milisegundos
    );


//seletores de agora

function alterarHorarioAgora(){
    var getTempo = new Date();
    const i_hora_agora = document.getElementById('horaagora');
    const i_minuto_agora = document.getElementById('minutoagora');
    const i_segundo_agora = document.getElementById('segundoagora');

    i_hora_agora.innerText = getTempo.getHours();
    i_minuto_agora.innerText = getTempo.getMinutes();
    i_segundo_agora.innerText = ((getTempo.getSeconds() - 60) * -1) < 10 ? '0' + ((getTempo.getSeconds() - 60) * -1) : ((getTempo.getSeconds() - 60) * -1);
}

setInterval(() => {
    contagem.mudarcontagem();
    alterarHorarioAgora();
}, 1)




