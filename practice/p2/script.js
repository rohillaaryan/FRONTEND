// no behaviour yet
let start = document.getElementById("result");
start.textContent = "Search to see results";
//this is me trying to do something

let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    start.textContent =
        "here i will add the function or something like that that will show us result";
});

let btn2 = document.getElementById("clear-btn");
btn2.addEventListener("click", function (event) {
    start.textContent = "Search to see results";
});

let bod = document.querySelector("body");

let back_theme = document.createElement("button");
back_theme.setAttribute("type", "button");
back_theme.classList.add("back_theme");
back_theme.textContent = "dark_mode";
back_theme.setAttribute("id", "back_theme");
document.querySelector("body").appendChild(back_theme);

document.getElementById("back_theme");
back_theme.addEventListener("click", function (event) {
    bod.style.background = "black";
    bod.style.color = "ghostwhite";
});

let light_theme = document.createElement("button");
light_theme.setAttribute("type", "button");
light_theme.classList.add("light_theme");
light_theme.textContent = "light_mode";
light_theme.setAttribute("id", "light_theme");
document.querySelector("body").appendChild(light_theme);

document.getElementById("light_theme");
light_theme.addEventListener("click", function (event) {
    bod.style.background = "white";
    bod.style.color = "black";
});
