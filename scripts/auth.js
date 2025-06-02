document.getElementById('loginBtn').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        console.log("UID:", result.user.uid);
        const uid = user.uid;

        return firebase.firestore().collection("users").doc(uid).get();
    })
    .then(doc => {
        if (doc.exists) {
            const role = doc.data().role;
            if (role === "teacher") {
                window.location.href = "teacher.html";
            } else {
                window.location.href = "student.html";
            }
        } else {
            alert("Your account doesn't have a role assigned. Please contact admin.");
        }
    })
    .catch(error => {
        console.error("Login error:", error.message);
    });
});