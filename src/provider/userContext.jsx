import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom"

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [accountInfo, setAccountInfo] = useState({})
    
    const navigate = useNavigate()

    return (

        <UserContext.Provider value={{accountInfo, setAccountInfo, navigate}}>
            {children}
        </UserContext.Provider>    
    )
}