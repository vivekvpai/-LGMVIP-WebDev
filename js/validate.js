//alert("connected")

const userName = document.getElementById("name");
const branch = document.getElementById("branch");
const phonNo = document.getElementById("contact_number");
const email = document.getElementById("email");
const form1 = document.getElementById("form1");

form1.addEventListener("mouseout", (e) => {
  e.preventDefault();
  checkName();
  checkBranch();
  checkEmail();
  checkNumber();
});

function checkName() {
  const userNameValue = userName.value.trim();
  let validRegex = /^[A-Za-z ]+$/;
  if (userNameValue.match(validRegex)) {
    setSucessFor(userName);
    return true;
  } 
  else if (userNameValue === "")
  {
    setEmptyFor(userName);
    return false;
  }
  else {
    setErrorFor(userName, "Alphabets only please");
    return false;
  }
}

function checkBranch() {
  const branchValue = branch.value.trim();
  if (branchValue !== "") {
    setSucessFor(branch);
    return true;
  } 
  else if (branchValue === "")
  {
    setEmptyFor(branch);
    return false;
  }
}

function checkNumber() {
  const phonNoValue = phonNo.value.trim();
  let validRegex = /^[0-9 ]+$/;
  if (phonNoValue.match(validRegex) && phonNoValue.length === 10) {
    setSucessFor(phonNo);
    return true;
  } else {
    if (phonNoValue === "") {
      setEmptyFor(phonNo, "Must be Number Only");
      return false;
    }
    if (phonNoValue.length !== 10) {
      setErrorFor(phonNo, "Enter 10 digits");
      return false;
    } else {
      setErrorFor(phonNo, "Must be Number Only");
      return false;
    }
  }
}

function checkEmail() {
  const mail = email.value.trim();
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.match(validRegex)) {
    setSucessFor(email);
    return true;
  } 
  else if (mail === "")
  {
    setEmptyFor(email);
    return false;
  }
  else {
    setErrorFor(email, "Valid Email please");
    return false;
  }
}

function setErrorFor(input, message) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");
  small.innerText = message;
  const i = parent.querySelector("i");
  parent.className = "input-group error";
  i.className = " fas fa-times";
}

function setSucessFor(input) {
  const parent = input.parentElement;
  const i = parent.querySelector("i");
  parent.className = "input-group sucess";
  i.className = " fas fa-check";
}

function setEmptyFor(input) {
  const parent = input.parentElement;
  const i = parent.querySelector("i");
  parent.className = "input-group empty";
  i.className = "fas fa-info";
}
