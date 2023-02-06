var buttons = document.querySelectorAll("button")
var screen = document.getElementById("screen")

var calcOperators = document.querySelectorAll(".calc-operators")

console.log(calcOperators)

buttons.forEach(button => button.addEventListener("click", function() {
  const getValue = button.value
  // const getOperators = calcOperators.value
  if (getValue !== "CA")  {
    screen.innerHTML += button.value
  } else if (getValue === "*") { 
    multiply();
  } else if (getValue === "/") { 
    divide();
  } else if (getValue === "+") { 
    add();
  } else if (getValue === "-") { 
    subtract();
  } else if (getValue === "=") { 
    equals();
  } else {
    clearScreen();
  }
}))

function clearScreen() {
  screen.textContent = "";
}

function multiply() {
  var buttonMult = this.value
}

function divide() {

}

function add() {

}

function subtract() {

}

function equals() {

}












// buttons.forEach(button => button.addEventListener("click", function() {
//   const getValue = button.value
//   // const getOperators = calcOperators.value
//   if (getValue !== "CA" || getValue === "/" && "=" && "*" && "-" && "+")  {
//     screen.innerHTML += button.value
//   } else  {
//     clearScreen();
//   }
// }))


// btnReset.addEventListener("click", function() {
//   display.innerHTML = "";
// })

// var numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0]

// var btnPluss = document.getElementById("btn-pluss")
// var btnMinus = document.getElementById("btn-minus")
// var btnMultiplier = document.getElementById("btn-multiplier")
// var btnDivisor = document.getElementById("btn-divisor")
// var btnEquals = document.getElementById("btn-equals")

// var num1 = document.getElementById("num-1")
// var num2 = document.getElementById("num-2")
// var num3 = document.getElementById("num-3")
// var num4 = document.getElementById("num-4")
// var num5 = document.getElementById("num-5")
// var num6 = document.getElementById("num-6")
// var num7 = document.getElementById("num-7")
// var num8 = document.getElementById("num-8")
// var num9 = document.getElementById("num-9")
// var num0 = document.getElementById("num-0")
// var btnReset = document.getElementById("clear-all")


// RESET THE SCREEN
// btnReset.addEventListener("click", function() {
//   display.innerHTML = "";
// })
//DISPLAY PRESSED VALUE
// num1.addEventListener("click", function() {
//   outcome.innerHTML += num1.value;
// });
// num2.addEventListener("click", function() {
//   outcome.innerHTML += num2.value;
// });
// num3.addEventListener("click", function() {
//   outcome.innerHTML += num3.value;
// });
// num4.addEventListener("click", function() {
//   outcome.innerHTML += num4.value;
// });
// num5.addEventListener("click", function() {
//   outcome.innerHTML += num5.value;
// });
// num6.addEventListener("click", function() {
//   outcome.innerHTML += num6.value;
// });
// num7.addEventListener("click", function() {
//   outcome.innerHTML += num7.value;
// });
// num8.addEventListener("click", function() {
//   outcome.innerHTML += num8.value;
// });
// num9.addEventListener("click", function() {
//   outcome.innerHTML += num9.value;
// });
// num0.addEventListener("click", function() {
//   outcome.innerHTML += num0.value;
// });
