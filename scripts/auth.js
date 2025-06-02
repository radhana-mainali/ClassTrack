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
        console.log("Document exists?", doc.exists);
        if (doc.exists) {
            console.log("User doc data:", doc.data());
            const role = doc.data().role;
            console.log("User role:", role);

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