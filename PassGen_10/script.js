const passwordBox = document.querySelector("#pass");
const button = document.querySelector(".btn");
const copyButton = document.querySelector("#copyBtn");

let password = "";
const lenght = 8;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfhjklzxcvbnm";
const number = "0987654321";
const specialChar = "!@#$%^&*()}{?><]";
const allChar = upperCase + lowerCase + number + specialChar;
// console.log(allChar);

function generatePassword() {
  password = "";
  password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];

  while (password.length <= lenght) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

button.addEventListener("click", (e) => {
  generatePassword();
});

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

copyButton.addEventListener("click", function () {
    copyPassword();
})