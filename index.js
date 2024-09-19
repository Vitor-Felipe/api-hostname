const express = require('express');
const os = require('os');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({
        message: 'Endereço IP do cliente capturado!',
        ip: clientIp,
    });
});


// Inicializa o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
