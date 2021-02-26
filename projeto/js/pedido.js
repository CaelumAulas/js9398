
const pedido = {
    produtos: []
}

export function adicionarProduto(produto)
{
    if (!pedido.produtos.includes(produto)) {
        pedido.produtos.push(produto);
    }
}

/**
 * Remove um produto da lista de produtos do pedido
 * @param {number} indice   Índice a ser removido do array de produtos 
 * @returns {void}
 */
export function removerProduto(indice)
{
    if (isNaN(indice) || indice < 0 || indice >= pedido.produtos.length) {
        alert('Índice informado é inválido!');
    }
    else {
        pedido.produtos.splice(indice, 1);
    }
}

export function getProdutos()
{
    return pedido.produtos;
}

/**
 * Calcula e retorna o valor total do pedido realizado
 * @returns {number}
 */
export function getTotal()
{
    return pedido.produtos.reduce((valorAcumulado, produto) => valorAcumulado + (produto.preco * produto.quantidade), 0);
}

export function getPedido()
{
    return pedido;
}