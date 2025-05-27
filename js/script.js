// Home Screen
let mobileText = document.getElementById("mobileText");
let mobileInput = document.getElementById("mobileInput");
let pinText = document.getElementById("pinText");
let pinInput = document.getElementById("pinInput");
let loginBtn = document.getElementById("loginBtn");

document.getElementById("loginBtn").addEventListener("click", function () {
  if (mobileInput.value == "" || pinInput.value == "") {
    alert("Credentials cannot be empty.");
  } else if (mobileInput.value == "0123456789" && pinInput.value == "1234") {
    alert("Correct credentials! Redirecting to the Next screen...")
    window.location.href = "./home.html";
  } else {
    alert("Wrong credentials! Please try again.");
  }
});

// Home Screen
