let calc = document.getElementById('calculator')
let display = document.getElementById('display')
let num1 = num2 = operator = ''
let stopThirdNumber = false

calc.addEventListener('click', function(e){
  if (e.target.id !== 'display') {
    let btnValue = e.target.innerHTML

    display.innerHTML += btnValue

    if (btnValue === 'C') {
      num1 = ''
      num2 = ''
      operator = ''
      display.innerHTML = ''
    } else if(btnValue === '+') {
      operator = '+'
    } else if(btnValue === '-') {
      operator = '-'
    } else if(btnValue === '÷') {
      operator = '/'
    } else if(btnValue === 'x') {
      operator = 'x'
    } else if(btnValue === '=') {
      let result = null

      if (operator === '+') {
        result = eval(num1) + eval(num2)


      } else if(operator === '-') {
        result = Number(num1) - Number(num2)

      } else if(operator === '/') {
        result = Number(num1) / Number(num2)

      } else if(operator === 'x') {
        result = Number(num1) * Number(num2)

      }
      display.innerHTML = result
    } else {
      if (operator === '') {
        num1 += btnValue
      } else {
        num2 += btnValue
      }
    }
  }
})












// if () {}
// else if () {}
// else if () {}
// else {}
//
// function () {}
//
// for () {}
//
// while () {}







// console.log("G'Day")
//
//
//
// let keys = document.querySelectorAll('#calculator');
// let operators = ['+', '-', 'x', '÷'];
// let decimalAdded = false;
//
// // Add onclick event to all the keys and perform operations
// for(let i = 0;i < keys.length; i++){
//   keys[i].onclick = function(e){
//     // Get the input and button values
//     let input = document.querySelector(".display");
//     let inputVal = input.innerHTML;
//     let butnVal = this.innerHTML;
//
//     // append the key values (btnValue) to the input string,
//     //use JS's eval function to get the result
//     //If clear key is pressed, erase everything
//     if(butnVal == "C"){
//       input.innerHTML = "";
//       decimalAdded = false;
//     }
//
//   // If eval key is pressed, calculate and display the result
//     else if(butnVal == "="){
//       let equation = inputVal;
//       let lastChar = equation[equation.length -1];
//
// // Replace all instances of ÷ with /.
//       equation = equation.replace(/÷/g, '/');
// //HOW DOES THIS REMOVE THE LAST CHAR IF IT SI A . OR A OPERATOR???
//       if(operators.indexOf(lastCHar)> -1 || lastChar ==".")
//       equation = equation.replace(/.$/,"");
//
//       if(equation)
//         input.innerHTML = eval(equation);
//
//         decimalAdded = false;
//
//       }
//
//       else if(operators.indexOf(butnVal) > -1) {
//         // Operator is clicked
//         // Get the last character from the equation
//         var lastChar = inputVal[inputVal.length - 1];
//
//         // Only add operator if input is not empty and there is no operator at the last
//         if(inputVal != '' && operators.indexOf(lastChar) == -1)
//         input.innerHTML += butnVal;
//
//         // Allow minus if the string is empty
//         else if(inputVal == '' && butnVal == '-')
//           input.innerHTML += btnVal;
//
//           // Replace the last operator (if exists) with the newly pressed operator
//           if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
//             // the end of string will get replaced by new operator
//             input.innerHTML = inputVal.replace(/.$/, butnVal);
//           }
//
//           decimalAdded =false;
//         }
//
//         //the decimal problem is left, use a flag 'decimalAdded', set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
//         else if(butnVal == '.') {
//           if(!decimalAdded) {
//             input.innerHTML += butnVal;
//             decimalAdded = true;
//           }
//         }
//
//         // if any other key is pressed, append it
//         else {
//           input.innerHTML += butnVal;
//         }
//
//         // prevent page jumps
//         e.preventDefault();
//       }
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //defining variable for display// Basic functionality of the calculator is complete. But there are some problems like
// // 1. No two operators should be added consecutively.
// // 2. The equation shouldn't start from an operator except minus
// // 3. not more than 1 decimal should be there in a number
//
// // We'll fix these issues using some simple checks
//
// // indexOf works only in IE9+
//  //else if(.....)
//  // Operator is clicked
//  // Get the last character from the equation
// //let lastchar =
// // Only add operator if input is not empty and there is no operator at the last
// //if(....)
//
//
// // Allow minus if the string is empty
// //else if()
//
//
//
// // Replace the last operator (if exists) with the newly pressed operator
// //if()
//
//
//
//
//
//
//
// // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
// //else if
//
// // if any other key is pressed, just append it
