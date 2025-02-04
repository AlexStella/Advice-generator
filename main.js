const number = document.querySelector(".number")

const text = document.querySelector(".advice-text")

const dice = document.querySelector(".dice")

document.addEventListener("DOMContentLoaded", randomAdvice)


function randomAdvice() {
  fetch("https://api.adviceslip.com/advice").then(function (response) {
    
    if (!response.ok) {
      throw new Error("Text cannot be displayed")
    }
    
    return response.json()
  }).then(function (data) {
    const {id, advice} = data.slip
    number.textContent = id
    text.textContent = advice
  }).catch(function (error) {
    console.log(error.message)
  })
}

dice.addEventListener("click", randomAdvice)