import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/register"
import { Dashboard } from "../pages/Dashboard"

export const RoutesMain = ({accountInfo, setAccountInfo}) => {

    return (
        <Routes>
            <Route path="/" element={<Login setAccountInfo={setAccountInfo}/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard setAccountInfo={setAccountInfo} accountInfo={accountInfo}/>}/>
        </Routes>

    )
}