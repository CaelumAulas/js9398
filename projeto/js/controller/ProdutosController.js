import Produto from '../model/Produto.js';
import ProdutoError from '../model/ProdutoError.js';
import ProdutosService from '../services/ProdutosService.js';

let listaProdutos = [];

/**
 * Retorna a lista de Produtos disponíveis para serem adquiridos pelos clientes
 * @returns {Promise<Array<Produto>>}
 */
export async function getListaProdutos()
{
    listaProdutos = await ProdutosService.getProdutos();
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

