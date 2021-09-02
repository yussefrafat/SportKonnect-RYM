async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.getElementById("email-credentials-login").value.trim();
  const password = document
    .getElementById("password-credentials-login")
    .value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/homepage");
    }
  }
}

// s