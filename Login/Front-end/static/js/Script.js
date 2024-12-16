
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Simular carregamento de conteúdo
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1500); // Ajuste o tempo de carregamento simulado conforme necessário
});


async function buscarProdutos() {
    const url = 'http://127.0.0.1:8080/produto'; // Atualize para a URL do seu backend
    try {
        const resposta = await fetch(url);
        const produtos = await resposta.json();
        const container = document.getElementById('produtos');
        container.innerHTML = ''; // Limpa o conteúdo anterior
        produtos.forEach(produto => {
            const divProduto = document.createElement('div');
            divProduto.classList.add('card');
            divProduto.innerHTML = `
                <div class="card-img">
                    <img src="../static/image/${produto.nomeImagem}" alt="${produto.nome}"> <!-- Atualize se tiver imagens -->
                </div>
                <div class="card-title">${produto.nome}</div>
                <div class="card-subtitle">${produto.descricao.slice(0, 50)}...</div> <!-- Limita a descrição -->
                <div class="card-footer">
                <div class="card-price">R$ ${produto.preco}</div>
                <button id="add" class="card-btn" onclick="adicionarAoCarrinho(${produto.idProduto}, '${produto.nome}',${produto.preco})"> Adicionar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cart3" viewBox="0 0 16 16">
                <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg></button>
                </div>
            `;
            container.appendChild(divProduto);
        });
    } catch (erro) {
        console.error('Erro ao buscar produtos:', erro);
    }
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', buscarProdutos);


function verificarLogin() {
    const userData = localStorage.getItem('user');

    if (userData) {
        window.location.href = "../template/pages/painelUser.html";
    } else {
        window.location.href = "../template/pages/login.html";
    }
}

document.getElementById('logado').addEventListener('click', function () {
    verificarLogin();
});

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id, nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já existe no carrinho
    const produtoNoCarrinho = carrinho.find(item => item.id === id);

    if (produtoNoCarrinho) {
        // Se o produto já existe, aumenta a quantidade
        produtoNoCarrinho.quantidade++;
    } else {
        // Caso contrário, adiciona o produto com quantidade inicial 1
        carrinho.push({ id, nome, preco, quantidade: 1 });
    }

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Atualiza a exibição do carrinho
    exibirCarrinho();

    // Atualiza o número de itens no botão do carrinho
    atualizarCarrinhoBotao();

    alert(`${nome} foi adicionado ao carrinho!`);
}

// Função para atualizar o botão do carrinho com o número de itens
function atualizarCarrinhoBotao() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const qtdCarrinho = document.getElementById('qtdCarrinho');
    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    qtdCarrinho.textContent = totalItens;  // Atualiza o número de itens no carrinho
}

// Chama a função ao carregar a página para exibir a quantidade inicial no botão
document.addEventListener('DOMContentLoaded', atualizarCarrinhoBotao);

// Função para exibir o carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('itensCarrinho');
    carrinhoContainer.innerHTML = '';  // Limpa o conteúdo antes de adicionar novos itens

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach(item => {
            const divItem = document.createElement('div');
            divItem.classList.add('item-carrinho');
            divItem.innerHTML = `
                <h5>${item.nome} x ${item.quantidade}</h5>
                <p>Preço unitário: R$ ${item.preco.toFixed(2)}</p>
                <p>Total: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            `;
            carrinhoContainer.appendChild(divItem);
        });

        // Exibe o total do carrinho
        const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        const divTotal = document.createElement('div');
        divTotal.innerHTML = `<h4>Total: R$ ${total.toFixed(2)}</h4>`;
        carrinhoContainer.appendChild(divTotal);
    }
}

// Função para finalizar a compra
function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        // Aqui você pode fazer a integração com o backend ou simular a finalização da compra
        alert("Compra finalizada com sucesso!");
        localStorage.removeItem('carrinho');
        exibirCarrinho();  // Atualiza a exibição após a finalização

        atualizarCarrinhoBotao();

    }
}

// Expondo funções para o HTML
window.exibirCarrinho = exibirCarrinho;
window.finalizarCompra = finalizarCompra;



