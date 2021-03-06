const http = require('http');
const url = require('url');
const fs = require('fs');

const app = http.createServer((request, response) => {
    
    const urls_validas = [
        '/api/produtos',
        '/api/pedidos',
        '/api/status-pedido'
    ];

    let urlAcessada = new url.parse(request.url).pathname;
    let metodo = request.method; // GET, POST, PUT, DELETE
    const responseConfig = {
        'Content-type' : 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
    }

    if (urls_validas.includes(urlAcessada))
    {
        // url válida para retorno de dados
        response.writeHead(200, responseConfig);

        let listaDeProdutosJson = fs.readFileSync('./db/produtos.json', 'utf-8');
        let listaDePedidosJson = fs.readFileSync('./db/pedidos.json', 'utf-8');
        const listaDePedidos = JSON.parse(listaDePedidosJson);
        const listaDeProdutos = JSON.parse(listaDeProdutosJson);
        let respostaServidor = null;

        if (urlAcessada === '/api/produtos') {
            respostaServidor = listaDeProdutos;
        }

        else if (urlAcessada === '/api/pedidos' && metodo === 'GET') {
            respostaServidor = listaDePedidos;
        }

        else if (urlAcessada === '/api/pedidos' && metodo === 'POST') {
            let dadosPedidoJson = url.parse(request.url, true).query.pedido;
            let pedido = JSON.parse(dadosPedidoJson);
            listaDePedidos.push(pedido);
            respostaServidor = { status: 1, message: 'Pedido salvo com sucesso!' };
        }

        fs.writeFileSync('./db/pedidos.json', JSON.stringify(listaDePedidos), 'utf-8');
        response.end(JSON.stringify(respostaServidor));
    }
    else
    {
        response.writeHead(400, responseConfig); // Bad Request
        const data = { status: 0, message: 'URL inválida!' };
        response.end(JSON.stringify(data));
    }
});

app.listen(8008);
console.log('Servidor da api está rodando na url http://localhost:8008/');