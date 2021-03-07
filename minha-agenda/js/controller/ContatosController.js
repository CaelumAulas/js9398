import Contato from "../model/Contato.js";
import ContatoError from "../model/ContatoError.js";
import { exibirContatos } from "../view/tabela.js";

/** @type {Array<Contato>} */

// EXERCICIO 2 - PASSOS 7-8-9
export function adicionarContato(nome, telefone)
{
    if (!nome) {
        throw new ContatoError('Nome é obrigatório!');
    }
    else if (!telefone || telefone.length < 14) {
        throw new ContatoError('Telefone é inválido!');
    }

    const infoContato = new Contato(nome, telefone);
    
    exibirContatos();
}

// EXERCÍCIO 1 - PASSO 12-13-14
export function removerContato(indice)
{
    
}

// EXERCÍCIO 1 - PASSO 6-7-8
export function getContatos()
{
    
}
