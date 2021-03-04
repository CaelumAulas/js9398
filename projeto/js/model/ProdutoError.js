import Produto from './Produto.js';

export default class ProdutoError extends Error {
    /**
     * Construtor da Classe ProdutoError
     * @param {string} mensagem Mensagem de Erro a ser exibida ao usuário
     * @param {Produto} produto Objeto produto que gerou o erro lançado
     */
    constructor(mensagem, produto = null) {
        super(mensagem);
        this.produto = produto;
    }

    toString() {
        return this.message;
    }
}