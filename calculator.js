function theclick(key){
    document.getElementById(`input`).value += key;
}
// [calling input and allowing keys to display on input ]
function calculate() {
  let input = document.getElementById("input").value;
  if (/^[0-9+\-*/(). ]+$/.test(input)) {
    document.getElementById("input").value = Function("return " + input)();
  } else {
    alert("Invalid input! Please enter only numbers and operators.");
  }
}
//  validation work

function del(){
document.getElementById(`input`).value=``;
}
// clearing input 