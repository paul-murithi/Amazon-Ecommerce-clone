import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateSignUpForm } from "../../utilities/formValidation";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignUpForm(formValues);
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
        <h1>Create an Account</h1>

        <form onSubmit={handleSubmit} noValidate aria-live="polite">
          <div className={"formGroup"}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.name}
              aria-describedby="name-error"
              placeholder="Enter your name"
              required
            />
            {formErrors.name && (
              <span id="name-error" className={"errorMessage"}>
                {formErrors.name}
              </span>
            )}
          </div>

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

          <div className={"formGroup"}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.confirmPassword}
              aria-describedby="confirmPassword-error"
              placeholder="Re-enter your password"
              required
            />
            {formErrors.confirmPassword && (
              <span id="confirmPassword-error" className={"errorMessage"}>
                {formErrors.confirmPassword}
              </span>
            )}
          </div>

          <button type="submit" className={`submitButton button-primary`}>
            Continue
          </button>

          {isSubmitted && (
            <div className={"successMessage"}>
              Account created successfully!
            </div>
          )}
        </form>

        <p className="linkText">
          Already have an account? <Link to="/auth/signin">Sign In</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
