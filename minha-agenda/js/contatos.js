import { exibirContatos } from "./tabela.js";

const contatos = [];

export function adicionarContato(nome, telefone)
{
    const infoContato = { nome, telefone };
    let contatoExists = contatos.some(c => c.nome.toUpperCase() == nome.toUpperCase());

    if (contatoExists) {
        alert('Contato já está na sua lista!');
    }
    else {
        contatos.push(infoContato);
        exibirContatos();
    }
}

export function getContatos()
{
    return contatos;
}
