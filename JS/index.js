let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
togg1.addEventListener("click", () => {
  if(getComputedStyle(p1).display != "none"){
    p1.style.display = "none";
  } else {
    p1.style.display = "block";
  }
})

function togg(){
  if(getComputedStyle(p2).display != "none"){
    p2.style.display = "none";
  } else {
    p2.style.display = "block";
  }
};
togg2.onclick = togg;