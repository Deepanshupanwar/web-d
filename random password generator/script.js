console.clear();


const slider = document.querySelector(".range_slider");
const sliderValue = document.querySelector(".length__title");

slider.querySelector("input").addEventListener("input", event => {
    sliderValue.setAttribute("data-length",event.target.value);
    fill(event.target);
});


fill(slider.querySelector("input"));
function fill(slider)
{
    sliderValue.setAttribute("data-length",slider.value);
}


const lengthEl = document.getElementById("slider");
const resultEl = document.getElementById("result");
const generateBtn = document.getElementById("generate");
const numberEl = document.querySelector("#numbers");
const symbolEl = document.querySelector("#symbols");
const copyEl = document.getElementById("copy-btn");


generateBtn.addEventListener("click", () => {
    const length = lengthEl.value;
    resultEl.innerText = generatepassword(length) ;
});
function generatepassword(lengths){
    let chars ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(symbolEl.checked===true)
    {
        chars= chars + "!@#$%^&*";
    }
    if(numberEl.checked===true)
    {
        chars= chars + "1234567890";
    }
     let password ="";
     for(let i=0;i<lengths;i++)
     {
         let randomNumber = Math.floor(Math.random() * chars.length);
         password += chars.substring(randomNumber, randomNumber +1);
     }
     console.log(password);
     return password;
}
copyEl.addEventListener("click",copying);
function copying()
{
    const password =resultEl.innerText;
    
	if (!password || password == "CLICK GENERATE") {
		return;
	}
    const textarea = document.createElement("textarea");
    textarea.value=password;
    document.body.appendChild(textarea);
     textarea.select();
    document.execCommand("copy");
    textarea.remove();
}