import React, { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = useCallback(() => {
    setShowLoginModal(true);
  }, []);

  const closeLoginModal = useCallback(() => {
    setShowLoginModal(false);
  }, []);

  const login = ({ loginType, phone, email, password }) => {
    // Only store phone and password OR email and password
    const userData =
      loginType === "phone"
        ? {
            phone: phone.trim(),
            password: password,
          }
        : {
            email: email.trim(),
            password: password,
          };

    // Store in localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));

    // Clean up any other storage keys
    localStorage.removeItem("tiranga_user");
    localStorage.removeItem("tiranga_remembered");

    setUser(userData);
    setShowLoginModal(false);
    return userData;
  };

  const register = ({ loginType, phone, email, password }) => {
    return login({ loginType, phone, email, password });
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("tiranga_user");
    localStorage.removeItem("tiranga_remembered");
    setUser(null);
  };

  const requireAuth = useCallback(
    (callback) => {
      const isAuth = Boolean(user && (user.phone || user.email) && user.password);
      if (isAuth) {
        if (typeof callback === "function") callback();
        return true;
      } else {
        openLoginModal();
        return false;
      }
    },
    [user, openLoginModal]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user && (user.phone || user.email) && user.password),
        showLoginModal,
        setShowLoginModal,
        openLoginModal,
        closeLoginModal,
        requireAuth,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
