// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="ENTER YOUR CLIENT ID">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
