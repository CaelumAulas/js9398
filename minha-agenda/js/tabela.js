const moduloTabela = (function() {

    function exibirContatos()
    {
        let tr = '';

        for (let contato of moduloContatos.getContatos())
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

    return {
        exibirContatos
    }

})();

