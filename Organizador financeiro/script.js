// Função para mostrar a tela de cadastro e esconder a tela de login

function mostrarCadastro() {
    const telaCadastro = document.getElementById('telaCadastro');
    const telaLogin = document.getElementById('telaLogin');
    telaLogin.classList.toggle('escondido');
    telaCadastro.classList.toggle('escondido');
}

// Função para mostrar a tela de login e esconder a tela de cadastro

