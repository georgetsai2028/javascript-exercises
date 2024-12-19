
const container = document.createElement("div");
container.style.border = "1px solid black";
container.style.backgroundColor = "pink";

const inDiv = document.createElement("h1");
inDiv.textContent = "I'm in a div";
container.appendChild(inDiv);

const secondInDIV = document.createElement("p");
secondInDIV.textContent = "ME TOO!";
container.appendChild(secondInDIV);

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
document.body.appendChild(redText);

console.log(redText);

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";
document.body.appendChild(blueText);

document.body.appendChild(container);

function alertFunction() {
    alert("IT WORKS!");
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
    console.log(e.target);
});
