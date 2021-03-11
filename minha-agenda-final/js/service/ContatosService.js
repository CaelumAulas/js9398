const URL_BASE = 'http://localhost:8008/api/contatos';

export default class ContatosService
{
    static async salvarContato(contatoInfo)
    {
        const parametros = new URLSearchParams();
        parametros.append('contato', JSON.stringify(contatoInfo));

        let urlPost = URL_BASE + '?' + parametros;

        const resposta = await fetch(urlPost, { method: 'POST' });
        const status = await resposta.json();
        return status;
    }

    static async getContatos()
    {
        const resposta = await fetch(URL_BASE);
        const contatos = await resposta.json();
        return contatos;
    }

    static async removerContato(posicao)
    {
        const parametros = new URLSearchParams();
        parametros.append('posicao', posicao);

        let urlDelete = URL_BASE + '?' + parametros;

        const resposta = await fetch(urlDelete, { method: 'DELETE' });
        const status = await resposta.json();
        return status;
    }
}