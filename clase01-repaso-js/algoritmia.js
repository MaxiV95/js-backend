/*
 * Tenemos una función que sirve para determinar si una palabra es un palindromo sin utilizar funciónes predefinidas de javascript
 * Se les ocurre como mejorarla?
 */

const word = "reconocer";

function isPalindrome(word) {
	let reversedWord = "";

	for (let i = 0; i < word.length; i++) {
		reversedWord += word[word.length - i - 1];
	}

	return reversedWord === word;
}

console.log(isPalindrome(word));

/*
 * Tenemos un array de estudiantes con su nombre, edad y numero de pasaporte. También tenemos una función que nos devuelve la edad de
 * un estudiante a partir de su numero de pasaporte.
 * Como podemos mejorar nuestra función? Total libertad para cambiar lo que quieran
 */

const students = [
	{
		name: "Maxi",
		passportId: 1,
		age: 29,
	},
	{
		name: "Carla",
		passportId: 2,
		age: 25,
	},
];

function getStudentAge(passportId) {
	for (let i = 0; i < students.length; i++) {
		if (students[i].passportId === passportId) {
			return students[i].age;
		}
	}
}

console.log(getStudentAge(1));
