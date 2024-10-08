import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Updated login function
  const login = async (usernameOrEmail, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernameOrEmail,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "Login failed");
      }

      // Get accessToken only from backend
      const { accessToken } = await response.json();

      // Save the JWT token in localStorage
      localStorage.setItem("jwtToken", accessToken);

      // Set authentication status to true
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Updated logout function
  const logout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("jwtToken");
    setIsAuthenticated(false);
    // setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
