let s_e_btn = document.getElementById('easy')
let s_m_btn = document.getElementById('medium')
let s_h_btn = document.getElementById('hard')
let s_s_btn = document.getElementById('start-btn')
let easy_p = document.getElementById('e')
let start_p = document.getElementById('s')
let Submit_in = document.getElementById('s')
choose_l = 1

function easy(){
  choose_l = 1
  s_e_btn.style.textDecoration = "line-through"
  s_e_btn.style.textDecorationThickness = "3px"
  s_h_btn.style.textDecoration = "none"
  s_m_btn.style.textDecoration = "none"
  console.log(choose_l)
};
function medium(){
 choose_l = 2
  s_m_btn.style.textDecoration = "line-through"
  s_m_btn.style.textDecorationThickness = "3px"

  s_e_btn.style.textDecoration = "none"
  s_h_btn.style.textDecoration = "none"

  console.log(choose_l)

};
 function hard(){
  choose_l = 3
  s_e_btn.style.textDecoration = "none"
  s_m_btn.style.textDecoration = "none"
  s_h_btn.style.textDecorationThickness = "3px"

  s_h_btn.style.textDecoration = "line-through"
  console.log(choose_l)

}
let score_n = 20  
function start() {

  if (choose_l == 1) {
    easy_p.style.display = "block"
    start_p.style.display = "none"
    score_n = 20
    score.innerHTML = score_n
  }
  else{
    if (choose_l == 2) {
      easy_p.style.display = "block"
      start_p.style.display = "none"
      score_n = 15
      score.innerHTML = score_n
    }
    else{
      if (choose_l == 3) {
        easy_p.style.display = "block"
        start_p.style.display = "none"
        score_n = 5
        score.innerHTML = score_n
      }
    }
  }
}

// page
var randomNumber = Math.floor(Math.random() * 20) + 1;
// hack mode
console.log("it is the number "+randomNumber)
var input_in = document.getElementById('u-num-in')

var guess_near = document.getElementById('guess_near')
var Submit_e = document.getElementById('submit')
var score = document.getElementById('score')
var body = document.getElementById('body')
var next = document.getElementById('next')
var num_value = document.getElementById('r-value')
var title = document.getElementById('title')
var skip = document.getElementById('skip')
var finish = document.getElementById('finish')

 Submit_e.onclick =   function (){
  if (score_n > 0) {
    if (input_in.value == randomNumber) {
      guess_near.innerHTML="Great Guess"
      body.style.backgroundColor = "green"
      Submit_e.style.display = "none"
      next.style.display = "block"
      num_value.innerHTML = randomNumber
      num_value.style.fontSize = "70px"
      num_value.style.marginTop = "20px"
     
     } 
     if (input_in.value < randomNumber) {
       guess_near.innerHTML = "your Guess is low"
       score.innerHTML = score_n-1
       score_n = score_n-1
     } 
     if (input_in.value > randomNumber) {
       guess_near.innerHTML = "your Guess is high"
       score.innerHTML = score_n-1
       score_n = score_n-1
     }
   next.onclick =   function (){
     randomNumber = Math.floor(Math.random() * 20) + 1;
     console.log("it is the number "+randomNumber)
     body.style.backgroundColor = "#222831"
     Submit_e.style.display = "block"
     num_value.innerHTML = "?"
     num_value.style.fontSize = "100px"
     next.style.display = "none"
     num_value.style.marginTop = "0px"
    }
  } else{
    guess_near.innerHTML="you are finshed "
  }
}
  skip.onclick = function () {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log("it is the number "+randomNumber)
    body.style.backgroundColor = "#222831"
    Submit_e.style.display = "block"
    num_value.innerHTML = "?"
    next.style.display = "none"
    num_value.style.marginTop = "0px"
    guess_near.innerHTML="Guess now!, you skiped number"
    guess_near.style.fontSize= "25px"

  }
  finish.onclick = function () {
    easy_p.style.display = "none"
    start_p.style.display = "block"
  }
,