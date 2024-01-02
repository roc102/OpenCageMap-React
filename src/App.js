import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import { useGoogleLogin } from '@react-oauth/google';
import './App.css';

function App() {
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={credentialResponse => {
          const credentialResponseCode = jwtDecode(credentialResponse.credential);
          console.log(credentialResponseCode);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default App;
