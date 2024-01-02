// ! ОБЬСНЕНИЕ PROMISE НА ПРИМЕРЕ

// Функция, возвращающая Promise, представляющий заказ шаурмы
function orderShawarma() {
	return new Promise((resolve, reject) => {
		// Симулируем асинхронный запрос к магазину или ресторану
		setTimeout(() => {
			const shawarmaAvailable = Math.random() < 0.5; // 50% шанс, что шаурма доступна

			if (shawarmaAvailable) {
				resolve("Шаурма есть! Возвращаюсь с нею.");
			} else {
				reject("Извините, шаурма закончилась.");
			}
		}, 2000); // Представим, что это время, необходимое для доставки
	});
}

// Симулируем ситуацию, когда сосед звонит и просит заказать шаурму then
function askNeighborForShawarma() {
	console.log("Сосед: Привет, ты можешь заказать шаурму для меня?");

	orderShawarma()
		.then((message) => {
			console.log(`Ты: ${message}`);
		})
		.catch((error) => {
			console.error(`Ты: ${error}`);
		});
}

//  try/catch

function askNeighborForShawarma2() {
	console.log("Сосед: Привет, ты можешь заказать шаурму для меня?");

	const whatsUp = async () => {
		try {
			console.log("Шаурма в процессе...");
			// симуляция pending
			await new Promise((resolve) => setTimeout(resolve, 10000));
			let message = await orderShawarma();
			console.log("whatsUp ~ message >", message);
		} catch (error) {
			console.log(error);
		}
	};

	whatsUp();
}
askNeighborForShawarma2();
// ------------------------------------------------------------------------------------------

// !  ASYNC FUN ALWAYES RETURN Promise:
// ! PROMISE{<fulfilled> : 'Hello name'}

async function sayName(name: string): Promise<string> {
	return `Hello ${name}`;
}

// !  SYNC FUN ALWAYES RETURN Value:
// ! 'Hello name

function sayMyName(name: string): string {
	return `Hello ${name}`;
}

// ------------------------------------------------------------------------------------------

// ! How to create Promise:

// const promise = new Promise()

// ! Promise exepts one function as an argument

// const promise = new Promise(() => {

// })

// ! This function has 2 arguments

// const promise = new Promise((resolve,reject) => {

// })

const promise = new Promise((res, rej) => {
	let isThere = Math.random() < 0.5;
	if (isThere) {
		res("there is");
	} else {
		rej("there is no");
	}
});

const answer = async () => {
	try {
		let message = await promise;
		console.log("answer ~ message >", message);
	} catch (err) {
		console.log(err);
	}
};
answer();

promise
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	});

const promise1 = new Promise((res, rej) => {
	let isThere = Math.random() < 0.5;
	if (isThere) {
		res("there is");
	} else {
		rej("there is no");
	}
});

const promise2 = new Promise((res, rej) => {
	let isThere = Math.random() < 0.5;
	if (isThere) {
		res("there is");
	} else {
		rej("there is no");
	}
});

const promise3 = new Promise((res, rej) => {
	let isThere = Math.random() < 0.5;
	if (isThere) {
		res("there is");
	} else {
		rej("there is no");
	}
});

async function response() {
	try {
		const res = await Promise.all([promise1, promise2, promise3]);
		console.log(res);
	} catch (error) {
		console.error(error);
	}
}
