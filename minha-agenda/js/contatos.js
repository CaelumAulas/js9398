import { exibirContatos } from "./tabela.js";

const contatos = JSON.parse(localStorage.getItem('contatosAgenda')) || [];

export function adicionarContato(nome, telefone)
{
    const infoContato = { nome, telefone };
    let contatoExists = contatos.some(c => c.nome.toUpperCase() == nome.toUpperCase());

    if (contatoExists) {
        alert('Contato já está na sua lista!');
    }
    else {
        contatos.push(infoContato);
        localStorage.setItem('contatosAgenda', JSON.stringify(contatos));
        exibirContatos();
    }
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
