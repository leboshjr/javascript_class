//WRITING A CALCULATOR PROGRAM

//declare the entervalue function
function enterValue() {
  //Enter and validate the first value
    do {
       firstNum = Number(prompt("Please enter your first number"));
    }
    while ((Number.isNaN(firstNum)) || (!firstNum));
 
 //Select an operation
  calculate = Number(prompt ("Select an operation:\n\n1. Add\n2. Multiply\n3. Subtract\n4. Divide"));
 
  //Enter and validate the second value
    do {
       secondNum = Number(prompt("Please enter your second number"));
    }
    while ((Number.isNaN(secondNum)) || (!secondNum));
}

 //declare the calculator function
function calculator(a, b) {
  
  switch (calculate) {
  case 1:
    alert(`${a} + ${b} = ${a+b}`);
    break;
  case 2:
    alert(`${a} x ${b} = ${a*b}`);
    break;
  case 3:
    alert(`${a} - ${b} = ${a-b}`);
    break;
  case 4:
    alert(`${a} ÷ ${b} = ${a/b}`);
    break;
  default:
    alert("You did not select a valid operation" );
 }
}

//Calculator starts here

//Calling the functions in a Do-while statement to repeat the program if user wants to keeps trying
do {
 enterValue();
 
 calculator(firstNum, secondNum);
 
 tryAgain = confirm("Do you want to try again?");
}
while (tryAgain === true);
