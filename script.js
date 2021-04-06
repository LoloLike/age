document.querySelector('button').onclick = function(){
	let userAnswer = prompt("Вам больше 18?")
	if (userAnswer > 17) {
		alert('Вам есть 18, вход на сайт одобрен')
	} else {
		alert('Вам нельзя заходить на этот сайт до 18 лет.')
	} 
}