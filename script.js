wifiName = document.getElementById("wifiName");
wifiPassword = document.getElementById("wifiPassword");

const url = new URLSearchParams(window.location.search);

const wifiNameValue = url.get("Name");
const wifiPasswordValue = url.get("Password");

console.log(wifiNameValue);
console.log(wifiPasswordValue);

wifiName.textContent = 'WiFi Name: ' + wifiNameValue;
wifiPassword.textContent = 'WiFi Password: ' + wifiPasswordValue;