const number = document.querySelector(".number")

const text = document.querySelector(".advice-text")

const dice = document.querySelector(".dice")

document.addEventListener("DOMContentLoaded", randomAdvice)

//USE OF FETCH API

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


//USING ASYNC AND AWAIT 

/*async function randomAdvice2() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice")
    if (!response.ok) {
      throw new Error("An error has occurred")
    }
    const data2 = await response.json()
    const { id, advice } = data2.slip
    number.textContent = id
    text.textContent = advice
  } catch (e) {
    console.log(e.message)
  }
  
}

dice.addEventListener("click", randomAdvice2)*/

//Note: you can switch between using.then and using async and await by commenting out.