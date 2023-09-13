import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../api/api"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from "react-hook-form";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [accountInfo, setAccountInfo] = useState(null)
    
    const [loading, setLoading] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()
    

    useEffect(() => {
    
        const token = localStorage.getItem("@TOKEN")
        const userLogged = async (token) => {  

            if(!token){
                setIsLoading(false)

                return;
            }         
            try {
                setIsLoading(true)
                
                const { data } = await api.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAccountInfo(data)
                navigate("/dashboard")        
                
            }   catch (error) {
                toast.error("Algo deu errado, tente novamente")
            } finally{

                setLoading(false)
                setIsLoading(false)
            }      
        }
      
        userLogged(token)
         
    }, [])

    const registerAccount = async (accountData) => {
        try {
            const {data} = await api.post("/users", accountData)
            toast.success("Conta criada com sucesso")
            
            navigate("/")

        } catch (error) {
            toast.error(error.message)
        }
    }

    const logoutButton = () => {
        
        toast.success("Deslogado com sucesso")

        localStorage.removeItem("@USERID")
        localStorage.removeItem("@TOKEN")
        navigate("/")
        
    }

    const loginAccount = async (accountData) => {
        try {
            
            const {data} = await api.post("/sessions", accountData)
            
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)
            
            setAccountInfo(data.user)
        
            toast.success('Login Realizado com Sucesso')
            navigate("/dashboard")
            
        } catch (error) {
            toast.error("Login ou Senha incorreto!!")
        }
    }

    return (

        <UserContext.Provider value={{setLoading, loading, isLoading, setIsLoading ,accountInfo, setAccountInfo, navigate, registerAccount, logoutButton, loginAccount}}>
            {children}
        </UserContext.Provider>    
    )
}