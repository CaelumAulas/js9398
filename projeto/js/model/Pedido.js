import Produto from './Produto.js';

export default class Pedido {
    constructor() {
        this.id = generateRandomId();
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

    getTotal() {
        return this.produtos.reduce((total, produto) => total + produto.getSubtotal(), 0);
    }
}

function generateRandomId()
{
    let numeroAleatorio = parseInt(Math.random() * 10000);
    return numeroAleatorio.toString().padStart(8, '0');
}

