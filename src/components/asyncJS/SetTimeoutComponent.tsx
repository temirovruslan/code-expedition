import { useState, useEffect } from "react";

const SetTimeoutComponent = () => {
	const [isShow, setIsShow] = useState(false);

	console.log(isShow);

	useEffect(() => {
		// setTimeout -  которая запускает переданную ей функцию через определенное количество времени. Переменная timer в вашем коде просто содержит идентификатор отложенной задачи. Вы не вызываете timer напрямую, так как setTimeout самостоятельно запускает функцию после указанной задержки.
		let timer = setTimeout(() => {
			setIsShow(true);
		}, 5000);

		// Cleanup function
		return () => clearTimeout(timer);
	}, []); // Empty dependency array to run effect only once on mount

	return <div></div>;
};

export default SetTimeoutComponent;
