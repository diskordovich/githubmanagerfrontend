import { useContext } from "react"
import { Navigate } from "react-router"
import { LoginContext } from "./LoginContextProvider"

export default function ProtectedRouteWrapper({ children }: { children: React.ReactNode }) {
    const { isLoggedIn } = useContext(LoginContext)
    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }
    return children
}