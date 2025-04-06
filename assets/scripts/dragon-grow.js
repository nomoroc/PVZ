const dragon = document.querySelector('.Dragon') // используем lowercase

const dragonSrc = {
	one: '/PVZ/assets/img/Dragons/маленький-красный.png',
	two: '/PVZ/assets/img/Dragons/синий-маленький.png',
	three: '/PVZ/assets/img/Dragons/средний-красный.png',
	four: '/PVZ/assets/img/Dragons/красно-белый.png',
	five: '/PVZ/assets/img/Dragons/фиолетово-синий.png',
	six: '/PVZ/assets/img/Dragons/синий-большой.png',
}

let clickHandler

function setupDragon() {
	const key = 'clicks'
	let clicks = parseInt(localStorage.getItem(key)) || 0
	clicks++
	clickHandler = function () {

		// Измененный порядок условий (от большего к меньшему)
		if (clicks >= 200) {
			dragon.src = dragonSrc.six
		} else if (clicks >= 80) {
			dragon.src = dragonSrc.five
		} else if (clicks >= 50) {
			dragon.src = dragonSrc.four
		} else if (clicks >= 25) {
			dragon.src = dragonSrc.three
		} else if (clicks >= 10) {
			dragon.src = dragonSrc.two
		} else {
			dragon.src = dragonSrc.one
		}

		localStorage.setItem(key, clicks.toString())
		console.log('Текущее количество кликов:', clicks)

		dragon.removeEventListener('click', clickHandler)

		setTimeout(() => {
			dragon.addEventListener('click', clickHandler)
			console.log('Обработчик восстановлен')
		}, 3000)
	}

	dragon.addEventListener('click', clickHandler)
}

// Запускаем сразу (убрал setTimeout из последней строки)
setupDragon()
