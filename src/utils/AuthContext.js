import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {}, // Initial state for clarity
});

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate asynchronous authentication check (replace with your actual logic)
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("user_token");
      if (storedToken) {
        // Validate token on your server (e.g., using axios)
        const response = await fetch("/api/validate-token", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("user_token"); // Invalidate token if validation fails
        }
      }
    };

    checkAuth();
  }, []);
  const logout = async () => {
    try {
      // Implement logout logic (e.g., remove token from storage, send logout request)
      localStorage.removeItem("user_token"); // Example: Remove token from local storage
      setIsAuthenticated(false); // Update state after successful logout
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout errors gracefully (e.g., display an error message)
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
