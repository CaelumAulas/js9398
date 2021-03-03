import Contato from "../model/Contato.js";
import { exibirContatos } from "../view/tabela.js";

/** @type {Array<Contato>} */
const contatos = JSON.parse(localStorage.getItem('contatosAgenda')) || [];

export function adicionarContato(nome, telefone)
{
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
        alert('Índice informado é inválido!');
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
