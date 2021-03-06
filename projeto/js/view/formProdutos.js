import { formataMoeda } from '../utils/formataMoeda.js';
import * as PedidoController from "../controller/PedidoController.js";
import * as ProdutosController from "../controller/ProdutosController.js";
import { exibirProdutosPedido } from "./tabelaProdutosPedido.js";
import ProdutoError from '../model/ProdutoError.js';
import PedidoError from '../model/PedidoError.js';

const seletorProduto = document.querySelector('#seletor_produto');
const inputQuantidade = document.querySelector('#input_quantidade');
const btnAdicionarProduto = document.querySelector('#btnAdicionarProduto');

window.addEventListener('load', async () => {
    let opcoes_select = '';
    const listaProdutos = await ProdutosController.getListaProdutos();

    listaProdutos.forEach(function (pizza) {
        opcoes_select += `
            <option value="${pizza.id}">
                ${pizza.nome} - ${formataMoeda(pizza.preco)}
            </option>
        `;
    });

    seletorProduto.innerHTML = opcoes_select;
});


btnAdicionarProduto.addEventListener('click', function () {
    try 
    {
        let produto_id = parseInt(seletorProduto.value);
        let quantidade = parseInt(inputQuantidade.value);
        
        const produto_selecionado = ProdutosController.getProdutoPorId(produto_id);
        produto_selecionado.quantidade = quantidade;
        PedidoController.adicionarProduto(produto_selecionado);
        exibirProdutosPedido();
    }
    catch(erro)
    {
        if (erro instanceof ProdutoError || erro instanceof PedidoError) {
            alert(erro);
        }
        else {
            alert('Um erro inesperado ocorreu ao adicionar o produto selecionado ao seu pedido. Por favor, contate o administrador!');
            console.error(erro);
        }
    }
});

