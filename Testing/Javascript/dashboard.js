window.onload = function () {
  onAuthStateChanged(auth, (user) => {
    console.log("Auth state changed:", user); // Log user details
    if (user) {
      // Display user details
      document.getElementById("userEmail").textContent = user.email;
      document.getElementById("userName").textContent =
        user.displayName || "No name provided"; // Fallback text
    } else {
      // Handle the case when the user is not logged in
      window.location.href = "login.html"; // Redirect to login page if not authenticated
    }
  });
};


