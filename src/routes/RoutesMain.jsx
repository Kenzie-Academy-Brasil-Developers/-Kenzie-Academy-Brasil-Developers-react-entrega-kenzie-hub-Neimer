import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import { Dashboard } from "../pages/Dashboard"
import { TechProvider } from "../provider/techContext"
import { ProtectedRoutes } from "../components/ProtectedRoutes"

export const RoutesMain = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route element={ <ProtectedRoutes />}>
                <Route path="/dashboard" element={<TechProvider> <Dashboard /> </TechProvider>}/>
            </Route>
        </Routes>

    )
}