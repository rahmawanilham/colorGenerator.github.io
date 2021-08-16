const teksGradient = document.querySelector("h4");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var warnaGradient = document.querySelector(".gradient");
var p1 = document.querySelector("#hex1");
var p2 = document.querySelector("#hex2");

function buatGradient() {
  let warna1 = color1.value;
  let warna2 = color2.value;

  p1.innerHTML = warna1;
  p2.innerHTML = warna2;

  warnaGradient.style.background =
    "linear-gradient(45deg, " + color1.value + "," + color2.value + ")";

  teksGradient.innerText = warnaGradient.style.background + ";";
}

color1.addEventListener("input", buatGradient);
color2.addEventListener("input", buatGradient);
