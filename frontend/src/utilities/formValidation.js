export const validateSignUpForm = (values) => {
  const errors = {};

  // Name validation
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  // Confirm Password validation
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

export const validateSignInForm = (values) => {
  console.log(values);

  const errors = {};

  // Email validation
  if (!values.usernameOrEmail) {
    errors.usernameOrEmail = "Email is required";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
