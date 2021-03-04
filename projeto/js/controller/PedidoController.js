import Pedido from '../model/Pedido.js';
import Produto from '../model/Produto.js';
import PedidoError from '../model/PedidoError.js';

/** @type {Pedido} */
const pedido = JSON.parse(localStorage.getItem('dados_pedido')) || new Pedido();
Object.setPrototypeOf(pedido, Pedido.prototype);


/**
 * Adiciona um produto ao pedido do cliente
 * @param {Produto} produto  Produto a ser adicionado ao pedido
 * @returns {void}
 */
export function adicionarProduto(produto)
{
    if (produto.quantidade <= 0) {
        throw new PedidoError('Quantidade inválida! Informe um valor maior ou igual a 1.');
    }

    let indiceProduto = pedido.produtos.findIndex(p => p.id === produto.id);

    if (indiceProduto < 0) {
        pedido.produtos.push(produto);    
    }
    else {
        pedido.produtos[indiceProduto] = produto;
    }

    localStorage.setItem('dados_pedido', JSON.stringify(pedido));
}

/**
 * Remove um produto da lista de produtos do pedido
 * @param {number} indice   Índice a ser removido do array de produtos 
 * @returns {void}
 */
export function removerProduto(indice)
{
    if (isNaN(indice) || indice < 0 || indice >= pedido.produtos.length) {
        throw new PedidoError('Índice informado é inválido!');
    }
    else {
        pedido.produtos.splice(indice, 1);
        localStorage.setItem('dados_pedido', JSON.stringify(pedido));
    }
}

export function getProdutos()
{
    return pedido.produtos.map(produto => Object.setPrototypeOf(produto, Produto.prototype));
}

/**
 * Calcula e retorna o valor total do pedido realizado
 * @returns {number}
 */
export function getTotal()
{
    return pedido.getTotal();
}

export function getPedido()
{
    return pedido;
}