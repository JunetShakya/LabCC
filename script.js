document.getElementById("colorBtn").addEventListener("click", changeColor);

function changeColor() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
