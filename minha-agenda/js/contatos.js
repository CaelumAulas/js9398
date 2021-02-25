const moduloContatos = (function() {

    const contatos = [];

    function adicionarContato(nome, telefone)
    {
        const infoContato = { nome, telefone };
        let contatoExists = contatos.some(c => c.nome.toUpperCase() == nome.toUpperCase());

        if (contatoExists) {
            alert('Contato já está na sua lista!');
        }
        else {
            contatos.push(infoContato);
            moduloTabela.exibirContatos();
        }
    }

    function getContatos()
    {
        return contatos;
    }

    return {
        getContatos,
        adicionarContato
    }

})();
