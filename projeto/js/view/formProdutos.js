/** Módulo responsável por gerenciar o formulário de produtos da aplicação */
import { formataMoeda } from '../utils/formataMoeda.js';
import * as PedidoController from "../controller/PedidoController.js";
import { exibirProdutosPedido } from "./tabelaProdutosPedido.js";
import Produto from "../model/Produto.js";

/** @type {HTMLSelectElement} */
const seletorProduto = document.querySelector('#seletor_produto');

/** @type {HTMLInputElement} */
const inputQuantidade = document.querySelector('#input_quantidade');

/** @type {HTMLButtonElement} */
const btnAdicionarProduto = document.querySelector('#btnAdicionarProduto');


const listaProdutos = [
    new Produto(1, 'Pizza de Calabresa', 'pizza-calabresa.jpg', 52.99),
    new Produto(2, 'Pizza 4 Queijos', 'pizza-4-queijos.jpg', 65.82),
    new Produto(3, 'Pizza de Frango Catupiry', 'pizza-frango-catupiry.jpg', 45.93),
    new Produto(4, 'Pizza Marguerita', 'pizza-marguerita.jpg', 32.75),
    new Produto(5, 'Pizza Portuguesa', 'pizza-portuguesa.jpg', 55.99)
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

seletorProduto.innerHTML = opcoes_select;

btnAdicionarProduto.addEventListener('click', function () {
    let produto_id = parseInt(seletorProduto.value);
    let quantidade = parseInt(inputQuantidade.value);

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
        PedidoController.adicionarProduto(produto_selecionado);
        exibirProdutosPedido();
    }
});

