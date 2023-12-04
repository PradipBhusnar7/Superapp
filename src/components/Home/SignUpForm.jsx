import React, { useState } from "react";
import "./SignUp.css"; 
import { useNavigate } from "react-router-dom";
import Event from "../../assets/Events.png";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false, 
  });

  const [validationMessages, setValidationMessages] = useState({
    name: "",
    username: "",
    
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

    if (!formData.name.trim()) {
      newValidationMessages.name = "Field is required";
      isValid = false;
    } else {
      newValidationMessages.name = "";
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
      localStorage.setItem("form", JSON.stringify(formData));
      navigate("/another");
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
                placeholder="Name"
                value={formData.username}
                onChange={handleInputChange}
              />
              <div className="error-message">{validationMessages.username}</div>
            </div>
            <div
              className={`form-group ${
                validationMessages.name && "has-error"
              }`}
            >
              <input
                type="text"
                name="name"
                placeholder="Username"
                value={formData.name}
                onChange={handleInputChange}
              />
              <div className="error-message">{validationMessages.name}</div>
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
            <span className="sp">Terms and Conditions of Use</span>
          </p>
          <p className="privacypolicy">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please read Superapp <span className="sp">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
