
let turn = true;
let btn = document.querySelectorAll(".btn");
let message = document.querySelectorAll(".message");
let winnername = document.querySelector(".winnername");
let restart = document.querySelector(".restart");
let playagain = document.querySelector(".playagain");
let count = 0;

let winner = [
[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
];

btn.forEach((click) => {
click.addEventListener("click", () => {
if (turn) {
    click.innerText = "x";
    turn = false;
}
else {
    click.innerText = "o";
    turn = true;
}
click.disabled = true;
count++;
checkwinner();
if (winnername.innerText == "winnername" && count==9) {
    draw();
}

})
})
let checkwinner = () => {
for (let value of winner) {
if (btn[value[0]].innerText == "o" && btn[value[1]].innerText == "o" && btn[value[2]].innerText == "o") {
    console.log("o win");
    // message.classList.remove("hide");
    winnername.innerText = "Congratulation 'O' Is Winner";
    message.forEach(msg => msg.classList.remove("hide"));


}
if (btn[value[0]].innerText == "x" && btn[value[1]].innerText == "x" && btn[value[2]].innerText == "x") {
    console.log("x win");
    // message.classList.remove("hide");
    winnername.innerText = "Congratulation 'X' Is Winner";
    message.forEach(msg => msg.classList.remove("hide"));

}
}
}

let draw = () => {
console.log("draw");
winnername.innerText = "DRAW";
message.forEach(msg => msg.classList.remove("hide"));
count = 0;

}


restart.addEventListener("click", function () {
btn.forEach((click) => {
click.innerText = "";
click.disabled = false;
count = 0;

// msg.classList.classList.add("hide");


})
})
playagain.addEventListener("click", function () {
btn.forEach((click) => {
click.innerText = "";
click.disabled = false;
count = 0;
winnername.innerText = "winnername";


// msg.classList.remove("hide");
message.forEach(msg => msg.classList.add("hide"));

})
})
