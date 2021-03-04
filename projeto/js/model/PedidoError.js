import Pedido from './Pedido.js';

export default class PedidoError extends Error {
    /**
     * Construtor da Classe PedidoError
     * @param {string} mensagem Mensagem de Erro a ser exibida ao usuário
     * @param {Pedido} pedido Objeto pedido que gerou o erro lançado
     */
    constructor(mensagem, pedido = null) {
        super(mensagem);
        this.pedido = pedido;
    }

    toString() {
        return this.message;
    }
}
