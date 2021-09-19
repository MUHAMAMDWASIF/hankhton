

// const signUpFile = () => { location.href = "login(1).html" }
// const singUpUser = () => {


//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const username = document.getElementById("username").value;
// console.log("email,password,username")
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // Signed in 
//             var user = userCredential.user;
//             db.collection("Clients")
//             .doc(email)
//             .set({
//               email: email,
//               password: password,
//               clientName : username
//             })
      
//             .then(() => {
//               alert("your Account Is Created");
//               location.reload();
//             })
//             .catch((error) => {
//               console.error("Error adding document: ", error);
//             });
//             // ...
//             console.log(user);
//             alert("Your Account Is Created")

          
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // ..
//         });


// }
// const loginFile = () => {
//     location.href = "game.html"
// }
// let userArr = [];

// const logIn = () => {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
  
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         const userEmail = auth.currentUser.email;
//         userArr.push(email)
//         location.href = "index(1).html";
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//       });
      
//   };

function logn() {
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    firebase.auth().signInWithEmailAndPassword(email1, password1)
        .then((userCredential) => {
            location.href="index.html"
            // Signed in
            var user = userCredential.user;
            alert("login succesfull")
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}
function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(res => alert(res))
  };
  
  function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Sign Up scuesfull")
            db.collection("users").doc(email).set({
                email: email,
                password: password
            })
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}
