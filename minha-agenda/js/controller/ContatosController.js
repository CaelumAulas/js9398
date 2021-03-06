import Contato from "../model/Contato.js";
import ContatoError from "../model/ContatoError.js";
import { exibirContatos } from "../view/tabela.js";

/** @type {Array<Contato>} */

export function adicionarContato(nome, telefone)
{
    if (!nome) {
        throw new ContatoError('Nome é obrigatório!');
    }
    else if (!telefone || telefone.length < 14) {
        throw new ContatoError('Telefone é inválido!');
    }

    const infoContato = new Contato(nome, telefone);
    // Passo X
    exibirContatos();
}

export function removerContato(indice)
{
    // Passo X
}

export function getContatos()
{
    // Passo X
}
