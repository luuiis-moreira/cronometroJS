let segundos = 0;
let timer;
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


iniciar.addEventListener('click', () => {
    clearInterval(timer);
    iniciarContagem();
    relogio.classList.remove('amarelo')
});

pausar.addEventListener('click', () => {
    clearInterval(timer);
    iniciar.innerHTML = 'Continuar';
    relogio.classList.add('amarelo')
})

zerar.addEventListener('click', () => {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    iniciar.innerHTML = 'Iniciar';
})


function criarSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'GMT'
    });
}


function iniciarContagem() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000);
};