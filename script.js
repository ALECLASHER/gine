document.getElementById('login-form').addEventListener('submit', function(e) {
     e.preventDefault();
   
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;
   
     if (username === 'gine' && password === '123456') {
       window.location.href = 'welcome.html';
     } else {
       document.getElementById('error-message').textContent = 'apprezzo il tentativo.';
     }
   });