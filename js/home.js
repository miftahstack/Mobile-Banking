// Home Screen
let pinInput = document.getElementById("pinInput");
let pinText = document.getElementById("pinText");
let moneyBtn = document.getElementById("moneyBtn");

let addAmountInput = document.getElementById("addAmountInput");
let availableBalance = document.getElementById("availableBalance");
let hidebutton = document.getElementById("hidebutton");
let cardMoney = document.getElementById("cardMoney");
// =============================================================
let cashOutInput = document.getElementById("cashOutInput");

// Add Money
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
// Add Money____

// CashOut
let addMoneyBtn = document.getElementById("addMoneyBtn");
let addMoney = document.getElementById("addMoney");
let cashOutBtn = document.getElementById("cashOutBtn");
let cashOutMoney = document.getElementById("cashOutMoney");

cashOutBtn.addEventListener("click", () => {
  addMoney.classList.add("hidden");
  cashOutMoney.classList.remove("hidden");
});
addMoneyBtn.addEventListener("click", () => {
  cashOutMoney.classList.add("hidden");
  addMoney.classList.remove("hidden");
});
// CashOut

// Home Screen
