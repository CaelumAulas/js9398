import { getContatos, removerContato } from "./contatos.js";

const tabelaContatos = document.querySelector('#tabelaContatos');

window.addEventListener('load', () => {
    exibirContatos();
});

export function exibirContatos()
{
    let tr = '';

    for (let [indice, contato] of Object.entries(getContatos()))
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

tabelaContatos.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        let indice = event.target.dataset.indice;
        removerContato(indice);
        exibirContatos();
    }
});