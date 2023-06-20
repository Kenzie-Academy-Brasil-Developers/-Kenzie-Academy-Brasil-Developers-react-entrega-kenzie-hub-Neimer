import { Input } from "../../components/Input"
import { LoginStyled } from "../../styles/login"
import { useForm } from "react-hook-form"
import { formSchema } from "../../components/Form/FormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../api/api"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useState } from "react"
import { UserContext } from "../../provider/userContext"
import { useContext } from "react"

export const Login = () => {

    const [loading, setLoading] = useState(false)
    
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: zodResolver(formSchema)
    })

    const { setAccountInfo, navigate} = useContext(UserContext)

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
                    {errors.email ? <span className="error">{errors.email.message}</span> : null}
                    <Input type="password" label="Password" {...register("password")}/>
                    {errors.password ? <span className="error">{errors.password.message}</span> : null}
                    <div className="optionLogin">
                        <button className="loginBtn" disabled={loading}>{loading ? "Carregando..." : "Entrar"}</button>
                        <span>Ainda não possui uma conta? </span>
                        <Link className="registerBtn" to={"/register"}>Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </LoginStyled>
    )
}

// Perguntar sobre validacao do zod no login