let newletterForm = document.getElementById("formNewsletter");
let allAgreeInput = document.getElementById("allAgrement");

const validate = (event) => {
  let nameInput = document.getElementById("nameAndSurname");
  let emailInput = document.getElementById("emailAddress");
  let check1Input = document.getElementById("agrement1");
  let errList = document.getElementById("errors");

  errList.innerHTML = "";

  if (nameInput.value.trim() === "") {
    let liError = document.createElement("li");
    liError.innerText = "Wpisz imie i nazwisko";
    errList.appendChild(liError);
  }

  if (emailInput.value.trim() === "") {
    let liError = document.createElement("li");
    liError.innerText = "Brak maila, uzupełnij";
    errList.appendChild(liError);
  }

  if (!emailInput.value.includes("@")) {
    let liError = document.createElement("li");
    liError.innerText = "Mail nie poprawny brak @";
    errList.appendChild(liError);
  }
  if (!check1Input.checked) {
    let liError = document.createElement("li");
    liError.innerText = "Zgoda 1 wymagana!";
    errList.appendChild(liError);
  }
  if (errList.children.length > 0) {
    event.preventDefault();
  }
};

const allAgree = (event) => {
  let agree1 = document.getElementById("agrement1");
  let agree2 = document.getElementById("agrement2");

  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;

  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;
};

newletterForm.addEventListener("submit", validate);
allAgreeInput.addEventListener("change", allAgree);
