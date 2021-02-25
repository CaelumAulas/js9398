import { adicionarContato } from "./contatos.js";

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
        adicionarContato(nome, telefone);
    }
});

