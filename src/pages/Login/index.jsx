import { Input } from "../../components/Input"
import { LoginStyled } from "../../styles/login"
import { useForm } from "react-hook-form"
import { api } from "../../api/api"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useState } from "react"

export const Login = ({setAccountInfo}) => {

    const [loading, setLoading] = useState(false)
    
    const {register, handleSubmit, reset} = useForm()

    const navigate = useNavigate()

    const handleForm = async  (accountData) => {
        
        await loginAccount(accountData)
        reset()
    }

    const loginAccount = async (accountData) => {
        try {
            
            setLoading(true)
            const {data} = await api.post("/sessions", accountData)
            
            localStorage.setItem("@TOKEN", data.token)
            localStorage.setItem("@USERID", data.user.id)
            
            setAccountInfo(data)
            // notify("Login Realizado com sucesso")
            
            toast.success('Login Realizado com Sucesso')

            setTimeout(() => {

                navigate("/dashboard")
                setLoading(false)
            }, "2000")

            
        } catch (error) {
            toast.error("Login ou Senha incorreto!!")
            setLoading(false)
        }
    }


    return (

        <LoginStyled>
            <h1>Kenzie Hub</h1>
            <div className="Form">
                <form onSubmit={handleSubmit(handleForm)}>
                    <h3>Login</h3>
                    <Input type="text" label="Email" {...register("email")}/>
                    <Input type="password" label="Password" {...register("password")}/>
                    <button disabled={loading}>{loading ? "Carregando..." : "Entrar"}</button>
                    <span>Ainda não possui uma conta? </span>
                    <Link className="registerBtn" to={"/register"}><button>Cadastre-se</button></Link>
                </form>
            </div>
        </LoginStyled>
    )
}