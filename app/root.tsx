import {
  Outlet,
} from "react-router";
import "./app.css";
import { LoginContextProvider } from "./features/auth/components/LoginContextProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoginContextProvider>
        <Outlet />
      </LoginContextProvider>
    </QueryClientProvider>
  );
}


