
var slider = document.getElementById("slider");
var result = document.getElementById("result");
slider.oninput = function() {
    result.innerText = this.value;
};

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var nome = document.getElementById("procura").value;
    var idade = document.getElementById("idade").value;
    var procura = document.getElementById("shapes").value;
    var venda = document.querySelector('input[name="Venda"]:checked').value;
    var indicacao = document.getElementById("js").checked ? "Sim" : "Não";
    var satisfacao = document.getElementById("slider").value;

    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Procura: " + procura);
    console.log("Tipo de Venda: " + venda);
    console.log("Indicaria a loja: " + indicacao);
    console.log("Satisfação: " + satisfacao);
    
});
