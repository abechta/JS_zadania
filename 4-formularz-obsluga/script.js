const subForm = (event) => {
  event.preventDefault();
  let lname, fname;
  lname = document.querySelector('[name="lname"]');
  fname = document.querySelector('[name="fname"]');
  console.log("Imie:" + fname.value + " Nazwisko:" + lname.value);
};

let form = document.getElementById("form");
form.addEventListener("submit", subForm);
