let currencyElement = document.querySelector(".js-currency")
let plnElement = document.querySelector(".js-pln")
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-result")

let euro = 4.71
let USD = 4.35
let funt = 5.26

let sign
formElement.addEventListener("input", () => {
	let pln = +plnElement.value
	let currency = currencyElement.value

	switch (currency) {
		case "euro":
			result = pln / euro
			break

		case "pound":
			result = pln / funt
			break

		case "usd":
			result = pln / USD
			break
	}

	resultElement.innerText = result.toFixed(2)
})
