
const pedido = {
    produtos: []
}

export function adicionarProduto(produto)
{
    if (!pedido.produtos.includes(produto)) {
        pedido.produtos.push(produto);
    }
}

export function getProdutos()
{
    return pedido.produtos;
}

export function getTotal()
{
    return pedido.produtos.reduce((valorAcumulado, produto) => valorAcumulado + (produto.preco * produto.quantidade), 0);
}

export function getPedido()
{
    return pedido;
}