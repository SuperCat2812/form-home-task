let p = document.getElementById("p");
let i = document.getElementById("i");
let b = document.getElementById("b");
let k = document.getElementById("k");
b.onclick = function () {
  console.log(i.value);
  p.innerText = i.value;
  k.innerHTML = "<div>JS</div>";
}
