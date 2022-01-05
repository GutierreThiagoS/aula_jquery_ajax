

function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(cep)
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(reponse){
            console.log(reponse);
            //$("#logradouro").html(reponse.logradouro)
            //document.getElementById("logradouro").innerHTML = reponse.logradouro
            //alert(reponse.logradouro)
            $("#logradouro").html(reponse.logradouro)
            $("#bairro").html(reponse.bairro)
            $("#localidade").html(reponse.localidade)
            $("#uf").html(reponse.uf)
            $("#titulo_cep").html("CEP " + reponse.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
            
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
});