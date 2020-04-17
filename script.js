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

function triggerAlert() {
  alert("You clicked the damn button");
}

function makeEmDoStuff() {
  const textInput = document.getElementById("text-input");
  const textColorInput = document.getElementById("text-color-input");
  const backgroundColorInput = document.getElementById(
    "background-color-input"
  );
  const damnButton = document.getElementById("damn-button");

  textInput.addEventListener("input", updateText);
  textColorInput.addEventListener("change", updateTextColor);
  backgroundColorInput.addEventListener("change", updateBackgroundColor);
  damnButton.addEventListener("click", triggerAlert);
}

window.addEventListener("load", makeEmDoStuff);
