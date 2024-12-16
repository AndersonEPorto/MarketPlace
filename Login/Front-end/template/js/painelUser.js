async function fetchUserData() {
    const userData = localStorage.getItem('user');

    if (userData) {

        const user = JSON.parse(userData);

        document.getElementById('idUser').innerText = user.id;

        document.getElementById('userName').innerText = user.nome;

        document.getElementById('userEmail').innerText = user.email;

    } else {

        window.location.href = 'login.html';

    }
}

document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('user');

    window.location.href = '../../static/index.html';

});
document.addEventListener('DOMContentLoaded', fetchUserData);

function cadastrarProduto() {
    // Obter os valores dos campos de formulário
    const nomeProduto = document.getElementById("nomeProduto").value;
    const descricao = document.getElementById("descricao").value;
    const preco = document.getElementById("preco").value;
    const imagem = document.getElementById("imagem").files[0]; // Pegando o arquivo do input de file

    // Pegando o Id do User no localStorage
    const userData = localStorage.getItem('user');
    const user = JSON.parse(userData);

    // Criando um FormData para o envio da requisição
    const formData = new FormData();
    formData.append('produto', JSON.stringify({
        "nome": nomeProduto,
        "descricao": descricao,
        "preco": preco,
        "user": {
            "id": user.id
        }
    }));
    formData.append('file', imagem);

    let method = "POST";
    let url = "http://127.0.0.1:8080/produto";
    let sucesso = "Produto cadastrado com sucesso!";

    if (document.querySelector("#btn-cadastrar").textContent == "Atualizar") {
        method = "PUT";
        url = "http://127.0.0.1:8080/produto/" + document.querySelector("#idProd").value;
        sucesso = "Produto atualizado com sucesso!";
    }

    // Configurando o envio da requisição
    fetch(url, {
        method: method,
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert(sucesso);
                document.getElementById("produtoFrom").reset();
            } else {
                alert("Erro ao cadastrar Produto. Tente novamente.");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Erro ao cadastrar produto. Verifique a conexão com o servidor.");
        });
}


async function buscarProdutosIdUser() {
    const userData = localStorage.getItem('user');
    if (!userData) {
        alert("Usuário não encontrado. Faça login novamente.");
        window.location.href = 'login.html';
        return;
    }
    const user = JSON.parse(userData);
    const userId = user.id;
    const url = `http://127.0.0.1:8080/produto/${userId}`;

    try {
        const resposta = await fetch(url);
        const produtos = await resposta.json();
        const container = document.getElementById('produtos-container');
        container.innerHTML = ''; // Limpa o conteúdo anterior 

        produtos.forEach(produto => {
            const divProduto = document.createElement('div');
            divProduto.classList.add('card');
            divProduto.innerHTML = `
                    <div class="card-img">
                        <img src="../../static/image/${produto.nomeImagem}" alt="${produto.nome}">
                    </div>
                    <div class="card-title"><p class="nome-prod">${produto.nome}</p></div>
                    <div class="card-subtitle"><p class="descricao-prod">${produto.descricao.slice(0, 50)}</p></div>
                    <div class="card-footer">
                        <div class="card-price">R$ <p class="preco-prod">${produto.preco}</p></div>

                        <div class="btnOpcoes">
                            <button id="alterar" class="delete-button">
                                <svg class="delete-svgIcon" viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                                </svg>
                            </button>
                            <button id="delet" class="delete-button">
                                <svg class="delete-svgIcon" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                `;

            // Crindo um atributo id e adicionando o id
            divProduto.setAttribute("idProd", produto.idProduto);

            // Adicionando o card ao container
            container.appendChild(divProduto);

            divProduto.querySelector("#delet").addEventListener('click', function () {
                if (!confirm("Deseja realmente excluir este produto?")) {
                    return;
                }

                // Configuração para o envio da requisição DELETE
                fetch(`http://127.0.0.1:8080/produto/${produto.idProduto}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            alert("Produto excluído com sucesso!");
                            divProduto.remove(); // Remove o produto excluído da interface
                        } else {
                            alert("Erro ao excluir o produto. Verifique o Id e tente novamente.");
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao excluir o produto:', error);
                    });
            });

            divProduto.querySelector("#alterar").addEventListener('click', function () {
                document.querySelector("#nomeProduto").value = produto.nome;
                document.querySelector("#descricao").value = produto.descricao;
                document.querySelector("#preco").value = produto.preco;
                document.querySelector("#idProd").value = produto.idProduto;
                document.querySelector("#btn-cadastrar").textContent = "Atualizar";
            });
        });

    } catch (erro) {
        console.error('Erro ao buscar produtos:', erro);
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', buscarProdutosIdUser);

