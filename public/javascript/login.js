async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    console.log("username:" ,username, "password:", password )
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response, "HERE'S THE RESPONSE")
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

// async function signupFormHandler(event) {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && password) {
//     const response = await fetch('/api/users/signup', {
//       method: 'POST',
//       body: JSON.stringify({
//         username,
//         password
//       }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

 document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//  document.getElementById('signup-form').addEventListener('submit', signupFormHandler);
