function fonte(e){
	var elemento = $(".acessibilidade")
	var fonte = elemento.css('font-size')
	if (e == 'a') {
		elemento.css("fontSize", parseInt(fonte) + 1)
	} else if('d'){
		elemento.css("fontSize", parseInt(fonte) - 1)
	}
}

(function (){
  var btNav = document.querySelector("#nav-menu-bt")
  var navLink = document.querySelector(".nav-ul")
  function MeNu_SeM_JaYqUeRiSoM() {
    navLink.classList.toggle("hide-ul")
  }
  btNav.onclick = MeNu_SeM_JaYqUeRiSoM
})();

window.onload = function() {
  var elementBody = document.querySelector('body')
  var elementBtnIncreaseFont = document.getElementById('aumentar-font')
  var elementBtnDecreaseFont = document.getElementById('diminuir-font')
  var fontSize = 100
  var increaseDecrease = 10

  elementBtnIncreaseFont.addEventListener('click', function(event) {
      fontSize = fontSize + increaseDecrease
      elementBody.style.fontSize = fontSize + '%'
  })

  elementBtnDecreaseFont.addEventListener('click', function(event) {
      fontSize = fontSize - increaseDecrease
      elementBody.style.fontSize = fontSize + '%'
  })
}