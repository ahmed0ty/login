document.addEventListener('DOMContentLoaded', function () {
   var signup = document.querySelector('#signup');
   var signin = document.querySelector('#signin');
   var signupform = document.querySelector('#signupform');
   var fillFieldsMessage = document.querySelector('#fillFieldsMessage');
   var successMessage = document.querySelector('#successMessage');
   var existMessage = document.querySelector('#existMessage');
   var fillMessage = document.querySelector('#fillMessage');
   var succMessage = document.querySelector('#succMessage');
   var exiMessage = document.querySelector('#exiMessage');
   var loginForm = document.querySelector('#login');
   var welcomepage = document.querySelector('#welcomepage');
   var welcomeMessage = document.querySelector('#welcomeMessage');
   // var welcomeUsername = document.querySelector('#welcomeUsername');
   var welcomebtn = document.querySelector('#welcomebtn');

   var users = [];

   function updateLocalStorage() {
      localStorage.setItem('users', JSON.stringify(users));
   }

   var existingUsers = localStorage.getItem('users');
   if (existingUsers) {
      users = JSON.parse(existingUsers);
   }

   signup.addEventListener('click', function () {
      signupform.classList.replace('d-none', 'd-block');
      login.classList.replace('d-block', 'd-none');
      fillFieldsMessage.style.display = 'none';
      successMessage.style.display = 'none';
      loginForm.reset();
      succMessage.classList.replace('d-block', 'd-none');
      fillMessage.classList.replace('d-block', 'd-none');
      exiMessage.classList.replace('d-block', 'd-none');
   });

   signin.addEventListener('click', function () {
      signupform.classList.replace('d-block', 'd-none');
      login.classList.replace('d-none', 'd-block');
      fillMessage.style.display = 'none';
      succMessage.style.display = 'none';
      exiMessage.style.display = 'none';
      signupForm.reset();
      successMessage.classList.replace('d-block', 'd-none');
      fillFieldsMessage.classList.replace('d-block', 'd-none');
      existMessage.classList.replace('d-block', 'd-none');
   });

   loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = loginForm.querySelector('input[name="email"]').value;
      var password = loginForm.querySelector('input[name="password"]').value;

      if (email === '' || password === '') {
         fillMessage.classList.replace('d-none', 'd-block');
         succMessage.classList.replace('d-block', 'd-none');
         exiMessage.classList.replace('d-block', 'd-none');
      } else {
         var user = users.find(function (user) {
            return user.email === email && user.password === password;
         });

         if (user) {
            fillMessage.classList.replace('d-block', 'd-none');
            succMessage.classList.replace('d-none', 'd-block');
            exiMessage.classList.replace('d-block', 'd-none');

            welcomeMessage.textContent = `Welcome ${user.name}`;

            welcomepage.classList.replace('d-none', 'd-block');
            login.classList.replace('d-block', 'd-none');
            signupform.classList.replace('d-block', 'd-none');

            welcome(user);
         } else {
            fillMessage.classList.replace('d-block', 'd-none');
            succMessage.classList.replace('d-block', 'd-none');
            exiMessage.classList.replace('d-none', 'd-block');
         }
      }
   });

   var signupForm = document.querySelector('#signupform');

   signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = signupForm.querySelector('input[name="name"]').value;
      var email = signupForm.querySelector('input[name="email"]').value;
      var password = signupForm.querySelector('input[name="password"]').value;

      var emailExists = users.some(function (user) {
         return user.email === email;
      });

      if (name === '' || email === '' || password === '') {
         fillFieldsMessage.classList.replace('d-none', 'd-block');
         successMessage.classList.replace('d-block', 'd-none');
         existMessage.classList.replace('d-block', 'd-none');
      } else if (emailExists) {
         fillFieldsMessage.classList.replace('d-block', 'd-none');
         successMessage.classList.replace('d-block', 'd-none');
         existMessage.classList.replace('d-none', 'd-block');
      } else {
         fillFieldsMessage.classList.replace('d-block', 'd-none');
         successMessage.classList.replace('d-none', 'd-block');
         existMessage.classList.replace('d-block', 'd-none');

         var userData = {
            name: name,
            email: email,
            password: password
         };
         users.push(userData);

         updateLocalStorage();
      }
   });

   welcomebtn.addEventListener('click', function () {
      welcomepage.classList.replace('d-block', 'd-none');
      login.classList.replace('d-none', 'd-block');
      signupform.classList.replace('d-block', 'd-none');
      succMessage.classList.replace('d-block', 'd-none');
      loginForm.reset();
   });

});

function welcome(userData) {

   welcomeMessage.textContent = `Welcome ${userData.name}`;
}











































