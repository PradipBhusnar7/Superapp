import React, { useState } from "react";
import "./SignUp.css"; 
import Event from "../../assets/Images/Events.png";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    checkbox: false, 
  });

  const [validationMessages, setValidationMessages] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    checkbox: "", 
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const inputValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newValidationMessages = { ...validationMessages };

    if (!formData.username.trim()) {
      newValidationMessages.username = "Field is required";
      isValid = false;
    } else {
      newValidationMessages.username = "";
    }

    if (!formData.password.trim()) {
      newValidationMessages.password = "Field is required";
      isValid = false;
    } else {
      newValidationMessages.password = "";
    }

    if (!formData.email.trim()) {
      newValidationMessages.email = "Field is required";
      isValid = false;
    } else if (
      !formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    ) {
      newValidationMessages.email = "Invalid email address";
      isValid = false;
    } else {
      newValidationMessages.email = "";
    }

    if (!formData.mobile.trim()) {
      newValidationMessages.mobile = "Field is required";
      isValid = false;
    } else if (!formData.mobile.match(/^\d{10}$/)) {
      newValidationMessages.mobile =
        "Invalid mobile number (10 digits expected)";
      isValid = false;
    } else {
      newValidationMessages.mobile = "";
    }

    if (!formData.checkbox) {
      newValidationMessages.checkbox = "Check this box if you want to proceed";
      isValid = false;
    } else {
      newValidationMessages.checkbox = "";
    }

    setValidationMessages(newValidationMessages);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
    } else {
      console.log("Form is invalid, please correct the errors.");
    }
  };

  return (
    <div>
      <div className="eventText">Discover new things on Superapp</div>
      <img src={Event} alt="" />

      <div className="container">
        <div className="super">Super app</div>
        <div className="account">Create your new account</div>

        <div>
          <form onSubmit={handleSubmit} className="signForm">
            <div
              className={`form-group ${
                validationMessages.username && "has-error"
              }`}
            >
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
              <div className="error-message">{validationMessages.username}</div>
            </div>
            <div
              className={`form-group ${
                validationMessages.password && "has-error"
              }`}
            >
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="error-message">{validationMessages.password}</div>
            </div>
            <div
              className={`form-group ${
                validationMessages.email && "has-error"
              }`}
            >
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className="error-message">{validationMessages.email}</div>
            </div>
            <div
              className={`form-group ${
                validationMessages.mobile && "has-error"
              }`}
            >
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <div className="error-message">{validationMessages.mobile}</div>
            </div>

            {/* Checkbox input */}
            <div
              className={`form-group ${
                validationMessages.checkbox && "has-error"
              }`}
            >
              <label className="checkboxText">
                Share my registration data with Superapp
              </label>
              <input
                type="checkbox"
                name="checkbox"
                className="box"
                checked={formData.checkbox}
                onChange={handleInputChange}
              />

              <div className="CheckError">
                {validationMessages.checkbox}
              </div>
            </div>
            <button type="submit" className="btn">
              SIGN UP
            </button>
          </form>

          <p className="termsandcon">
            By clicking on Sign up, you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p className="privacypolicy">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please read Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
