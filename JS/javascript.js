{
	const calculateResult = (PLN, currency) => {
		const EUR = 4.71;
		const USD = 4.35;
		const GBP = 5.26;
		switch (currency) {
			case "EUR":
				return (result = PLN / EUR);

			case "GBP":
				return (result = PLN / GBP);

			case "USD":
				return (result = PLN / USD);
		}
	};

	const assignSign = currency => {
		let sign;
		switch (currency) {
			case "EUR":
				return (sign = "€");

			case "GBP":
				return (sign = "£");

			case "USD":
				return (sign = "$");
		};
	};

	const resultTextUpdate = (sign, result) => {
		const resultElement = document.querySelector(".js-result");
		resultElement.innerText = `${result.toFixed(2)} ${sign}`;
	};

	const onFormInput = () => {
		const currencyElement = document.querySelector(".js-currency");
		const PLNElement = document.querySelector(".js-pln");

		const PLN = +PLNElement.value;
		const result = calculateResult(PLN, currencyElement.value);
		const sign = assignSign(currencyElement.value);
		resultTextUpdate(sign, result);
	};

	const init = () => {
		const formElement = document.querySelector(".js-form");
		formElement.addEventListener("input", onFormInput);
	};

	init();
};
