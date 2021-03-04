import Produto from '../model/Produto.js';
import ProdutoError from '../model/ProdutoError.js';

const listaProdutos = [
    new Produto(1, 'Pizza de Calabresa', 'pizza-calabresa.jpg', 52.99),
    new Produto(2, 'Pizza 4 Queijos', 'pizza-4-queijos.jpg', 65.82),
    new Produto(3, 'Pizza de Frango Catupiry', 'pizza-frango-catupiry.jpg', 45.93),
    new Produto(4, 'Pizza Marguerita', 'pizza-marguerita.jpg', 32.75),
    new Produto(5, 'Pizza Portuguesa', 'pizza-portuguesa.jpg', 55.99)
];

/**
 * Retorna a lista de Produtos disponíveis para serem adquiridos pelos clientes
 * @returns {Array<Produto>}
 */
export function getListaProdutos()
{
    return listaProdutos;
}

/**
 * Retorna um produto específico presente na lista pelo seu ID
 * @param {number} id   ID do Produto a ser retornado
 * @returns {Produto}
 */
export function getProdutoPorId(id)
{
    const produto_selecionado = listaProdutos.find(produto => produto.id === id);

    if (!produto_selecionado) {
        throw new ProdutoError('Produto selecionado é inválido!');
    }

    return produto_selecionado;
}

