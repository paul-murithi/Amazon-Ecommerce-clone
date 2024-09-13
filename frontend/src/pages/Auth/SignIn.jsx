import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./combinedAuth.css";
import { validateSignInForm } from "../../utilities/formValidation";
import { useAuth } from "../../Context/AuthContext";

const SignIn = () => {
  // const { login, isAuthenticated } = useAuth();

  const { login } = useAuth();
  const [formValues, setFormValues] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignInForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      setError("");
      try {
        await login(formValues.usernameOrEmail, formValues.password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
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
            <label htmlFor="usernameOrEmail">Username or Email</label>
            <input
              type="text"
              name="usernameOrEmail"
              id="usernameOrEmail"
              value={formValues.usernameOrEmail}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.usernameOrEmail}
              aria-describedby="usernameOrEmail-error"
              required
            />
            {formErrors.usernameOrEmail && (
              <span id="usernameOrEmail-error">
                {formErrors.usernameOrEmail}
              </span>
            )}
          </div>

          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleInputChange}
              aria-invalid={!!formErrors.password}
              aria-describedby="password-error"
              required
            />
            {formErrors.password && (
              <span id="password-error">{formErrors.password}</span>
            )}
          </div>

          {error && <p className="error">{error}</p>}

          <button
            type="submit"
            className={"submitButton button-primary"}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="linkText">
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
