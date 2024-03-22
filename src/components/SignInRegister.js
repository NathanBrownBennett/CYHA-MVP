// Part of SignInRegister.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

// Part of SignInRegister.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const register = () => {
  const email = prompt("Enter email");
  const password = prompt("Enter password");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registered and signed in
      alert(`Account successfully created, Your details are Email: ${email} and Password: ${password}`);
      // Navigate to Dashboard or set state to reflect logged-in status
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
// Part of SignInRegister.js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const register = () => {
  const email = prompt("Enter email");
  const password = prompt("Enter password");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Registered and signed in
      alert(`Account successfully created, Your details are Email: ${email} and Password: ${password}`);
      // Navigate to Dashboard or set state to reflect logged-in status
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

const signIn = () => {
  const email = prompt("Enter email");
  const password = prompt("Enter password");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      alert("Logging in");
      // Navigate to Dashboard or set state to reflect logged-in status
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
