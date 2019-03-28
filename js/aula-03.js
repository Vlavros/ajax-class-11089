var el = document.getElementById("titulo");
console.log(el);

function inserir()
{
    var lista = document.getElementById("ulLista");
    var input = document.getElementById("texto");

    //var x = document.createElement("LI");
    //var t = document.createTextNode(input.value);
    //x.appendChild(t);
    //lista.appendChild(x);
    
    var texto = "<li>" + input.value + "</li>";
    
    //var conteudo = lista.innerHTML;    
    //if(!conteudo.includes(texto)) { //Suportado só apatir do ECMA6
    
    if(lista.innerHTML.search(texto) === -1) {
        lista.innerHTML += texto;
    } else {
        window.alert("Texto ja cadastrado.");
    }
    
    

}

function pesquisar() {
    var input = document.getElementById("palavra");
    var div = document.getElementById("dilma");
    
    var conteudo = div.innerHTML;
    var novo = "<span style=\"background-color: coral;\">" + input.value + "</span>";
    
    div.innerHTML = conteudo.replace(input.value, novo);
    
}