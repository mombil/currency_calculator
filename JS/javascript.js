{
	const calculateResult = (pln, currency) => {
		const euro = 4.71
		const USD = 4.35
		const funt = 5.26
		switch (currency) {
			case "euro":
				return (result = pln / euro)

			case "pound":
				return (result = pln / funt)

			case "usd":
				return (result = pln / USD)
		}
	}

	const assignSign = currency => {
		let sign
		switch (currency) {
			case "euro":
				return (sign = "€")

			case "pound":
				return (sign = "£")

			case "usd":
				return (sign = "$")
		}
	}

	
	const reslutTextUpdate = (sign, result) =>{
		const resultElement = document.querySelector(".js-result")
		resultElement.innerText = `${result.toFixed(2)} ${sign}`
	}

	const onFormInput = () => {
		
		const currencyElement = document.querySelector(".js-currency")
		const plnElement = document.querySelector(".js-pln")

		const pln = +plnElement.value
		const currency = currencyElement.value
		const result = calculateResult(pln, currency)
		const sign = assignSign(currency)
		reslutTextUpdate(sign, result)
		}


	const init = () => {
		const formElement = document.querySelector(".js-form")
		formElement.addEventListener("input", onFormInput)
	}

	init()
}
