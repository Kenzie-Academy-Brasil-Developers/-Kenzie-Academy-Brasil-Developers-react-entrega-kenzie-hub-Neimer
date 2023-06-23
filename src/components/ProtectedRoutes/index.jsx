import { useContext } from "react"
import { UserContext } from "../../provider/userContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

    const { accountInfo, isLoading } = useContext(UserContext)

    if(isLoading){
        return null  
    }

    return accountInfo ? <Outlet /> : <Navigate to="/" />
}
