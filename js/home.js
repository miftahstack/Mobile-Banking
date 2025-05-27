// Home Screen
let addAmountText = document.getElementById("addAmountText");
let availableBalance = document.getElementById("availableBalance");
let moneyBtn = document.getElementById("moneyBtn");

moneyBtn.addEventListener("click", function () {
  if (addAmountText.value == "" || pinText.value == "") {
    alert("Credentials cannot be empty.");
  }
});
// Home Screen