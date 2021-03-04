import * as PedidoController from "../controller/PedidoController.js";
import PedidoError from "../model/PedidoError.js";
import { formataMoeda } from "../utils/formataMoeda.js";

const tbodyProdutos = document.querySelector('#tbodyProdutos');
const tdTotalPedido = document.querySelector('#tdTotalPedido');

window.addEventListener('load', () => exibirProdutosPedido());

export function exibirProdutosPedido()
{
    let tr = '';
    const produtosDoPedido = PedidoController.getProdutos();
    produtosDoPedido.forEach((produto, indice) => {
        tr += `
            <tr>
                <td width="10%">
                    <img src="imagens/pizzas/${produto.foto}" width="100%" />
                </td>
                <td>
                    ${produto.nome} <br>
                    <button class="btn btn-danger btn-sm" data-indice="${indice}">
                        Remover
                    </button>
                </td>
                <td>${produto.quantidade}</td>
                <td>${formataMoeda(produto.preco)}</td>
                <td>${formataMoeda(produto.getSubtotal())}</td>
            </tr>
        `;
    });

    let totalDoPedido = PedidoController.getTotal();
    tbodyProdutos.innerHTML = tr;
    tdTotalPedido.innerHTML = formataMoeda(totalDoPedido);
}

tbodyProdutos.addEventListener('click', ({ target: { tagName, dataset: { indice } }}) => {
    try 
    {
        if (tagName == 'BUTTON') {
            PedidoController.removerProduto(indice);
            exibirProdutosPedido();
        }
    }
    catch(erro) {
        if (erro instanceof PedidoError) {
            alert(erro);
        }
        else {
            alert('Um erro inesperado ocorreu ao remover o produto do seu pedido. Entre em contato com o administrador!');
            console.error(erro);
        }
    }
});

