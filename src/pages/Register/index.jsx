import { useForm } from "react-hook-form"
import { Input } from "../../components/Input"
import { formSchema } from "../../components/Form/FormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Registertyled } from "../../styles/register"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../api/api"
import { toast } from "react-toastify"

export const Register = () => {

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: zodResolver(formSchema)
    })

    const navigate = useNavigate()

    const registerAccount = async (accountData) => {
        try {
            const {data} = await api.post("/users", accountData)
            toast.success("Conta criada com sucesso")
            
            navigate("/")

        } catch (error) {
            toast.error(error.message)
        }
    }


    const handleCreateAccount = async (accountData) => {

        await registerAccount  (accountData)
        reset()
    }

    return (

        <Registertyled>
            <div className="registerHeader">
                <h1>Kenzie Hub</h1>
                <Link className="backBtn" to="/">Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(handleCreateAccount)}>
                <h3>Crie sua conta</h3>
                <span>Rapído e grátis, vamos nessa</span>
                <div>
                    <Input type="text" label="Nome" placeholder="Digite aqui seu nome"{...register("name")}/>
                    {errors.name ? <span className="error">{errors.name.message}</span> : null}
                </div>
                <div>
                    <Input type="text" label="Email" placeholder="Digite aqui seu email" {...register("email")}/>
                    {errors.email ? <span className="error">{errors.email.message}</span> : null}
                </div>
                <div>
                    <Input type="password" label="Senha" placeholder="Digite aqui sua senha" {...register("password")}/>
                    {errors.password ? <span className="error">{errors.password.message}</span> : null}
                </div>
                <div>
                    <Input type="password" label="Confirmar Senha" placeholder="Digite novamente sua senha" {...register("confirmPassword")}/>
                    {errors.confirmPassword ? <span className="error">{errors.confirmPassword.message}</span> : null}
                </div>
                <div>
                    <Input type="text" label="Bio" placeholder="Fale sobre você" {...register("bio")} />
                    {errors.bio ? <span className="error">{errors.bio.message}</span> : null}
                </div>
                <div>
                    <Input type="text" label="Contato" placeholder="Opções de contato" {...register("contact")}/>
                    {errors.contact ? <span className="error">{errors.contact.message}</span> : null}
                </div>
                <label className="uniqueLabel">Selecionar módulo</label>
                <select label="Selecionar módulo" {...register("course_module")}>
                {errors.course_module ? <span className="error">{errors.course_module.message}</span> : null}
                    <option>Escolha um módulo</option>
                    <option>Primeiro módulo (Introdução ao Frontend)</option>
                    <option>Segundo módulo (Frontend Avançado)</option>
                    <option>Terceiro módulo (Introdução ao Backend)</option>
                    <option>Quarto módulo (Backend Avançado)</option>
                </select>
                <button>Cadastrar</button>
            </form>
        </Registertyled>
    )
}