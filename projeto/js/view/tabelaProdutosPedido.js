import { getProdutos, getTotal } from "../pedido.js";
import { formataMoeda } from "../utils/formataMoeda.js";

export function exibirProdutosPedido()
{
    let tr = '';
    const produtosDoPedido = getProdutos();
    produtosDoPedido.forEach(produto => {
        tr += `
            <tr>
                <td width="10%">
                    <img src="imagens/pizzas/${produto.foto}" width="100%" />
                </td>
                <td>${produto.nome}</td>
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

