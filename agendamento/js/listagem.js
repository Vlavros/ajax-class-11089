$(document).ready(function(){
    

    $.getJSON("../agendamento/api/servico_listar.php", function(dados){
        
        dados.forEach(function(val){            
           var opt = '<option value="'+val.id+'">'+val.nome+'</option>';
           //console.log(opt);
           $("#filtro-servico, #servico").append(opt);
        });

        /*$.each(dados, function(key, value) {
            $('#filtro-servico, #servico').append($('<option>', { value : value.id }).text(value.nome));
        });*/
          
    });


    $.getJSON("../agendamento/api/profissionais_listar.php", function(dados){
        
        $.each(dados, function(key, value) {
            $('#filtro-prof, #profissional').append($('<option>', { value : value.id }).text(value.nome));
        });          

    });    


    $( "#filtro-servico").change(function() {
        //$(this).children("option:selected").val()
        carregarAgendamentos();
    });

    $( "#filtro-prof").change(function() {
        carregarAgendamentos();
    });    
    
    function carregarAgendamentos() {
        var filtro = $("#frmFiltros").serialize();   
        
        $.getJSON("../agendamento/api/agendamento_listar.php", filtro, function(dados){
            
            $("#regAgendamentos").empty();

            
            $.each(dados, function(key, value) {
                var preco = value.preco;
                preco = preco.replace('.', ',');    
                
                var data = new Date(value.datahora);
                var datahora = zeroEsquerda(data.getDate()) + "/" + zeroEsquerda(data.getMonth()) + "/" +data.getFullYear();
                datahora += " " + zeroEsquerda(data.getHours()) + ":" + zeroEsquerda(data.getMinutes());                
                
                $('#regAgendamentos').append($('<tr id="regAgenda-'+value.id+'">'));

                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).text(datahora));
                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).text(value.status));
                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).text(value.cliente));
                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).text(value.servico));
                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).text("R$ " + preco));
                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).text(value.profissional));
                $('#regAgendamentos #regAgenda-'+value.id+'').append(($('<td>')).html(
                     '<span class="btn btn-primary">Confirmar</span>'
                    +'<span class="btn btn-danger">Cancelar</span>'
                    +'<span class="btn btn-success">Realizado</span>'
                ));
            });
     
        });
    }

    function zeroEsquerda(value) {
        return ("0"+value).slice(-2);
    }

    carregarAgendamentos();

    $( "#btnAdd" ).click(function() {
        console.log($("#frmAddAgendamento").serialize());
    });

    $('#datahora').datepicker({
        format: "dd/mm/yyyy",
        startDate: "today",
        language: "pt-BR",
        daysOfWeekDisabled: "0,6",
        todayHighlight: true
    });

    $('#preco').mask("#.##0,00", {reverse: true});    

});