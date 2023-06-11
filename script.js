// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")
const information = document.querySelector("p:nth-of-type(1)")
const informationError = document.querySelector("p:nth-of-type(2)")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", validate)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", keydown)

// funções
function handleTryClick() {
  information.classList.remove("hide")
  informationError.classList.add("hide")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} vezes`
  }

  inputNumber.value = " "
  xAttempts++
}

function validate(event) {
  event.preventDefault() // não faca o padrão

  if (Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
    handleTryClick()
  } else {
    informationError.classList.remove("hide")
    information.classList.add("hide")
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function keydown(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
