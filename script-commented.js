function updateText(event) {
  /* here we are defining a const, setting it as the "value" of the "target" of the "event". 
     when the "updateText" function is called, it expects an "event" parameter, which is blob of data with a bunch of information about the event that just happend. 
     - the "event" is just an object {}  
     - this event object has a "target" property that refers to the actual <input> or <button> element that caused the event
     - since the "target" is just an HTMLElement, we can access the "value" (like <input type="text" value="blah blah" />)
   */
  const newText = event.target.value;
  /* defining a reference to our page title */
  const titleElement = document.getElementById("page-title");
  /* set the "innerText" property of the titleElement (which is also an HTMLElement, but since it is not an interactive input it doesn't have a "value", just an "innerText")*/
  titleElement.innerText = newText;
  console.log(newText);
}

function updateTextColor(event) {
  /* define a reference to the color provided by event.target in the same way we referenced the text above -- since the color string is just the "value" of a color-type input */
  const newColor = event.target.value;
  /* set the color property of the style object of the body HTMLElement of the document object to equal the newColor we chose in the input */
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
  /* define references to each of our interactive input HTMLElements, by using document.getElementById, passing the ID string */
  const textInput = document.getElementById("textInput");
  const textColorInput = document.getElementById("textColorInput");
  const backgroundColorInput = document.getElementById("backgroundColorInput");
  const damnButton = document.getElementById("damnButton");

  /* on each input, add an "event listener"; each input listens for different type of event (the first argument) and calls a function named in the second argument when that event is fired */
  /* textInput listens for "input" events, which fire when keys are pressed on a focused input; calls "updateText" when they happen */
  textInput.addEventListener("input", updateText);
  /* textColorInput listens for "change" events, which fire when the "value" of the input changes; calls "updateTextColor" when they happen */
  textColorInput.addEventListener("change", updateTextColor);
  /* backgroundColorInput also listens for "change"-type events; calls "updateTextColor" when they happen  */
  backgroundColorInput.addEventListener("change", updateBackgroundColor);
  /* damnButton listens for "click" events; calls "triggerAlert" when they happen  */
  damnButton.addEventListener("click", triggerAlert);
}

/* the "window" object (referring to your browser window) listens for "load" events; calls "makeEmDoStuff" when they happen.  */
/* why do we do this? because we can't access inputs on the page and change their properties if the inputs haven't finished loading. */
/* the window.onload event triggers as soon as all assets have finished downloading  */
window.addEventListener("load", makeEmDoStuff);
