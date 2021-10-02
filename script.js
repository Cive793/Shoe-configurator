"use strict";

let elementToPaint;

document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("shoe-01.svg");
  let SvgPicture = await response.text();

  document.querySelector(".shoeContainer").innerHTML = SvgPicture;
  init();
}

function init() {
  document.querySelectorAll(".shoePart").forEach((element) => {
    element.addEventListener("click", getElement);
    //console.log(element);
  });
  document.querySelectorAll(".colourButton").forEach((colour) => {
    colour.addEventListener("click", getColour);
  });
}

function getElement() {
  elementToPaint = this;
  this.style.stroke = "rgb(0, 0, 0)";
  this.style.strokeWidth = "5px";
  //console.log(this);
  colourElement();
}

function getColour(event) {
  const colourToPaint = event.target.attributes.fill.value;
  colourElement(colourToPaint);
}

function colourElement(colourToPaint) {
  elementToPaint.style.fill = colourToPaint;
}
