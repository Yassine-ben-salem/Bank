let darkMode = false;

function toggleMode() {
  let body = document.body;
  let button = document.getElementById("mode-toggle");

  if (darkMode) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.innerText = "🌙";
    button.style.backgroundColor= "black";
  } else {
    body.style.backgroundColor = "#121212";
    body.style.color = "white";
    button.innerText = "☀️";
    button.style.backgroundColor= "hsla(0, 0%, 80%, 1.00)";
  }
  darkMode = !darkMode;
}



let balance = Number(document.getElementById("balance"));
let transactions= []

function withdraw() {
  let amount = Number(document.getElementById("amount").value);
  if (amount==""){
    document.getElementById("error-msg").innerHTML = "Please Select an amount first.";
    setTimeout(function () {
      document.getElementById("error-msg").innerHTML = "";
    }, 3000);
    return; 
  }
  document.getElementById("balance").innerText = balance;
  if (amount > balance) {
      document.getElementById("error-msg").innerHTML = "You can't perform this action.";
    setTimeout(function () {
      document.getElementById("error-msg").innerHTML = "";
    }, 3000);
    return; 
  }
  balance = balance - amount;
  document.getElementById("balance").innerText = balance;
  transactions.push(`Withdrew ${amount}\n`);
  showtransactions();
}
function deposit(){
    let amount = Number(document.getElementById("amount").value);
    if (amount==""){
    document.getElementById("error-msg").innerHTML = "Please Select an amount first.";
    setTimeout(function () {
      document.getElementById("error-msg").innerHTML = "";
    }, 3000);
    return; 
  }
  balance= balance + amount;
  console.log(balance);
  document.getElementById("balance").innerText = balance;
   transactions.push(`Diposited ${amount}\n`);
  showtransactions()
}

function showtransactions(){
  document.getElementById("transactions").innerHTML = transactions.join('<br>');
}


function login(){
   let username = document.getElementById("username").value;
   let pin = document.getElementById("pin").value;
   if(username=="" || pin.length!=4 ){
    document.getElementById("error-msg").innerHTML = "You must right your username and your 4-digit PIN.";
    setTimeout(function () {
      document.getElementById("error-msg").innerHTML = "";
    }, 3000);
    return; 
   }
   document.getElementById("welcome").innerHTML = `Welcome ${username}!`;
   document.getElementById("login").style.display = "none";
   document.getElementById("bank").style.display = "block"; 
   return 0;
}

function logout(){
   document.getElementById("login").style.display = "block";
   document.getElementById("bank").style.display = "none";
   document.getElementById("username").value = "";
   document.getElementById("pin").value = "";
}









