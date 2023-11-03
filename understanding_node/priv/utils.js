import { createHash } from "node:crypto";

function getVanityName(name) {
  /*
    Usando sha256 para obtener un vanity name
    Esto está basado en cómo funcionan los "vanity domains" de onion
    Puedes ver aquí la idea: 
  */
    return new Promise((resolve, reject) => {
			const hash = createHash("sha256");

			function generateVanityName() {
				const randomValue = Math.random().toString();
				const vanityName = hash.copy().update(randomValue).digest("base64");
				if (vanityName.startsWith(name)) {
					resolve(vanityName);
				} else {
					setImmediate(generateVanityName); // Continuar generando hasta que se cumpla el prefijo
				}
			}

			generateVanityName();
		});
}

export { getVanityName };
