 async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
console.log(username, password)
  if (username && password) {
    console.log("username:" ,username, "password:", password )
    const response = await fetch('users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    // console.log("HERE'S THE RESPONSE")
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

 document.querySelector('.login-form').addEventListener('submit', loginFormHandler);


