import * as ContatosController from "../controller/ContatosController.js";
import ContatoError from "../model/ContatoError.js";

const btnSalvar = document.querySelector('#btnSalvar');
const inputNome = document.querySelector('#inputNome');
const inputTelefone = document.querySelector('#inputTelefone');

btnSalvar.addEventListener('click', function() {
    try
    {
        let nome = inputNome.value.trim();
        let telefone = inputTelefone.value.trim();
        ContatosController.adicionarContato(nome, telefone);
    }
    catch(erro) 
    {
        if (erro instanceof ContatoError) {
            alert(erro);
        }
        else {
            alert('Erro inesperado ao adicionar ou atualizar seu contato!');
            console.error(erro);
        }
    }
});

