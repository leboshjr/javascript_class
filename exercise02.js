//WRITING A CALCULATOR PROGRAM

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

//declare the entervalue function
function enterValue() {
 //Enter the first value
  firstNum = Number(prompt ("Enter your first number:"));
 
 //Select an operation
  calculate = Number(prompt ("Select an operation:\n\n1. Add\n2. Multiply\n3. Subtract\n4. Divide"));
  
//Enter the second value
  secondNum = Number(prompt ( "Enter your second number:"));
}

//Calculator starts here

//Do-while statement to repeat the program if user wants to keeps trying
do {
 enterValue();
 
 calculator(firstNum, secondNum);
 
 tryAgain = confirm("Do you want to try again?");
}
while (tryAgain === true);
