// insira seu código aqui
const contatos = [];

btnSalvar.addEventListener('click', function() {
    let nome = inputNome.value.trim();
    let telefone = inputTelefone.value.trim();

    if (!nome) {
        alert('Nome é obrigatório!');
    }
    else if (!telefone || telefone.length < 14) {
        alert('Telefone é inválido!');
    }
    else {
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
});

function exibirContatos()
{
    let tr = '';

    for (let contato of contatos)
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