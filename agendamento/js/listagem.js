$(document).ready(function(){
    

    $.getJSON("../agendamento/api/servico_listar.php", function(dados){
        
        dados.forEach(function(val){            
           var opt = '<option value="'+val.id+'">'+val.nome+'</option>';
           console.log(opt);
           $("#filtro-servico").append(opt);
        });

        /*$.each(dados, function(key, value) {
            $('#filtro-servico').append($('<option>', { value : value.id }).text(value.nome));
        });*/
          
    });


    $.getJSON("../agendamento/api/profissionais_listar.php", function(dados){
        
        $.each(dados, function(key, value) {
            $('#filtro-prof').append($('<option>', { value : value.id }).text(value.nome));
        });          

    });    

    $.getJSON("../agendamento/api/agendamento_listar.php", function(dados){
        $.each(dados, function(key, value) {
            //var tr =
            var data = new Date(value.datahora);
            var datahora = data.getDate() + "/" + data.getMonth + "/" + data.getFullYear();

            $('#regAgendamentos').append($('<tr>').append($('<td>')).text(datahora));
            $('#regAgendamentos').append($('<tr>').append($('<td>')).text(value.status));
            $('#regAgendamentos').append($('<tr>').append($('<td>')).text(value.cliente));
            $('#regAgendamentos').append($('<tr>').append($('<td>')).text(value.servico));
            $('#regAgendamentos').append($('<tr>').append($('<td>')).text(value.profissional));
        });         
    
    }); 
    
    
    

});