//Abrir menu de navegação
var menu = document.getElementById('menu');
var btnMenu = document.getElementById('btnMenu');

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', trocarTecnologia)

tecSlide = document.querySelectorAll('.slides-tecnologias');
let indice = 0;

function trocarTecnologia() {
    for (let i = 0; i < tecSlide.length; i++) {
        tecSlide[i].style.display = 'none';
    }

    tecSlide[indice].style.display = 'block';

    indice = (indice + 1) % tecSlide.length;
}

setInterval(trocarTecnologia, 7000);

//Trocar slides da área de "Certificados"
function trocarCertificado(certificado, btnCertifi) {
    const certificados = {
        htmlcss: document.getElementById('certiHTMLCSS'),
        javascript: document.getElementById('certiJS'),
        aws: document.getElementById('certiAWS'),
    };

    for (let i in certificados) {
        certificados[i].style.display = i === certificado ? 'block' : 'none';
    }

    const btns = {
        btnHTML: document.getElementById("btnHTML"),
        btnJS: document.getElementById("btnJS"),
        btnAWS: document.getElementById("btnAWS"),
    }

    for (let i in btns) {
        btns[i].style.border = i === btnCertifi ? '2px solid black' : '2px solid transparent';
    }
}

function certificadoHtmlCss() {
    trocarCertificado('htmlcss', 'btnHTML');
}

function certificadoJS() {
    trocarCertificado('javascript', 'btnJS');
}

function certificadoAWS() {
    trocarCertificado('aws', 'btnAWS');
}
document.addEventListener('DOMContentLoaded', certificadoHtmlCss);

setInterval(certificadoHtmlCss, 9000);

setInterval(certificadoJS, 18000);

setInterval(certificadoAWS, 27000);

//Trocar slides da área de "Diferenciais"
function trocarDiferencial(diferencial, btnDiferencial) {
    const diferenciais = {
        cleanCode: document.getElementById('cleanCode'),
        comunicacao: document.getElementById('comunicacao'),
        aprendizado: document.getElementById('aprendizado'),
        design: document.getElementById('design'),
    }

    for (let i in diferenciais) {
        diferenciais[i].style.display = i === diferencial ? 'block' : 'none';
    }

    const btnDiferenciais = {
        btnCleanCode: document.getElementById('btnCleanCode'),
        btnComunicacao: document.getElementById('btnComunicacao'),
        btnAprendizado: document.getElementById('btnAprendizado'),
        btnDesign: document.getElementById('btnDesign'),
    }

    for (let i in btnDiferenciais) {
        btnDiferenciais[i].style.border = i === btnDiferencial ? '2px solid black' : '2px solid transparent';
    }
}

document.addEventListener('DOMContentLoaded', trocarCleanCode);

function trocarCleanCode() {
    trocarDiferencial('cleanCode', 'btnCleanCode');
}

function trocarComunicacao() {
    trocarDiferencial('comunicacao', 'btnComunicacao');
}

function trocarAprendizado() {
    trocarDiferencial('aprendizado', 'btnAprendizado');
}

function trocarDesign() {
    trocarDiferencial('design', 'btnDesign');
}

setInterval(trocarCleanCode, 7000);
setInterval(trocarComunicacao, 14000);
setInterval(trocarAprendizado, 21000);
setInterval(trocarDesign, 28000);