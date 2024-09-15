import React, { useState } from "react";
import { Link } from "react-router-dom";
import { validateSignUpForm } from "../../utilities/formValidation";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [backendMessage, setBackendMessage] = useState(""); // To store success or error messages from backend
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignUpForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formValues.name,
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
          }),
        });

        // Check if the response is JSON
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (response.ok) {
            setIsSubmitted(true);
            setBackendMessage("Account created successfully!");
          } else {
            setIsSubmitted(false);
            setBackendMessage(data.message || "Error creating account");
          }
        } else {
          // Handle non-JSON responses
          const text = await response.text();
          setIsSubmitted(false);
          setBackendMessage(text || "Unexpected error occurred.");
        }
      } catch (error) {
        setIsSubmitted(false);
        setBackendMessage("Something went wrong. Please try again.");
        console.log(error);
        console.log(formValues);
      } finally {
        setLoading(false);
      }
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formValues.username}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.username}
              aria-describedby="username-error"
              placeholder="Enter your username"
              required
            />
            {formErrors.username && (
              <span id="username-error" className={"errorMessage"}>
                {formErrors.username}
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

          <button
            type="submit"
            className={`submitButton button-primary`}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Continue"}
          </button>

          {isSubmitted && (
            <div className={"successMessage"}>{backendMessage}</div>
          )}

          {!isSubmitted && backendMessage && (
            <div className={"errorMessage"}>{backendMessage}</div>
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
