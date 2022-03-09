var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color11 = document.getElementById("color11");
var color21 = document.getElementById("color21");
var body = document.getElementById("gradient");
css.textContent = "linear-gradient(to right, " + color1.value +"," + color2.value + ")";
function setgradient()
{
    body.style.background = "linear-gradient(to right, " + color1.value +"," + color2.value + ")";
    css.textContent = body.style.background + ";"
}
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
function setgradient2(event)
{
    body.style.background = "linear-gradient(to right, " + color11.value +"," + color21.value + ")";
    css.textContent = body.style.background + ";"
}
color11.addEventListener("keypress", setgradient2);
color21.addEventListener("keypress", setgradient2);
