import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase-config';

const SignInAndRegister = ({ onSignIn, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onRegister(userCredential); // Call the onRegister prop
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onSignIn(userCredential); // Call the onSignIn prop
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <form>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button onClick={signIn}>Sign In</button>
        <button onClick={register}>Register</button>
      </form>
    </div>
  );
};

export default SignInAndRegister;
