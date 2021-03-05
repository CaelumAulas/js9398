import CorreiosController from '../controller/CorreiosController.js';
import CorreiosError from '../model/CorreiosError.js';
import ValidacaoController from '../controller/ValidacaoController.js';
import ValidacaoError from '../model/ValidacaoError.js';
import * as PedidoController from '../controller/PedidoController.js';
import PedidoError from '../model/PedidoError.js';

// Guardas os elementos da interface
const btnEnviarPedido = document.querySelector('#btnEnviarPedido');
const todosOsCampos = document.querySelectorAll('#formPedido .form-control');
const camposObrigatorios = Array.from(todosOsCampos).filter(campo => campo.required === true);
const formularioPedido = {};

// montamos um objeto que guarda todos os campos em propriedades
// que terão o mesmo nome do ID do campo do formulário
todosOsCampos.forEach(campo => {
    formularioPedido[campo.id] = campo;
});

/**
 * Quando o usuário digitar algo no campo CEP, buscamos as informações
 * do cep digitado no viacep.com.br
 */
formularioPedido.input_cep.addEventListener('change', async () => {
    try 
    {
        let cepDigitado = formularioPedido.input_cep.value;
        const infoEndereco = await CorreiosController.getEndereco(cepDigitado);

        formularioPedido.input_endereco.value = infoEndereco.logradouro;
        formularioPedido.input_bairro.value = infoEndereco.bairro;
        formularioPedido.input_cidade.value = infoEndereco.localidade;
        formularioPedido.seletor_estado.value = infoEndereco.uf;
    }
    catch(erro)
    {
        if (erro instanceof CorreiosError) {
            alert(erro);
        }
        else {
            alert('Um erro inesperado ocorreu ao buscar informações do CEP digitado!');
            console.error(erro);
        }
    }
    finally
    {
        Array.from(todosOsCampos).filter(campo => campo.disabled).forEach(campo => campo.disabled = false);
    }
});

/**
 * Quando o usuário clicar no botão de envio do pedido, pegamos as informações e validamos
 * antes de realizar o envio para o back-end da aplicação
 */
btnEnviarPedido.addEventListener('click', () => {
    try
    {
        ValidacaoController.validarCampos(camposObrigatorios);
        PedidoController.enviarPedido(formularioPedido);
    }
    catch(erro)
    {
        if (erro instanceof ValidacaoError || erro instanceof PedidoError) {
            alert(erro);
            erro.campo?.focus();
        }
        else {
            alert('Um erro inesperado ocorreu ao enviar informações do seu pedido. Tente novamente!');
            console.error(erro);
        }
    }
});