/** Módulo responsável por gerenciar o formulário de produtos da aplicação */
import { formataMoeda } from '../utils/formataMoeda.js';
import { adicionarProduto } from "../pedido.js";
import { exibirProdutosPedido } from "./tabelaProdutosPedido.js";

const listaProdutos = [
    { id: 1, nome: 'Pizza de Calabresa', foto: 'pizza-calabresa.jpg', preco: 52.99 },
    { id: 2, nome: 'Pizza 4 Queijos', foto: 'pizza-4-queijos.jpg', preco: 65.82 },
    { id: 3, nome: 'Pizza de Frango Catupiry', foto: 'pizza-frango-catupiry.jpg', preco: 45.93 },
    { id: 4, nome: 'Pizza Marguerita', foto: 'pizza-marguerita.jpg', preco: 32.75 },
    { id: 5, nome: 'Pizza Portuguesa', foto: 'pizza-portuguesa.jpg', preco: 55.99 }
];

let opcoes_select = '';

listaProdutos.forEach(function (pizza) {
    // opcoes_select += '<option value="' + pizza.id + '">' + pizza.nome + ' - ' + pizza.preco + '</option>'; // concatenação
    opcoes_select += `
            <option value="${pizza.id}">
                ${pizza.nome} - ${formataMoeda(pizza.preco)}
            </option>
        `;
});

seletor_produto.innerHTML = opcoes_select;

btnAdicionarProduto.addEventListener('click', function () {
    let produto_id = parseInt(seletor_produto.value);
    let quantidade = parseInt(input_quantidade.value);

    const produto_selecionado = listaProdutos.find(produto => produto.id === produto_id);

    if (!produto_selecionado) {
        alert('Produto selecionado é inválido!');
    }
    else if (quantidade <= 0) {
        alert('Quantidade inválida! Por favor, informe uma quantidade maior ou igual a 1.');
    }
    else {
        // adicionar o produto selecionado ao pedido
        produto_selecionado.quantidade = quantidade;
        adicionarProduto(produto_selecionado);
        exibirProdutosPedido();
    }
});

