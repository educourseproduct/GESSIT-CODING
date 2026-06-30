const msg = document.getElementById("msg");

async function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    msg.innerText = "";
    
    try {
        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        msg.innerText = data.message;
        
        // Bersihkan input
        document.getElementById("regUsername").value = "";
        document.getElementById("regPassword").value = "";
    } catch (err) {
        msg.innerText = "Error: " + err.message;
    }
}

async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    msg.innerText = "";
    
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        
        if (res.ok) {
            localStorage.setItem('token', data.token);
            window.location.href = "/profile.html";
        } else {
            msg.innerText = data.message;
        }
        
        // Bersihkan input
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    } catch (err) {
        msg.innerText = "Error: " + err.message;
    }
}
