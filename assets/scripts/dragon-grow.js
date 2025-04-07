const dragon = document.querySelector('.Dragon') // используем lowercase
const now = document.querySelector('.now')
const clicksscore = document.querySelector('.clicks-score')
const clicksscore2 = document.querySelector('.clicks-score2')

const dragonSrc = {
	one: 'assets/img/Dragons/маленький-красный.png',
	two: 'assets/img/Dragons/средний-красный.png',
	three: 'assets/img/Dragons/красно-белый.png',
	four: 'assets/img/Dragons/синий-маленький.png',
	five: 'assets/img/Dragons/фиолетово-синий.png',
	six: 'assets/img/Dragons/синий-большой.png',
}

//кликов для повышения
const puproses = {
	one: 50,
	two: 150,
	three: 350,
	four: 700,
	five: 1000
}

let clickHandler

function setupDragon() {
	let purpose = puproses.one
	const key = 'clicks'
	let clicks = parseInt(localStorage.getItem(key)) || 0
	clicksscore.innerText = clicks
	clickHandler = function () {
		clicks++

		// Измененный порядок условий (от большего к меньшему)
		let newSrc = dragonSrc.one
		if (clicks >= 1000) {
			newSrc = dragonSrc.six
		} else if (clicks >= 700) {
			newSrc = dragonSrc.five
			purpose = puproses.five
		} else if (clicks >= 350) {
			newSrc = dragonSrc.four
			purpose = puproses.four
		} else if (clicks >= 150) {
			newSrc = dragonSrc.three
			purpose = puproses.three
		} else if (clicks >= 50) {
			newSrc = dragonSrc.two
			purpose = puproses.two
		} else if (clicks < 50) {
			newSrc = dragonSrc.one
			purpose = puproses.one
		}

		clicksscore2.innerText = puproses - clicks
		const img = new Image()
		img.src = newSrc

		localStorage.setItem(key, clicks.toString())
		console.log('Текущее количество кликов:', clicks)
		clicksscore.innerText = clicks
		clicksscore2.innerText = purpose - clicks
	}

	now.addEventListener('click', clickHandler)
}

// Запускаем сразу (убрал setTimeout из последней строки)
setupDragon()
