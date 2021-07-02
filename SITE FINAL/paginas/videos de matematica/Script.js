alert ("SEJA BEM VINDO")


function enviarDuvida(){
    let inputNome = document.getElementById("input-nome").value;
    let inputDuvida = document.getElementById("input-duvidas").value;
    let divFormularios = document.createElement(`div`);

    let nomeUsuario = document.createElement(`h3`);
    let duvidaUsuario = document.createElement(`p`);


    let conteudoNomeUsuario = document.createTextNode(inputNome);
    nomeUsuario.appendChild(conteudoNomeUsuario);

    let conteudoDuvidaUsuario = document.createTextNode(inputDuvida);
    duvidaUsuario.appendChild(conteudoDuvidaUsuario);

    divFormularios.appendChild(nomeUsuario);
    divFormularios.appendChild(duvidaUsuario);
  
   
   divFormularios.classList.add("class");

    console.log(divFormularios);
    document.getElementById("container-formulario").insertAdjacentElement("afterend",divFormularios);
    z

}

window.onload = function(){
   
    let buttduvidas = document.getElementById("enviar-duvida");
    console.log(buttduvidas);
    buttduvidas.addEventListener(`click` , enviarDuvida);


}