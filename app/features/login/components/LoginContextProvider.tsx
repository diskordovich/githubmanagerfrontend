import { createContext, useEffect, useState } from "react"

type LoginContextType = {
    isLoggedIn: boolean,
}

const LoginContext = createContext<LoginContextType>({
    isLoggedIn: false,
})

export const LoginContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLoggedIn(true)
        }
    }, [])

    return (
        <LoginContext.Provider value={{ isLoggedIn }}>
            {children}
        </LoginContext.Provider>
    )
}