var teclados = document.querySelectorAll(".btn-senha");
var valores = ["0", "1", "2", "3", "4"];
var valores2 = ["5", "6", "7", "8", "9"];
var existente = [];
var existente2 = [];

for (i = 0; i < teclados.length; i++) {
    do {
        var numeroRandomico = valores[Math.floor(Math.random() * valores.length)];
        var numeroRandomico2 = valores2[Math.floor(Math.random() * valores2.length)];
    } while (existente[numeroRandomico] || existente2[numeroRandomico2]);
    existente[numeroRandomico] = true;
    existente2[numeroRandomico2] = true;
    teclados[i].value = numeroRandomico + " ou " + numeroRandomico2;
};

var erro = document.querySelector("#erro");
var telaLogin = document.querySelector(".tela-login");
var dados = document.querySelector("section");
var esqueci = document.querySelector("#esqueci");
var campoSenha = document.login.senha;
var campoEscondido = document.login.senhaEscondida;

campoSenha.readOnly = "true";////bloqueia o campo de texto

function btn(numero) {
    var numeroSomente = numero.replace(/\D/g, '');
    campoEscondido.value += numeroSomente;
    campoSenha.value += "0";
    erro.innerHTML = "";
}
function reseta() {
    campoSenha.value = "";
    campoEscondido.value = "";
    erro.innerHTML = "";
};

esqueci.onclick = function () {
    erro.innerHTML = "Senha: 1234";
}

function entrar() {
    var senhas = [];
    for (i = 0; i <= 6; i += 2) {
        senhas = senhas.concat(campoEscondido.value.substr([i], 2));
    };
    if (senhas[0].match(/1/) && senhas[1].match(/2/) && senhas[2].match(/3/) && senhas[3].match(/4/) && campoSenha.value.length == "4") {
        dados.removeAttribute("style");
        telaLogin.style.display = "none";
    } else if (campoEscondido.value == "") {
        erro.innerHTML = "Digite a senha!";
    } else {
        erro.innerHTML = "Senha errada!";
        campoSenha.value = "";
        campoEscondido.value = "";
    }
};

//Troca de tema
function toggleTheme() {
    window.theme = typeof (window.theme) === 'string' ? window.theme : 'light';
    var switchToTheme = window.theme === 'light' ? 'dark' : 'light';
    window.theme = switchToTheme;
    document.querySelector('body').setAttribute('data-theme', switchToTheme);
}