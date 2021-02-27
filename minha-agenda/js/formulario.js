import { adicionarContato } from "./contatos.js";

const btnSalvar = document.querySelector('#btnSalvar');
const inputNome = document.querySelector('#inputNome');
const inputTelefone = document.querySelector('#inputTelefone');

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

