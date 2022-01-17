import React from "react";
import "../../src/App.css";
import { Button } from "../components/Button";
import Footer from "../components/Footer";
import "../components/signupform.css";

export default function SignUp() {
  return (
    <>
      <div className="signup-subscription">
        <form className="form-style">
          <h1>Sign Up</h1>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="signupform-input"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="signupform-input"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="signupform-input"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password again"
              className="signupformend-input"
            />
            <p className="not-in-use-info">*currently not available*</p>
          </div>

          <Button buttonStyle="btn--outline2">Create User</Button>
          
        </form>
        
      </div>
      <Footer />
    </>
  );
}
