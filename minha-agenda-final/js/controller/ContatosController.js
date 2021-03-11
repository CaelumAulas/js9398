import Contato from "../model/Contato.js";
import ContatoError from "../model/ContatoError.js";
import ContatosService from "../service/ContatosService.js";
import { exibirContatos } from "../view/tabela.js";

/** @type {Array<Contato>} */

export async function adicionarContato(nome, telefone)
{
    if (!nome) {
        throw new ContatoError('Nome é obrigatório!');
    }
    else if (!telefone || telefone.length < 14) {
        throw new ContatoError('Telefone é inválido!');
    }

    const infoContato = new Contato(nome, telefone);
    const status = await ContatosService.salvarContato(infoContato);
    console.log(status);
    exibirContatos();
}

export async function removerContato(indice)
{
    const respostaServidor = await ContatosService.removerContato(indice);
    if (respostaServidor.status == 0) {
        alert(respostaServidor.mensagem);
    }
}

export async function getContatos()
{
    return await ContatosService.getContatos();
}
