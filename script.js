document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if ((username === 'just_gine17' || username === 'Just_gine17') && password === '27072123') {
    window.location.href = 'welcome.html';
  } else {
    document.getElementById('error-message').textContent = 'apprezzo il tentativo, capirai.';
  }
});

document.getElementById("days-button").addEventListener("click", function () {
  window.location.href = "giorni.html";
});