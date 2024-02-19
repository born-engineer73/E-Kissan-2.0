// Check if the user is already logged in (you need to implement this logic)
// For demonstration purposes, I'll use a simple check for a token in localStorage
if (localStorage.getItem("token")) {
    // If user is logged in, show logout option and hide login option
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
}

function logout() {
    // Perform logout actions here (e.g., clear session, remove tokens)
    // For demonstration, simply remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect user to home page after logout
    window.location.href = "index.html"; // Change this to your home page URL
}
