const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoAvancar = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const numeroCapitulos = 2;
const nomeCapitulo = document.getElementById('capitulo');

let = taTocando = 0;
let = capituloAtual = 1;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}
function pausarfaixa(){
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function tocarOuPausar(){
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;
    } else{
        pausarfaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa(){
    nomeCapitulo.innertext = 'Capítulo ' + capituloAtual;
}

function proximaFaixa(){
    if (capituloAtual === numeroCapitulos){
        capituloAtual = 1;
    }else{
        capituloAtual = capituloAtual + 1
    }
    audioCapitulo.src = "./books/o-silmarillion/" + capituloAtual + '.mp3'
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

function faixaAnterior(){
    if (capituloAtual === 1){
        capituloAtual = numeroCapitulos;
    }else{
        capituloAtual = capituloAtual - 1
    }
    audioCapitulo.src = "./books/o-silmarillion/" + capituloAtual + '.mp3'
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', faixaAnterior);

//Abreviado botaoPlayPause.onclick(tocarFaixa);
