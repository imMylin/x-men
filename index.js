const personagens = document.querySelectorAll('.personagem');
personagens.forEach(personagem =>{
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top:0, behaivor: 'smooth'});
        }

        removeSelecaoPersonagem();
        //adiciona classe selecionada do personagem
        personagem.classList.add('selecionado');
        
        alteraImagemPersonagemSelecionado(personagem);

        alteraNomePersonagemSelecionado(personagem);
        
        alteraDescricaoPersonagemSelecionado(personagem);

    })
})

function removeSelecaoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function alteraDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alteraNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alteraImagemPersonagemSelecionado(personagem) {
    const personagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    personagemGrande.src = `./imagens/card-${idPersonagem}.png`;
}
