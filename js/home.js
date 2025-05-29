// Home Screen
let addAmountInput = document.getElementById("addAmountInput");
let pinInput = document.getElementById("pinInput");
let pinText = document.getElementById("pinText");
let availableBalance = document.getElementById("availableBalance");
let moneyBtn = document.getElementById("moneyBtn");

moneyBtn.addEventListener("click", function () {
  if (addAmountInput.value == "" || pinInput.value == "") {
    alert("Credentials cannot be empty.");
  } else if (addAmountInput > "0" && pinInput.value == "1234") {
    alert("Amount added successfully!");
    let currentBalance = parseFloat(availableBalance.innerHTML);
    let newBalance = parseFloat(addAmountInput.value);
    availableBalance.innerText = currentBalance + newBalance;
  } else {
    alert("Wrong credentials! Please try again.");
  }
});





// Home Screen
