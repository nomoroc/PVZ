const dragon = document.querySelector('.Dragon') // используем lowercase
const now = document.querySelector('.now')
const future = document.querySelector('.future')
const clicksscore = document.querySelector('.clicks-score')
const clicksscore2 = document.querySelector('.clicks-score2')

const dragonSrc = {
	one: 'assets/img/Dragons/маленький-красный.png',
	two: 'assets/img/Dragons/средний-красный.png',
	nextTwo: 'assets/img/Dragons/средний-красныйЧБ.png',
	three: 'assets/img/Dragons/красно-белый.png',
	nextThree: 'assets/img/Dragons/красно-белыйЧБ.png',
	four: 'assets/img/Dragons/синий-маленький.png',
	nextFour: 'assets/img/Dragons/синий-маленькийЧБ.png',
	five: 'assets/img/Dragons/фиолетово-синий.png',
	nexFive: 'assets/img/Dragons/фиолетово-синийЧБ.png',
	six: 'assets/img/Dragons/синий-большой.png',
	nextSix: 'assets/img/Dragons/синий-большойЧБ.png'
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
	let fut = dragonSrc.two
	const key = 'clicks'
	let clicks = parseInt(localStorage.getItem(key)) || 0
	clicksscore.innerText = clicks
	clickHandler = function () {
		clicks++

		// Измененный порядок условий (от большего к меньшему)
		let newSrc = dragonSrc.one
		if (clicks >= puproses.six) {
			newSrc = dragonSrc.six
		} else if (clicks >= puproses.four) {
			newSrc = dragonSrc.five
			purpose = puproses.five
			fut = dragonSrc.nextSix
		} else if (clicks >= puproses.three) {
			newSrc = dragonSrc.four
			purpose = puproses.four
			fut = dragonSrc.nextFive
		} else if (clicks >= puproses.two) {
			newSrc = dragonSrc.three
			purpose = puproses.three
			fut = dragonSrc.nextFour
		} else if (clicks >= puproses.one) {
			newSrc = dragonSrc.two
			purpose = puproses.two
			fut = dragonSrc.nextThree
		} else if (clicks < puproses.one) {
			newSrc = dragonSrc.one
			purpose = puproses.one
			fut = dragonSrc.nextTwo
		}

		clicksscore2.innerText = puproses - clicks
		new Image(now).src = newSrc
		new Image(future).src = fut

		localStorage.setItem(key, clicks.toString())
		console.log('Текущее количество кликов:', clicks)
		clicksscore.innerText = clicks
		clicksscore2.innerText = purpose - clicks
	}

	now.addEventListener('click', clickHandler)
}

// Запускаем сразу (убрал setTimeout из последней строки)
setupDragon()
