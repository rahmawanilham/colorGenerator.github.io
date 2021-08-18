const teksGradient = document.querySelector("h4");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const warnaGradient = document.querySelector(".gradient");

function buatGradient() {
  let p1 = document.querySelector("#hex1");
  let p2 = document.querySelector("#hex2");

  p1.innerHTML = color1.value;
  p2.innerHTML = color2.value;

  warnaGradient.style.background =
    "linear-gradient(45deg, " + color1.value + "," + color2.value + ")";

  teksGradient.innerText = warnaGradient.style.background + ";";
}

color1.addEventListener("input", buatGradient);
color2.addEventListener("input", buatGradient);
