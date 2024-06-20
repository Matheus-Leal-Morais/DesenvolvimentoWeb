var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var clientes = document.querySelectorAll(".cliente");

    var expressao = new RegExp(this.value, "i");

    //Verifica se tem critério de busca
    if(this.value.length > 0){
        for(var cli = 0; cli < clientes.length; cli++){
            //console.log(clientes[cli].querySelector(".info-nome"));
            var nome = clientes[cli].querySelector(".info-nome").textContent;
    
            //Verifica os clientes conforme critério de busca
            if(!expressao.test(nome)){
                clientes[cli].classList.add("invisivel");
            }
            else{
                clientes[cli].classList.remove("invisivel");
            }
        }
    } else{
        for(var cli = 0; cli < clientes.length; cli++){
            var nome = clientes[cli].querySelector(".info-nome").textContent;

            clientes[cli].classList.remove("invisivel");
        }
    }
});