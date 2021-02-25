import { getContatos } from "./contatos.js";

export function exibirContatos()
{
    let tr = '';

    for (let contato of getContatos())
    {
        tr += `
            <tr>
                <td>${contato.nome}</td>
                <td>${contato.telefone}</td>
            </tr>
        `;
    }

    tabelaContatos.innerHTML = tr;
}