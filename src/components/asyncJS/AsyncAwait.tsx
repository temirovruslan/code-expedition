// ! Await works only inside of async functions

function resolveHello() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello");
		}, 2000);
	});
}

function resolveWorld() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("World");
		}, 2000);
	});
}

// ! sequntial  concurrent execution

// sequntial execution (bad example)

async function sequntialStart() {
	const hello = await resolveHello();
	console.log(hello); // logs after 2 sec

	const world = await resolveWorld();
	console.log(world); // logs after 2 + 1 = 3 sec
}

// concurrent execution   (best practice)

async function concurrentStart() {
	const hello = resolveHello();
	const world = resolveWorld();

	console.log(await hello); // logs after 2 sec
	console.log(await world); // logs after 2 sec
}

// ! Promise.all

const promises = [resolveHello(), resolveWorld()];

function parallel() {
	Promise.all(promises);
    console.log('Finally edn=')
}
