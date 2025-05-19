import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useRegister } from "../auth.api";
import { useLogin } from "../auth.api";
import { LoginContext } from "../components/LoginContextProvider";
import { Navigate } from "react-router";

enum AuthMode {
  LOGIN = "login",
  REGISTER = "register",
}

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.LOGIN);

  const { mutate: login, data: loginData } = useLogin();
  const { mutate: register, data: registerData } = useRegister();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const onAuthButtonClick = () => {
    if (authMode === AuthMode.LOGIN) {
      login({ username, password });
    } else {
      register({ username, password });
    }
  };

  useEffect(() => {
    if (loginData && loginData.token) {
      sessionStorage.setItem("token", loginData.token);
      setIsLoggedIn(true);
    }
  }, [loginData]);

  useEffect(() => {
    if (registerData && registerData.token) {
      sessionStorage.setItem("token", registerData.token);
      setIsLoggedIn(true);
    }
  }, [registerData]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} padding={20}>
      <ToggleButtonGroup
        value={authMode}
        onChange={(_, value) => setAuthMode(value)}
        exclusive
      >
        <ToggleButton value={AuthMode.LOGIN}>Login</ToggleButton>
        <ToggleButton value={AuthMode.REGISTER}>Register</ToggleButton>
      </ToggleButtonGroup>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onAuthButtonClick}>
          {authMode === AuthMode.LOGIN ? "Login" : "Register"}
        </Button>
      </Box>
    </Box>
  );
}
