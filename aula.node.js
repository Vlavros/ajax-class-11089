var fs = require('fs');

//fs.readFile('/temp/texto.txt',"UTF-8", (err, data) => { //mesma coisa que a linha de baixo
fs.readFile('/temp/texto.txt',"UTF-8", function(err, data) {    
    if (err) throw err;
    console.log(data);
});

var nome = "vladimir";
console.log(nome);