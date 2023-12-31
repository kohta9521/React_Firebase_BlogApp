import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';



const Login = () => {

  const loginWithGoogle = () => {
    // googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };


  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
