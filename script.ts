let number: number = 21
console.log(number)

const input = document.querySelector(
	'.inputAufgabe'
) as HTMLTextAreaElement | null
const button = document.querySelector(
	'.ButtonAufgabe'
) as HTMLButtonElement | null
const list = document.querySelector('.listAufgabe') as HTMLElement | null

const task: string[] = []

if (input && button && list) {
	button.addEventListener('click', function (e) {
		e.preventDefault()
		const inputValue = input.value.trim()

		if (inputValue == '') return

		task.push(inputValue)
		render()
		input.value = ''
	})
} else {
	console.log('something went wrong!')
}

function render() {
	if (!list) return
	list.innerHTML = ''

	task.forEach((task, index) => {
		const li = document.createElement('li')
		li.classList.add('elementsAufgabe')
		li.textContent = task

		const deleteButton = document.createElement('button')
		deleteButton.textContent = 'delete Aufgabe'
		deleteButton.classList.add('deleteButtonAufgabe')
		deleteButton.addEventListener('click', () => {
			deleteTask(index)
		})

		li.appendChild(deleteButton)
		list.appendChild(li)
	})

	function deleteTask(index: number) {
		task.splice(index, 1)
		render()
	}
}

console.log('dsa')
