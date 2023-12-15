import React, { useState } from "react";
import { register } from "../../backend/userFirebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRpasswordChange = (e) => {
    setRpassword(e.target.value);
  };

  const validateEmail = (address) => {
    !address.includes("@") ? setEmailError(true) : setEmailError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError) register(email, password, {});
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className={`mb-3 ${emailError ? "has-error" : ""}`}>
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            className={`form-control ${emailError ? "is-invalid" : ""}`}
            value={email}
            onChange={onEmailChange}
            placeholder="Email Address"
            id="email"
            required
          />
          {emailError && (
            <div className="invalid-feedback">Invalid email address</div>
          )}
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            value={password}
            onChange={onPasswordChange}
            type="password"
            id="password"
            required
          />
        </div>
        <div className="mb-3">
          <label for="repeat-password" className="form-label">
            Repeat Password
          </label>
          <input
            className="form-control"
            value={rpassword}
            onChange={onRpasswordChange}
            type="password"
            id="repeat-password"
            required
          />
        </div>
        <button className="btn btn-success" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
