import http from 'http';
import url from 'url';
import fs from 'fs';

const app = http.createServer((request, response) => {
    const urls_validas = [
        '/api/contatos'
    ];

    let urlAcessada = url.parse(request.url).pathname;
    let metodo = request.method; // GET, POST, PUT, DELETE...
    let query = url.parse(request.url, true).query;
    const responseConfig = {
        'Content-type' : 'application/json; charset=utf8',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'HEAD, GET, PUT, PATCH, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : '*'
    };

    // Retorna um status 200 pra indicar que o servidor aceita requisições
    // DELETE, PUT, HEAD e o escambal (pre-flight)
    if (metodo === 'OPTIONS') {
        response.writeHead(200, responseConfig);
        response.end();
    }

    if (urls_validas.includes(urlAcessada))
    {
        response.writeHead(200, responseConfig);
        let listaContatosJson = fs.readFileSync('./db/contatos.json', 'utf-8');
        const listaContatos = JSON.parse(listaContatosJson);
        let resposta = {};

        /* Retorna a lista de contatos salva no servidor */
        if (metodo === 'GET') 
        {
            // retorna a lista de contatos
            resposta = listaContatos;
        }

        /* Salva um contato */
        else if (metodo === 'POST' && query.contato)
        {
            // api/contatos?contato=[OBJETO JSON]
            let jsonContato = query.contato;
            const contato = JSON.parse(jsonContato);

            let posicaoContato = listaContatos.findIndex(c => c.nome.toUpperCase() === contato.nome.toUpperCase());
            if (posicaoContato >= 0) {
                listaContatos[posicaoContato] = contato;
            }
            else {
                listaContatos.push(contato);
            }

            resposta = { status: 1, mensagem: 'Contato salvo com sucesso!' };
        }

        /* Exclui um contato */
        else if (metodo === 'DELETE' && query.posicao)
        {
            // api/contatos?posicao=[INDICE DO ITEM NO ARRAY]
        }

        listaContatosJson = JSON.stringify(listaContatos);
        fs.writeFileSync('./db/contatos.json', listaContatosJson, 'utf-8');
        response.end(JSON.stringify(resposta));
    }
    else 
    {
        response.writeHead(400, responseConfig);
        response.end(JSON.stringify({ status: 0, mensagem: 'Bad Request' }))
    }
});

app.listen(8008);
console.log('Servidor da api MINHA AGENDA está rodando na url http://localhost:8008/');