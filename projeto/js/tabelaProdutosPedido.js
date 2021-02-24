const moduloTabela = (function() {

    function exibirProdutosPedido()
    {
        let tr = '';
        const produtosDoPedido = moduloPedido.getProdutos();
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

        let totalDoPedido = moduloPedido.getTotal();
        tbodyProdutos.innerHTML = tr;
        tdTotalPedido.innerHTML = formataMoeda(totalDoPedido);
    }

    return {
        exibirProdutosPedido
    }

})();

