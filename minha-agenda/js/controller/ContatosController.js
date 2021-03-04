import Contato from "../model/Contato.js";
import ContatoError from "../model/ContatoError.js";
import { exibirContatos } from "../view/tabela.js";

/** @type {Array<Contato>} */
const contatos = JSON.parse(localStorage.getItem('contatosAgenda')) || [];

export function adicionarContato(nome, telefone)
{
    if (!nome) {
        throw new ContatoError('Nome é obrigatório!');
    }
    else if (!telefone || telefone.length < 14) {
        throw new ContatoError('Telefone é inválido!');
    }

    const infoContato = new Contato(nome, telefone);
    let posicaoContato = contatos.findIndex(c => c.nome.toUpperCase() == nome.toUpperCase());

    if (posicaoContato >= 0) {
        contatos[posicaoContato] = infoContato;
    }
    else {
        contatos.push(infoContato);
    }

    localStorage.setItem('contatosAgenda', JSON.stringify(contatos));
    exibirContatos();
}

export function removerContato(indice)
{
    if (isNaN(indice) || indice < 0 || indice >= contatos.length) {
        throw new ContatoError('Índice informado é inválido!');
    }
    else {
        contatos.splice(indice, 1);
        localStorage.setItem('contatosAgenda', JSON.stringify(contatos));
    }
}

export function getContatos()
{
    return contatos;
}
