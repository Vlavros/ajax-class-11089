//Funções e Orientação a Objetos
console.log("Teste Início");

/*
$(document).ready(function(){
    alert("A");
});
*/
var n1 = new Number(10);
var n2 = 5;

function soma(n1, n2) {
    return n1+n2;
}

var res = soma(2,3);

console.log(res);

function mult(v1,v2) {
    //var n1 = 2;
    //var n2 = 5;

    function outra(v1,v2) {
        return v1-v2;
    }

    console.log(outra(1,2));

    return n1 * n2;
}

//outra(1,5); //daria erro

//var n1 = 2;
//var n2 = 50;

var res = mult(2,3);

console.log(res);

///--------------------------------------
var ola = function() { //função anonima
    return "Olá mundo!";
}

console.log(ola);
console.log(ola());
console.log(ola.call());

///--------------------------------------
// Equivalente a uma classe
// no ECMA5 -> usado no jQuery
var Pessoa = function() {
    var idade = 10;
    var nome = "João";

    function andar() {

    }

    //return function(){
        function getIdade() {
            return idade;//10;//this.idade;
        }
    //}

    function toString() {
        return idade;
    }

}

Pessoa.prototype.voar = function() {
    return false;
}

var vlad = new Pessoa();

console.log(vlad);

///--------------------------------------
// JSON -> JavaScript Object Notation
var json = {
    idade: 10,
    nome: "João",
    cidade: ["Curitiba","Colombo","Recife"],
    andar: function() {

    }
}

console.log(json);

var api = "{\"nome\": \"Vlad\", \"idade\": 28}";
console.log(api);

var nvPessoa = JSON.parse(api);
console.log(nvPessoa);

console.log(nvPessoa.nome);

///--------------------------------------


function ligar() {
    //alert("A");
    var div = document.getElementById("letreiro"); 
    div.innerHTML = div.innerHTML.trim();

    var letreiro = function() { //funcao anonima
        
        var conteudo = div.innerHTML;
        
        var letra = conteudo.charAt(0);
        var novo = conteudo.substr(1) + letra;

        div.innerHTML = novo;
    }

    //dispara o callback -> evento
    setInterval(letreiro,300); //dispara o evento

    //marquee
    //div.innerHTML = "<marquee>" + div.innerHTML + "</marquee>"; 


}

console.log(vlad.voar());