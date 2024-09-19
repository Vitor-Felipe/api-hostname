const express = require('express');
const os = require('os');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// Rota para capturar hostname do cliente
app.get('/', (req, res) => {
    const clientHostname = req.hostname; // Obtém o hostname do cliente

    res.json({
        message: 'Hostname capturado!',
        hostname: clientHostname,
        server: os.hostname() // Mostra também o hostname do servidor, apenas para comparação
    });
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
