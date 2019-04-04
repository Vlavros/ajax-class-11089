// cadastro.js

$(document).ready(function(){

    //$("#data").datepicker();
    $("#data").datepicker();//.setDefaults( $.datepicker.regional[ "pt-BR" ] );
    $("#data").datepicker("option", "dateFormat", "dd/mm/yy");
    

    $("#cadastrar").click(function(){
 
         var nome = $("#nome").val();
         var email = $("#email").val();
         var telefone = $("#telefone").val();
         var data = $("#data").val();
         var sexo = $("input[name=sexo]:checked").val();

         var regexEmail = /^[a-z0-9.-]*@[0-9a-z-]*.[a-z.]*$/gmi;
         if(regexEmail.test(email) == false) {
             alert("Email inválido.");
             return false;
         }

         var regexTelefone = /^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/gmi;
         if(telefone.search(regexTelefone) == -1) {
            alert("Telefone inválido.");
            return false;
         }
 
         var valido = true;

         if(sexo === undefined) { //Se o sexo foi selecionado
             valido = false;
         }
 
        $("input[type=text]").each(function(ind,el){ //verifica se todos foram preenchidos
            if($(el).val().trim() == "") {
                valido = false;
            }
        });

         if (valido === true)
         {
             var tr = "<tr>"
                         +"<td>"+ nome.trim() +"</td>"
                         +"<td>"+ email.trim() +"</td>"
                         +"<td>"+ telefone.trim() +"</td>"
                         +"<td>"+ sexo.trim() +"</td>"
                         +"<td>"+ data.trim() +"</td>"
                     +"</tr>";
 
             $(".tabela tbody").append(tr);

             $("input[type=text]").val("");

         } else {
             alert("Algum campo obrigatorio não foi preenchido!");
         }
         
 
    }); //fim do click

    $("#telefone").keydown(function(ev){
        console.log(ev.keyCode);

        var regex = /[0-9]/;

        if(regex.test(ev.key) == false && ev.keyCode !== 8) {
            return false;
        }        
    });
 
 }); //fim do ready