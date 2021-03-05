import CorreiosError from '../model/CorreiosError.js';
import { buscarEndereco } from '../services/CorreiosService.js';

export default class CorreiosController 
{
    /**
     * Busca as informações do CEP
     * @param {string} cep    CEP a ser buscado nos correios
     * @returns {Promise<Object>}
     */
    static async getEndereco(cep)
    {
        if (isNaN(cep) || cep.length < 8) {
            throw new CorreiosError('CEP inválido!', cep);
        }

        const dadosEndereco = await buscarEndereco(cep);
        if (dadosEndereco.erro) {
            throw new CorreiosError('Informações do CEP não foram encontradas!', cep);
        }

        return dadosEndereco;
    }
}
