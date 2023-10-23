// run `node index.js` in the terminal
const http = require("http");
const math = require("./modules/math");

// Examples using a local module
console.log("Hello World!");
console.log(math.add(5, 5));
console.log(math.substract(5, 5));
console.log(math.demoAsync());

const runDemoAsync = async () => {
	const resuelto = await math.demoAsync();
	console.log(resuelto);
};
runDemoAsync();

console.log(math.combineArrayWithASymbol([1, 2, 3], "x"));

// Create a new server using a core module
// from Node.js
const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((request, response) => {
	response.statusCode = 200; // Cambiamos el estado a 200 para indicar éxito.
	response.setHeader("Content-Type", "text/html"); // Cambiamos el tipo de contenido a HTML.

	const htmlResponse = `
			<!DOCTYPE html>
			<html>
			<head>
					<title>Hello World</title>
			</head>
			<body>
					<h1>Hello world</h1>
			</body>
			</html>
	`;

	response.end(htmlResponse);
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
