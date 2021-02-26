import { getProdutos, getTotal, removerProduto } from "../pedido.js";
import { formataMoeda } from "../utils/formataMoeda.js";

const tbodyProdutos = document.querySelector('#tbodyProdutos');
const tdTotalPedido = document.querySelector('#tdTotalPedido');

export function exibirProdutosPedido()
{
    let tr = '';
    const produtosDoPedido = getProdutos();
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
                <td>${formataMoeda(produto.preco * produto.quantidade)}</td>
            </tr>
        `;
    });

    let totalDoPedido = getTotal();
    tbodyProdutos.innerHTML = tr;
    tdTotalPedido.innerHTML = formataMoeda(totalDoPedido);
}

tbodyProdutos.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let indice = event.target.dataset.indice;
        removerProduto(indice);
        exibirProdutosPedido();
    }
});

