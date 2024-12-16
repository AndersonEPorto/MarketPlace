// Selecionando os campos de entrada Dom  do formulario
const formulario = document.getElementById("form");
const nome = document.getElementById("nome");
const sobreNome = document.getElementById("sobreNome");
const email = document.getElementById("email");
const confirmarEmail = document.getElementById("confirmarEmail");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const btn = document.getElementById('cadastrar');

// Função para validar o formulário
function validarFormulario() {
    // Verificar se o email e confirmar email são iguais
    if (email.value !== confirmarEmail.value) {
        alert("Os e-mails não coincidem. Por favor, verifique.");
        return false;
    }

    // Verificar se a senha e confirmar senha são iguais
    if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem. Por favor, verifique.");
        return false;
    }

    // Se as validações passarem, retorna true
    return true;
}


// Função para cadastrar um novo usuário
function cadastrar() {
    if (!validarFormulario()) {
        return; // Se a validação falhar, não enviar a solicitação
    }

    fetch("http://127.0.0.1:8080/login", {// Enviar uma solicitação HTTP para o servidor
        headers: {
            //Define os Cabeçalhos da solicitção
            'accept': 'application/json', // Define que a resposta deve estar no formato JSON
            'Content-Type': 'application/json' // Define que o corpo da solicitação está no formato JSON
        },
        method: "POST", //Define o método HTTP como POST
        body: JSON.stringify({ // Converte o objeto JavaScript em uma string JSON para enviar no corpo da solicitação
            nome: nome.value, //Valor do campo nome
            sobreNome: sobreNome.value, //Valor do campo sobreNome
            email: email.value, //Valor do campo email
            senha: senha.value, //Valor do campo senha
        })
    })
        .then(function (res) { // Quando a solicitação é concluida com sucesso
            alert("Usuário cadastrado com sucesso")
            console.log(res); // Loga a resposta no console
            limpar(); // Chama a função para limpar os campos do formulário
        })
        .catch(function (err) { // Quando ocorre um erro
            console.log(err);  // Loga o erro no console
        });
};

// Função para limpar os campos do formulário
function limpar() {
    // Limpa os campos
    nome.value = "";
    sobreNome.value = "";
    email.value = "";
    confirmarEmail.value = "";
    senha.value = "";
    confirmarSenha.value = "";
}

// Adicionar um ouvinte de evento ao formulário para o evento 'submit'
formulario.addEventListener('submit', function (event) {
    event.preventDefault();// Previne o comportamento padrão do formulário(não envia a página)
    cadastrar(); // Chama a função para cadastrar o usuário
})
