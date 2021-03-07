import * as ContatosController from "../controller/ContatosController.js";
import ContatoError from "../model/ContatoError.js";

const tabelaContatos = document.querySelector('#tabelaContatos');

window.addEventListener('load', () => {
    exibirContatos();
});

// EXERCÍCIO 1 - PASSOS 9-10
export function exibirContatos()
{
    let tr = '';

    const contatos = ContatosController.getContatos();
    for (let [indice, contato] of Object.entries(contatos))
    {
        tr += `
            <tr>
                <td>${contato.nome}</td>
                <td>${contato.telefone}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-indice="${indice}">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    }

    tabelaContatos.innerHTML = tr;
}

// EXERCÍCIO 3 - PASSOS 15-16
tabelaContatos.addEventListener('click', (event) => {
    try
    {
        if (event.target.tagName === 'BUTTON') {
            let indice = event.target.dataset.indice;
            ContatosController.removerContato(indice);
            exibirContatos();
        }
    }
    catch(erro) {
        if (erro instanceof ContatoError) {
            alert(erro);
        }
        else {
            alert('Erro ao remover o contato selecionado da sua agenda!');
            console.error(erro);
        }
    }
});