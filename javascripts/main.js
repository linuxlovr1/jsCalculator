
var result = document.getElementById("result");
var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");

function outputResult(oper) {
  var num1 = parseInt(field1.value);
  var num2 = parseInt(field2.value);
  switch(oper){
    case '+': ("+");
      result.innerHTML = num1 + num2;
      break;
    case '-': ("-");
      result.innerHTML = num1 - num2;
      break;
    case '*': ("*");
      result.innerHTML = num1 * num2;
      break;
  

  }
  
}


