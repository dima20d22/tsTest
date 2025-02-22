let number: number = 21
console.log(number)

const input = document.querySelector('.inputAufgabe') as HTMLInputElement | null
const button = document.querySelector(
	'.ButtonAufgabe'
) as HTMLButtonElement | null
const list = document.querySelector('.listAufgabe') as HTMLElement | null

if (input && button) {
	button?.addEventListener('click', function (e) {
		e.preventDefault()
		const inputValue = input.value
		console.log(inputValue)
	})
} else {
	console.log('.inputAufgabenicht gefunden!')
}

function render() {
	if (list) {
		list.innerHTML = ''
	} else {
		console.log('.listAufgabe не найден!')
	}
}
