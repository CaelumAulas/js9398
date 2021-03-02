import Produto from './Produto.js';

export default function Pedido()
{
    this.id = 1;
    this.nomeCompleto = null;
    this.email = null;
    this.telefone = null;
    this.cep = null;
    this.endereco = null;
    this.bairro = null;
    this.cidade = null;
    this.estado = null;
    this.numero = null;
    this.complemento = null;
    this.observacoes = null;
    this.status = 1; /* 1 = EM ANDAMENTO | 2 = FINALIZADO */
    /** @type {Array<Produto>} */
    this.produtos = [];
}

Pedido.prototype = {
    getTotal() {
        return this.produtos.reduce((total, produto) => total + produto.getSubtotal(), 0);
    }
}