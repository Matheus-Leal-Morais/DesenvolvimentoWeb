const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    
    // Endpoint para obter os dados do arquivo encomendas.json
    if (pathname === '/encomendas') {
        fs.readFile('./encomendas.json', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Erro ao ler o arquivo de encomendas.' }));
                return;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Endpoint não encontrado.' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
