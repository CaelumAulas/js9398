export default class ProdutosService
{
    static async getProdutos()
    {
        const resposta = await fetch('http://localhost:8008/api/produtos');
        const listaProdutos = await resposta.json();
        return listaProdutos;
    }
}