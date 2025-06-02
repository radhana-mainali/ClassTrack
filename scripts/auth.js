document.getElementById('loginBtn').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
      const email = result.user.email;

      // Simple logic for redirect based on email
      if (email.includes("teacher")) {
        window.location.href = "teacher.html";
      } else {
        window.location.href = "student.html";
      }
    })
    .catch(error => {
      console.error("Login error:", error.message);
    });
});