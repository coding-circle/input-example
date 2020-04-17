function updateText(event) {
  const newText = event.target.value;
  const titleElement = document.getElementById("page-title");
  titleElement.innerText = newText;
  console.log(newText);
}

function updateTextColor(event) {
  const newColor = event.target.value;
  document.body.style.color = newColor;
  console.log(newColor);
}

function updateBackgroundColor(event) {
  const newColor = event.target.value;
  document.body.style.background = newColor;
  console.log(newColor);
}

function makeEmDoStuff() {
  const textInput = document.getElementById("textInput");
  const textColorInput = document.getElementById("textColorInput");
  const backgroundColorInput = document.getElementById("backgroundColorInput");

  textInput.addEventListener("input", updateText);
  textColorInput.addEventListener("change", updateTextColor);
  backgroundColorInput.addEventListener("change", updateBackgroundColor);
}

window.addEventListener("load", makeEmDoStuff);
