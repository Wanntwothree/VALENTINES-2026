// Set your correct password here
const correctPassword = "BOBA";

const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload
  const enteredPassword = document.getElementById("password").value;

  if (enteredPassword === correctPassword) {
    message.textContent = "✅ Access granted!";
    message.style.color = "green";
    // Redirect to another page if needed:
    window.location.href = "letter.html";
  } else {
    message.textContent = "❌ Incorrect password!";
    message.style.color = "red";
  }
});
