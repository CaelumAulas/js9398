import ValidacaoError from '../model/ValidacaoError.js';

export default class ValidacaoController
{
    /**
     * Valida os campos passados via parâmetro
     * @param {Array<Element>} listaDeCamposObrigatorios    Lista de Campos que devem ser validados na aplicação
     * @returns {void}
     */
    static validarCampos(listaDeCamposObrigatorios)
    {
        const validadorEmail = /^[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[a-zA-Z0-9_+-]+@[a-zA-Z0-9_+-]+[a-zA-Z0-9._+-]*[.]{1,1}[a-zA-Z]{2,}$/;

        for (let campo of listaDeCamposObrigatorios)
        {
            if (
                campo.value.trim() === '' ||
                campo.type === 'number' && isNaN(campo.value) ||
                campo.type === 'email' && !validadorEmail.test(campo.value)
            ) {
                throw new ValidacaoError(campo.dataset.mensagem, campo);
            }
        }
    }
}