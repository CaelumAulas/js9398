// IIFE
const moduloPedido = (function() {

    const pedido = {
        produtos: []
    }

    function adicionarProduto(produto)
    {
        if (!pedido.produtos.includes(produto)) {
            pedido.produtos.push(produto);
        }
    }

    function getProdutos()
    {
        return pedido.produtos;
    }

    function getTotal()
    {
        return pedido.produtos.reduce((valorAcumulado, produto) => valorAcumulado + (produto.preco * produto.quantidade), 0);
    }

    function getPedido()
    {
        return pedido;
    }

    return {
        // todos os recursos do módulo que eu quiser deixar público deve ser colocado aqui
        adicionarProduto,
        getProdutos,
        getTotal,
        getPedido
    }

})();

