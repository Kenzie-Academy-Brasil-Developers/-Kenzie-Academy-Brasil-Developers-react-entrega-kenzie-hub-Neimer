import { Input } from "../../components/Input"
import { LoginStyled } from "../../styles/login"
import { useForm } from "react-hook-form"
import { formSchema } from "../../components/Form/FormLoginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../api/api"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useState } from "react"
import { UserContext } from "../../provider/userContext"
import { useContext } from "react"

export const Login = () => {
    
    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: zodResolver(formSchema)
    })

    const { loginAccount, loading } = useContext(UserContext)

    const handleForm = async  (accountData) => {
        
        await loginAccount(accountData)
        reset()
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