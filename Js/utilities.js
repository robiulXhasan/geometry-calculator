// get input field value by using id
function getInputFieldValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldString = inputField.value;
  const inputValue = parseFloat(inputFieldString);
  inputField.value = "";
  return inputValue;
}
//check Validation
function checkValidation(firstInputValue, secondInputValue) {
  if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
    window.alert("You must have to give number as input to calculate area");
    return false;
  } else if (firstInputValue < 0 || secondInputValue < 0) {
    window.alert("Negative input is not acceptable!!!");
    return false;
  } else {
    return true;
  }
}
// calculating area using a function
function calculateArea(constant, value1, value2) {
  const area = (constant * value1 * value2).toFixed(2);
  return area;
}

// set the value of area in area calculation
function setAreaValue(name, area) {
  const areaList = document.getElementById("area-list");
  const li = document.createElement("li");
  li.innerHTML = `<div class="flex justify-between"><span>${name}  </span> <span class="">${area} cm<sup>2</sup></span> <button class="bg-sky-500 px-2 text-white text-right rounded">Convert to m<sup>2</sup></button></div>`;
  areaList.appendChild(li);
}

// set random color
function getRandomColor(id) {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById(id).style.backgroundColor = "#" + randomColor;
}
