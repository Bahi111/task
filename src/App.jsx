import React, { useState } from "react";
import User_icon from './assets/user.png';
import email_icon from './assets/mail.png';
import password_icon from './assets/padlock.png';
import './App.css';

export default function App() {
  const [action, setAction] = useState("Registration");

  return (
    <div className="container">
      <div className="header">
        <div className="underline"></div>
        <div className="text">{action}</div> {/* Action text: Login or Registration */}
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {/* Only show the username field if action is "Registration" */}
        {action === "Registration" && (
          <div className="input">
            <img src={User_icon} alt="User Icon" />
            <input type="text" placeholder="Enter your Username" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder="Enter your Email" />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder="Enter your Password" />
        </div>

        <div className="forget-password">
          Lost Password? <span>Click Here</span>
        </div>

        <div className="submit-container">
          {/* Registration button is disabled when action is "Registration" */}
          <div
            className={action === "Registration" ? "submit gray" : "submit"}
            onClick={() => setAction("Registration")}
          >
            Registration
          </div>

          {/* Login button is disabled when action is "Login" */}
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
