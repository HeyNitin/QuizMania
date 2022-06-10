import { createContext, useContext, useEffect, useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  useEffect(() => {
    (async () => {
      const res = localStorage.getItem("token");
      res && setToken(res);
    })();
  }, []);

  return (
    <authContext.Provider value={{ token, setToken }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth };
