let darkMode = false;
let balance = 0;
let transactions = [];

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  darkMode = !darkMode;
  document.getElementById("mode-toggle").innerText = darkMode ? "☀️" : "🌙";
}

function showMessage(id, message) {
  const msg = document.getElementById(id);
  msg.innerText = message;
  setTimeout(() => (msg.innerText = ""), 3000);
}

function showTransactions() {
  document.getElementById("transactions").innerHTML = transactions.join("<br>");
}

function withdraw() {
  const amount = Number(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("bank-error-msg", "Please enter a valid amount.");
    return;
  }
  if (amount > balance) {
    showMessage("bank-error-msg", "Insufficient balance.");
    return;
  }
  balance -= amount;
  document.getElementById("balance").innerText = balance;
  transactions.push(`Withdrew $${amount}`);
  showTransactions();
}

function deposit() {
  const amount = Number(document.getElementById("amount").value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("bank-error-msg", "Please enter a valid amount.");
    return;
  }
  balance += amount;
  document.getElementById("balance").innerText = balance;
  transactions.push(`Deposited $${amount}`);
  showTransactions();
}

function login() {
  const username = document.getElementById("username").value.trim();
  const pin = document.getElementById("pin").value.trim();
  if (username === "" || pin.length !== 4 || isNaN(pin)) {
    showMessage("login-error-msg", "Enter a valid username and 4-digit PIN.");
    return;
  }

  document.getElementById("welcome").innerText = `Welcome ${username}!`;
  document.getElementById("login").style.display = "none";
  document.getElementById("bank").style.display = "flex";
  document.getElementById("balance").innerText = balance;
}

function logout() {
  document.getElementById("login").style.display = "flex";
  document.getElementById("bank").style.display = "none";

  document.getElementById("username").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("transactions").innerHTML = "";
  document.getElementById("balance").innerText = 0;

  balance = 0;
  transactions = [];
}
