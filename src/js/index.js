    const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

    botaoMostrarProjetos.addEventListener('click',() => {
        projetosInativos.forEach(projetosInativo => {
            projetosInativo.classList.add('ativo'); 

        });
        esconderbotao();
     });
   




function esconderbotao() {
    botaoMostrarProjetos.classList.add('remover');
}

