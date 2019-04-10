//console.log("teste0");

var mysql = require('mysql');

//console.log("teste1");


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'petshop'
  });
   
  connection.connect();
   
  connection.query('SELECT cliente FROM agendamentos', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].cliente);
  });
   
  connection.end();
  