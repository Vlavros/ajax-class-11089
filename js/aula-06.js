// cadastro.js

$(document).ready(function(){

    $("#cadastrar").click(function(){
 
         var nome = $("#nome").val();
         var email = $("#email").val();
         var telefone = $("#telefone").val();
         var data = $("#data").val();
         //var sexo =  
 
         var valido = true;
 
         if (nome == "")
         {
             valido = false;
         } 
 
         if (email == "")
         {
             valido = false;
         }
 
         if (telefone == "")
         {
             valido = false;
         }
 
         if (data == "")
         {
             valido = false;
         }
 
         if (valido === true)
         {
             var tr = "<tr>"
                         +"<td>"+ nome +"</td>"
                         +"<td>"+ email +"</td>"
                         +"<td>"+ telefone +"</td>"
                         +"<td></td>"
                         +"<td>"+ data +"</td>"
                     +"</tr>";
 
             $(".tabela tbody").append(tr);
             $("input").val("");
         } else {
             alert("Algum campo obrigatorio não foi preenchido!");
         }
         
 
    }); //fim do click
 
 }); //fim do ready