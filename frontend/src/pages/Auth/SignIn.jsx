import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./combinedAuth.css";
import { validateSignInForm } from "../../utilities/formValidation";

const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignInForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      // To do: Form submission
      console.log("Form submitted successfully:", formValues);
    }
  };

  return (
    <>
      <div className={"AmazonLogo"}>
        <Link to={"/"}>
          <img src="/amazon-logo.png" alt="amazon-logo" />
        </Link>
      </div>
      <div className={"container"}>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit} noValidate aria-live="polite">
          <div className={"formGroup"}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.email}
              aria-describedby="email-error"
              placeholder="Enter your email"
              required
            />
            {formErrors.email && (
              <span id="email-error" className={"errorMessage"}>
                {formErrors.email}
              </span>
            )}
          </div>

          <div className={"formGroup"}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.password}
              aria-describedby="password-error"
              placeholder="Enter your password"
              required
            />
            {formErrors.password && (
              <span id="password-error" className={"errorMessage"}>
                {formErrors.password}
              </span>
            )}
          </div>

          <button type="submit" className={"submitButton button-primary"}>
            Continue
          </button>

          {isSubmitted && (
            <div className={"successMessage"}>Signed in successfully!</div>
          )}
        </form>

        <p className="linkText">
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
