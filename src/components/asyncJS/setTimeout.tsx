//** */ ПРИМЕР СИХРОН И АСИНХ  **//

// СИХРОН
function greetName(name: string): string {
	return `Hello ${name}`;
}

function highOrderFunction(
	callback: (name: string) => string,
	name: string
): string {
	return callback(name);
}
highOrderFunction(greetName, "Ruslan");

// АСИНХ
function greetNameAsync(name: string): string {
	return `Hello ${name}`;
}

setTimeout(greetNameAsync, 2000, "Ruslan");
