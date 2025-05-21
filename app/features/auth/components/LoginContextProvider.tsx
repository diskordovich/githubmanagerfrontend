import { createContext, useEffect, useState } from "react";

type LoginContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const LoginContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!!sessionStorage.getItem("token")) {
      const timestamp = sessionStorage.getItem("timestamp");
      if (timestamp) {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - parseInt(timestamp);
        if (timeDiff < 1000 * 60 * 55) {
          setIsLoggedIn(true);
        }
      }
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
