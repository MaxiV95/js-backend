// Esto es un servidor HTTP que escucha en el puerto 3000 básico con Node
// y que devuelve un mensaje de texto plano

import http from "node:http";
import quotes from "../priv/quotes.js";
import { getVanityName } from "../priv/utils.js";

Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
};

// Creamos el servidor
const server = http.createServer(async (req, res) => {
	const difficulty = req.url.split("/").pop();

	if (req.url === "/favicon.ico") {
		res.writeHead(204).end(); // Ignora solicitudes de favicon.ico
		console.log(`Respuesta favicon.ico ignorada por proceso ${process.pid}`);
	} else {
		console.log(
			`Petición recibida por proceso ${process.pid} URI: ${difficulty}`
		);

		res.writeHead(200, {
			"Content-Type": "application/json",
			charset: "utf-8",
		});

		res.end(
			JSON.stringify({
				...quotes.random(),
				process: process.pid,
				vanityName: getVanityName(difficulty),
			})
		);
	}
});

// Ponemos el servidor a escuchar en el puerto 3000

server.listen(3000, () => {
	console.log("Servidor escuchando en http://localhost:3000");
});
