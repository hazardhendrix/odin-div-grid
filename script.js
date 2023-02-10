const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const hov = document.getElementsByClassName("grid-item");

for (var i = 0; i < hov.length; i++) {
  hov[i].addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = "red";
    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 400);
  }, false);
}

const btn = document.querySelector("#btn");
let person = "";
btn.addEventListener('click', function (e) {
  person = prompt("Please enter yourname",);
});

console.log(person);
