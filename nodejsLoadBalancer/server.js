// https://ichi.pro/es/hacer-un-balanceador-de-carga-basico-de-node-js-en-windows-18649015729162#:~:text=Hacer%20un%20balanceador%20de%20carga%20b%C3%A1sico%20de%20Node.js,de%20NginX%20...%205%20Cerrando%20todo%20comenz%C3%B3%20

// Invoke-WebRequest -URI http://localhost:3000/

// cd "C:\Program Files\nginx-1.24.0"
// nginx.exe -s quit

// pm2 start server.js --name server1 -- 3000
// pm2 list
// pm2 stop all

const express = require('express');

const app = express();
const port = process.argv[2] || process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello from port ${port}`);
    console.log(`Hello from port ${port}`);
});

app.listen(port, () => {
    console.log(`server is up on port http://localhost:${port}`);
})