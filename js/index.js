let p = document.getElementById("p");
let i = document.getElementById("i");
let b = document.getElementById("b");

b.onclick = function () {
  console.log(i.value);
  p.innerText = i.value;
}