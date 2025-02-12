(async function(){const apiUrl = "http://localhost:5000";

// Handle login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      alert(data.message);
    }
  });
}

// Handle signup
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      window.location.href = "login.html";
    } else {
      alert(data.message);
    }
  });
}

// Show user's name on dashboard
if (window.location.pathname === "/dashboard.html") {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
  }

  const response = await fetch(`${apiUrl}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await response.json();
  if (response.ok) {
    document.getElementById("userName").textContent = `Welcome, ${data.username}`;
  } else {
    alert(data.message);
  }
}

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}
})()