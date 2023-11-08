let pElement = document.getElementsByTagName("p");

let btnElement = document.getElementById("btn-color-change");

const setBackground = () => {
  let p1 = document.querySelector(".first");
  let p2 = document.querySelector(".last");

  //   p1.style.backgroundColor = "red";
  //   p2.style.backgroundColor = "yellow";
  p1.classList.toggle("bg-red");
  p2.classList.toggle("bg-yellow");
};

btnElement.addEventListener("click", setBackground);
