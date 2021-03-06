import http from 'http';

// criamos uma lista de objetos contendo vários dados de clientes
const clientes = [
    { nome: 'Paulo Martins' , idade: 26 , sexo: 'M' , renda: 3500 },
    { nome: 'Maria da Silva' , idade: 32 , sexo: 'F' , renda: 4800 },
    { nome: 'José Pereira' , idade: 52 , sexo: 'M' , renda: 1800 },
    { nome: 'Carlos Bragança' , idade: 28 , sexo: 'M' , renda: 2880 },
    { nome: 'Fernanda Vaz' , idade: 21 , sexo: 'F' , renda: 1600 },
    { nome: 'Josy Vasconcelos' , idade: 30 , sexo: 'F' , renda: 3200 }
];

function gerarTabela()
{
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Nome do Cliente</th>
                    <th>Idade</th>
                    <th>Sexo</th>
                    <th>Renda</th>
                </tr>
            </thead>
            <tbody>
    `;

    clientes.forEach(cliente => {
        html += `
            <tr>
                <td>${cliente.nome}</td>
                <td>${cliente.idade}</td>
                <td>${cliente.sexo}</td>
                <td>${cliente.renda}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    return html;
}


// Criamos um servidor HTTP 
const app = http.createServer(function(requisicao, resposta) {

    resposta.writeHead(200, { 
        'Content-type' : 'text/html; charset=utf-8'
    });

    if (requisicao.url === '/') {
        // retornar a página de boas vindas
        resposta.end(`
            <h1>Bem-vindo(a)</h1>
            <p>
                Para ver a lista de clientes, <a href="/clientes">clique aqui.</a>
            </p>
        `);
    }

    else if (requisicao.url === '/clientes') {
        // retornar a tabela de clientes
        resposta.end(`
            <h1>Lista de Clientes</h1>
            <p>Veja na lista abaixo os dados dos seus clientes:</p>
            ${gerarTabela()}
        `)
    }

    else {
        // retornar uma página 404
        resposta.end(`
            <h1>Erro 404 | Página não encontrada</h1>
            <p>A url que você está acessando é inválida!!!</p>
        `);
    }

});

app.listen(8008);
console.log('Servidor rodando na url: http://localhost:8008/');