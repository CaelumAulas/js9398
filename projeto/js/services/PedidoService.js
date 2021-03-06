export default class PedidoService
{
    static async salvarPedido(pedido)
    {
        const parametros = new URLSearchParams();
        parametros.append('pedido', JSON.stringify(pedido));

        let url = 'http://localhost:8008/api/pedidos?' + parametros;
        const resposta = await fetch(url, { method: 'POST' });
        const statusServidor = await resposta.json();

        return statusServidor;
    }
}